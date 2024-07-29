import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CatalogueFilterBar } from '../components/catalogue-filter-bar';
import { CatalogueItem } from '../components/catalogue-item';
import { Loader2 } from 'lucide-react';
import { TCatalogueType } from '../types/catalogue.types';
import { useCatalogueStore } from '../store/catalogue.store';
import { useSEO } from '@/hooks/use-seo';

type TStatus = 'pending' | 'ready' | 'error';

export default function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState<TStatus>('pending');

  const param = searchParams.get('id');

  useSEO({
    title: `Catálogo ${param ? `de ${param}` : ''} | Proyectos Inteligentes`,
    description: 'Sección de catálogo de renta de Proyectos Inteligentes.',
    keywords: [
      'Proyectos Inteligentes',
      'construcción',
      'perforaciones',
      'renta',
      'catálogo',
      'demolicion',
      'cotizaciones',
    ],
  });

  const {
    catalogue,
    filteredCatalogue,
    catalogueTypes,
    getCatalogueTypes,
    getCatalogue,
  } = useCatalogueStore();

  const handleCatalogueType = (id: TCatalogueType['id']) => {
    searchParams.set('id', id);
    setSearchParams(searchParams);
  };

  const fetchTypes = async () => {
    try {
      await getCatalogueTypes();
    } catch {
      setStatus('error');
    }
  };

  const fetchData = async () => {
    try {
      setStatus('pending');
      const id = searchParams.get('id');
      await getCatalogue(id);
      setStatus('ready');
    } catch {
      setStatus('error');
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  if (status === 'pending')
    return (
      <main className='grid h-[80vh] w-full place-items-center'>
        <Loader2 size={36} className='animate-spin text-pi-blue-normal' />
      </main>
    );

  if (status === 'error')
    return (
      <main className='flex h-[80vh] w-full flex-col items-center justify-center gap-12 px-6'>
        <span className='text-center md:text-lg'>
          Se ha producido un error. Intente nuevamente mas tarde.
        </span>
        <Link
          to='/'
          className='rounded-sm bg-pi-blue-normal px-3 py-2 text-lg font-semibold text-white'
        >
          Ir al Inicio
        </Link>
      </main>
    );
  return (
    <main className='flex flex-col items-center gap-4'>
      {catalogue instanceof Error ? (
        <span className='p-24'>{catalogue.message}</span>
      ) : (
        <>
          <CatalogueFilterBar
            data={catalogueTypes as TCatalogueType[]}
            handleType={handleCatalogueType}
            selectedType={searchParams.get('id')}
          />
          {filteredCatalogue.length > 0 ? (
            <ul className='flex flex-wrap justify-center gap-6 p-6'>
              {filteredCatalogue.map((item) => (
                <CatalogueItem key={item.id} data={item} />
              ))}
            </ul>
          ) : (
            <span className='p-24'>
              No se encontraron productos en el catálogo.
            </span>
          )}
        </>
      )}
    </main>
  );
}

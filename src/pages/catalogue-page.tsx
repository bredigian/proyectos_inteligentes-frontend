import { useEffect, useState } from 'react';

import { CatalogueFilterBar } from '../components/catalogue-filter-bar';
import { CatalogueItem } from '../components/catalogue-item';
import { Loader2 } from 'lucide-react';
import { TCatalogueType } from '../types/catalogue.types';
import { useCatalogueStore } from '../store/catalogue.store';
import { useSearchParams } from 'react-router-dom';

type TStatus = 'pending' | 'ready';

export default function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState<TStatus>('pending');

  const { catalogue, catalogueTypes, getCatalogueTypes, getCatalogue } =
    useCatalogueStore();

  const handleCatalogueType = (id: TCatalogueType['id']) => {
    searchParams.set('id', id);
    setSearchParams(searchParams);
  };

  const fetchTypes = async () => await getCatalogueTypes();

  const fetchData = async () => {
    const id = searchParams.get('id');
    await getCatalogue(id);
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  useEffect(() => {
    setStatus('pending');
    fetchData();
    setTimeout(() => {
      setStatus('ready');
    }, 600);
  }, [searchParams]);

  if (status === 'pending')
    return (
      <main className='grid h-[80vh] w-full place-items-center'>
        <Loader2 size={36} className='animate-spin text-pi-blue-normal' />
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
          {catalogue.length > 0 ? (
            <ul className='flex flex-wrap justify-center gap-6 p-6'>
              {catalogue.map((item) => (
                <CatalogueItem key={item.id} data={item} />
              ))}
            </ul>
          ) : (
            <span>No se encontraron productos en el catálogo.</span>
          )}
        </>
      )}
    </main>
  );
}

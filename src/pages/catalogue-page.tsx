import { CatalogueFilterBar } from '../components/catalogue-filter-bar';
import { CatalogueItem } from '../components/catalogue-item';
import { TCatalogueType } from '../types/catalogue.types';
import { useCatalogueStore } from '../store/catalogue.store';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams();

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
    fetchData();
  }, [searchParams]);

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

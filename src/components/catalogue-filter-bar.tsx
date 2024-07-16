import { TCatalogueType } from '../types/catalogue.types';
import { cn } from '../lib/utils';
import selectorIcon from '../assets/utils/filter-bar-menu-icon.png';
import { useState } from 'react';

type Props = {
  data: TCatalogueType[];
  handleType: (id: TCatalogueType['id']) => void;
  selectedType: TCatalogueType['id'] | null;
};

export const CatalogueFilterBar = ({
  data,
  handleType,
  selectedType,
}: Props) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <nav className='relative w-full'>
      <div className='relative z-[30] flex w-full items-center justify-between bg-white px-6 py-5'>
        <span className='text-xl font-bold text-pi-blue-normal'>
          Catálogo de Renta
        </span>
        <button type='button' onClick={() => setShowFilters(!showFilters)}>
          <img
            alt='Selector de tipos de Catálogos'
            src={selectorIcon}
            className='w-10'
          />
        </button>
      </div>
      <ul
        className={cn(
          'absolute z-20 flex w-full flex-col items-center gap-4 bg-white py-6 shadow-xl duration-200 ease-in-out',
          !showFilters ? '-translate-y-64' : 'translate-y-0',
        )}
      >
        {data.map((item) => (
          <li
            key={`${item.id}_key`}
            className={cn(
              'text-lg font-semibold',
              selectedType !== item.id
                ? 'text-pi-gray-normal'
                : 'text-pi-blue-normal',
            )}
            onClick={() => {
              handleType(item.id);
              setShowFilters(!showFilters);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

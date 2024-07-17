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
    <nav className='relative w-full md:flex md:items-center md:justify-between md:shadow-md'>
      <div className='relative z-[30] flex w-full items-center justify-between bg-white px-6 py-5'>
        <span className='text-xl font-bold text-pi-blue-normal'>
          Catálogo de Renta
        </span>
        <button
          className='md:hidden'
          type='button'
          onClick={() => setShowFilters(!showFilters)}
        >
          <img
            alt='Selector de tipos de Catálogos'
            src={selectorIcon}
            className='w-10'
          />
        </button>
      </div>
      <ul
        className={cn(
          'absolute z-20 flex w-full flex-col items-center gap-4 bg-white py-6 shadow-xl duration-200 ease-in-out md:relative md:w-fit md:flex-row md:pr-6 md:shadow-none',
          !showFilters
            ? '-translate-y-[304px] md:-translate-y-0'
            : 'translate-y-0',
        )}
      >
        {data.map((item) => (
          <li
            key={`${item.id}_key`}
            className={cn(
              'cursor-pointer text-lg font-semibold hover:text-pi-blue-normal md:text-sm',
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

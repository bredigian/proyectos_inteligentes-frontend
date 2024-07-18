import { Link } from 'react-router-dom';
import { TCatalogue } from '../types/catalogue.types';

type Props = {
  data: TCatalogue;
};

export const CatalogueItem = ({ data }: Props) => (
  <li className='flex max-w-[420px] flex-col items-center gap-4 overflow-hidden bg-pi-gray-ultra-light md:bg-transparent'>
    <img
      src={data.image}
      alt={`Imágen de ${data.name}`}
      className='h-2/6 object-cover p-6 pb-0'
    />
    <div className='flex grow flex-col gap-4 p-6'>
      <span className='text-lg font-bold text-pi-blue-normal'>{data.name}</span>
      <p className='text-sm text-pi-gray-normal'>{data.description}</p>
    </div>
    <Link
      to='/contact'
      className='mb-4 w-fit rounded-sm bg-pi-blue-normal px-16 py-2 font-bold text-white'
    >
      Cotizar
    </Link>
  </li>
);

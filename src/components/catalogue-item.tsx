import { Link } from 'react-router-dom';
import { TCatalogue } from '../types/catalogue.types';

type Props = {
  data: TCatalogue;
};

export const CatalogueItem = ({ data }: Props) => (
  <li className='flex flex-col items-center gap-4 bg-pi-gray-ultra-light'>
    <img src={data.img} alt={`Imágen de ${data.name}`} className='w-full' />
    <div className='flex flex-col gap-4 p-6'>
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

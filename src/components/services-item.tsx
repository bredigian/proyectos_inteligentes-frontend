import { Link } from 'react-router-dom';
import { TService } from '../types/services.types';

type Props = {
  service: TService;
  toConcreto?: boolean;
};

export const ServicesItem = ({ service, toConcreto }: Props) => (
  <li className='relative flex flex-col gap-4 overflow-hidden rounded-md shadow-xl'>
    <div className='image w-full'>
      <img
        src={service.imgMobile}
        className='h-full w-full'
        alt={`Imágen mobile de ${service.title}`}
      />
      <img
        src={service.imgDesktop}
        className='hidden'
        alt={`Imágen desktop de ${service.title}`}
      />
    </div>
    <div className='flex flex-col items-center gap-4 p-4 text-center'>
      <span className='text-2xl font-bold text-pi-blue-normal'>
        {service.title}
      </span>
      <p className='text-sm opacity-90'>{service.description}</p>
    </div>
    <Link
      to={
        !toConcreto
          ? '/services/quotes'
          : '/services/quotes?type=perforaciones_en_concreto'
      }
      className='w-full bg-pi-blue-normal py-2 text-center font-bold text-white'
    >
      Cotizar
    </Link>
  </li>
);

import { Link } from 'react-router-dom';
import { SERVICES } from '../content/services';

export default function Services() {
  return (
    <main className='flex w-full flex-col items-center gap-12 p-4'>
      <span className='text-2xl font-bold text-pi-blue-normal'>Servicios</span>
      <ul className='flex flex-wrap gap-8 px-6'>
        {SERVICES.map((service) => (
          <li
            key={`${service.title}_service_key`}
            className='relative flex flex-col gap-4 overflow-hidden rounded-md shadow-xl'
          >
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
              to={'#'}
              className='w-full bg-pi-blue-normal py-2 text-center font-bold text-white'
            >
              Cotizar
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

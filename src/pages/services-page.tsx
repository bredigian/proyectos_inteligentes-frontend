import { SERVICES } from '../content/services';
import { ServicesItem } from '../components/services-item';

export default function Services() {
  return (
    <main className='flex w-full flex-col items-center gap-12 p-4'>
      <span className='text-2xl font-bold text-pi-blue-normal'>Servicios</span>
      <ul className='flex flex-wrap gap-8 px-6'>
        {SERVICES.map((service) => (
          <ServicesItem
            key={`${service.title}_service__key`}
            service={service}
            toConcreto={
              service.title === 'Perforaciones en Concreto' ? true : false
            }
          />
        ))}
      </ul>
    </main>
  );
}

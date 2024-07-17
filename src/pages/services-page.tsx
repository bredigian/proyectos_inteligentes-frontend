import { SERVICES } from '../content/services';
import { ServicesItem } from '../components/services-item';

export default function Services() {
  return (
    <main className='flex w-full flex-col items-center gap-12 p-4'>
      <span className='xsm:text-3xl text-2xl font-bold text-pi-blue-normal xl:text-4xl'>
        Servicios
      </span>
      <ul className='flex max-w-screen-xl flex-wrap justify-center gap-8 px-6'>
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

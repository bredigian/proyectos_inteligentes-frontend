import { SERVICES } from '../content/services';
import { ServicesItem } from '../components/services-item';
import { useSEO } from '@/hooks/use-seo';

export default function Services() {
  useSEO({
    title: 'Servicios | Proyectos Inteligentes',
    description: 'Sección de servicios de Proyectos Inteligentes.',
    keywords: [
      'Proyectos Inteligentes',
      'servicios',
      'construcción',
      'perforaciones',
      'renta',
      'remodelaciones',
      'cotizaciones',
    ],
  });

  return (
    <main className='flex w-full flex-col items-center gap-12 p-4'>
      <span className='text-2xl font-bold text-pi-blue-normal xsm:text-3xl xl:text-4xl'>
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

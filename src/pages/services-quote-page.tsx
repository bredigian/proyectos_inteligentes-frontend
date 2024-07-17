import {
  ServicesCustomQuoteForm,
  ServicesQuoteForm,
} from '@/components/services-quote-form';

import cotizarPerforacionesEnConcretoMobile from '../assets/images/services/mobile/IMG_PerforacionesEnConcreto_001.png';
import cotizarProyecto from '../assets/images/services/mobile/IMG_CotizarProyecto_001.png';
import { useSearchParams } from 'react-router-dom';

export default function ServicesQuotes() {
  const [searchParams] = useSearchParams();

  if (searchParams.get('type') !== 'perforaciones_en_concreto')
    return (
      <main className='flex w-full flex-col items-center gap-4'>
        <div className='w-full'>
          <img
            src={cotizarProyecto}
            alt='Imágen mobile de cotización de proyecto.'
          />
        </div>
        <section className='flex w-full flex-col items-center gap-4 p-4'>
          <h1 className='text-3xl font-bold text-pi-blue-normal'>
            Cotizar Proyecto
          </h1>
          <ServicesQuoteForm />
        </section>
      </main>
    );

  return (
    <main className='flex w-full flex-col items-center gap-4'>
      <div className='flex flex-col items-center gap-4 p-8'>
        <span className='text-center text-2xl font-bold text-pi-blue-normal'>
          Perforaciones en concreto
        </span>
        <p className='text-sm font-medium text-pi-gray-normal'>
          Realizamos perforaciones circulares para paso de instalaciones en
          muros y losas de concreto de hasta 1.2 metros de profundidad. Nuestros
          procedimientos son limpios y seguros, garantizando un excelente
          trabajo.
        </p>
      </div>
      <div className='w-full'>
        <img
          alt='Imágen mobile de cotización de Perforaciones en concreto.'
          src={cotizarPerforacionesEnConcretoMobile}
          className='w-full'
        />
      </div>
      <section className='flex w-full flex-col items-center gap-4 p-4'>
        <h1 className='text-3xl font-bold text-pi-blue-normal'>
          Cotizar Proyecto
        </h1>
        <ServicesCustomQuoteForm />
      </section>
    </main>
  );
}

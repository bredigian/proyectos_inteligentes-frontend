import {
  ServicesCustomQuoteForm,
  ServicesQuoteForm,
} from '@/components/services-quote-form';

import cotizarPerforacionesEnConcretoDesktop from '../assets/images/services/desktop/PC_CotizarProyecto_002.png';
import cotizarPerforacionesEnConcretoMobile from '../assets/images/services/mobile/IMG_PerforacionesEnConcreto_001.png';
import cotizarProyecto from '../assets/images/services/mobile/IMG_CotizarProyecto_001.png';
import cotizarProyecto3raImagen from '../assets/images/services/desktop/PC_CotizarProyecto_003.png';
import perforacionesEnConcretoDesktop from '../assets/images/services/desktop/PerforacionesEnConcreto001.png';
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
      <div className='grid grid-cols-2'>
        <div className='relative col-span-full w-full p-8 pb-2 text-center md:flex md:flex-col md:items-center md:justify-center md:p-0'>
          <img
            alt='Imágen de Perforaciones en concreto'
            className='hidden w-full md:block'
            src={perforacionesEnConcretoDesktop}
          />
          <span className='xsm:text-4xl text-center text-2xl font-bold text-pi-blue-normal md:absolute md:text-3xl md:text-white xl:text-5xl'>
            Perforaciones en concreto
          </span>
        </div>
        <div className='col-span-full p-8 pt-2 md:col-span-1 md:my-auto'>
          <p className='text-sm font-medium text-pi-gray-normal md:p-8 md:text-base'>
            Realizamos perforaciones circulares para paso de instalaciones en
            muros y losas de concreto de hasta 1.2 metros de profundidad.
            Nuestros procedimientos son limpios y seguros, garantizando un
            excelente trabajo.
          </p>
        </div>
        <div className='col-span-full md:col-span-1'>
          <img
            alt='Imágen mobile de cotización de Perforaciones en concreto.'
            src={cotizarPerforacionesEnConcretoMobile}
            className='w-full md:hidden'
          />
          <img
            alt='Imágen mobile de cotización de Perforaciones en concreto.'
            src={cotizarPerforacionesEnConcretoDesktop}
            className='hidden w-full md:block'
          />
        </div>
      </div>
      <section className='grid w-full grid-cols-5'>
        <img
          src={cotizarProyecto3raImagen}
          alt='Imágen relacionada al formulario de cotizacion de proyecto.'
          className='hidden h-full object-cover md:col-span-2 md:block xl:max-h-[580px] xl:w-full'
        />
        <div className='col-span-full flex flex-col items-center gap-4 p-4 md:col-span-3 xl:items-start'>
          <h1 className='text-3xl font-bold text-pi-blue-normal xl:mx-4 xl:max-w-96 xl:text-5xl'>
            Cotizar Proyecto
          </h1>
          <ServicesCustomQuoteForm />
        </div>
      </section>
    </main>
  );
}

import { ServicesQuoteForm } from '@/components/services-quote-form';
import cotizarProyecto from '../assets/images/services/mobile/IMG_CotizarProyecto_001.png';

export default function ServicesQuotes() {
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
}

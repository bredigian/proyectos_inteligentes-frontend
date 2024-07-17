import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
// Other sections
import perforacionesEnConcretoDesktop from '../assets/images/home/desktop/hero_PerforacionesEnConcreto.png';
import perforacionesEnConcretoMobile from '../assets/images/home/mobile/hero_PerforacionesEnConcreto.png';
import remodelacionesDesktop from '../assets/images/home/desktop/hero_Remodelaciones.png';
import remodelacionesMobile from '../assets/images/home/mobile/hero_Remodelaciones.png';
import rentaDeEquiposDesktop from '../assets/images/home/desktop/hero_RentaDeEquipos.png';
import rentaDeEquiposMobile from '../assets/images/home/mobile/hero_RentaDeEquipos.png';
// Slider Images
import slideDesktop1 from '../assets/images/home/desktop/slides/Slide_001.png';
import slideDesktop2 from '../assets/images/home/desktop/slides/Slide_002.png';
import slideDesktop3 from '../assets/images/home/desktop/slides/Slide_003.png';
import slideDesktop4 from '../assets/images/home/desktop/slides/Slide_004.png';
import slideDesktop5 from '../assets/images/home/desktop/slides/Slide_005.png';
import slideMobile1 from '../assets/images/home/mobile/slides/Slide_001.png';
import slideMobile2 from '../assets/images/home/mobile/slides/Slide_002.png';
import slideMobile3 from '../assets/images/home/mobile/slides/Slide_003.png';
import slideMobile4 from '../assets/images/home/mobile/slides/Slide_004.png';
import slideMobile5 from '../assets/images/home/mobile/slides/Slide_005.png';
//------------------
import { useCarousel } from '../hooks/use-carousel';

type ButtonProps = {
  toConcreto?: boolean;
};

const ButtonQuote = ({ toConcreto }: ButtonProps) => (
  <Link
    type='button'
    to={
      !toConcreto
        ? '/services/quotes'
        : '/services/quotes?type=perforaciones_en_concreto'
    }
    className='rounded-sm bg-pi-gray-ultra-light px-4 py-2.5 text-sm font-bold text-pi-blue-normal'
  >
    Cotizar
  </Link>
);

type Props = { children: ReactNode };

const TitleItem = ({ children }: Props) => (
  <span className='px-12 text-3xl font-bold text-white'>{children}</span>
);

export const SectionHomeHero = () => {
  const { emblaRef } = useCarousel({ autoplay: true });

  return (
    <section className='grid grid-cols-2 gap-1'>
      <div className='embla z-20 col-span-full'>
        <div
          className='embla__viewport relative overflow-hidden'
          ref={emblaRef}
        >
          <div className='embla__container flex cursor-grab active:cursor-grabbing'>
            <div className='embla__slide shrink-0 grow basis-full'>
              <img
                alt='Slide 1 versión mobile'
                className='h-full w-full object-cover'
                src={slideMobile1}
              />
              <img
                alt='Slide 1 versión desktop'
                className='hidden h-full w-full object-cover'
                src={slideDesktop1}
              />
            </div>
            <div className='embla__slide shrink-0 grow basis-full'>
              <img
                alt='Slide 2 versión mobile'
                className='h-full w-full object-cover'
                src={slideMobile2}
              />
              <img
                alt='Slide 2 versión desktop'
                className='hidden h-full w-full object-cover'
                src={slideDesktop2}
              />
            </div>
            <div className='embla__slide shrink-0 grow basis-full'>
              <img
                alt='Slide 3 versión mobile'
                className='h-full w-full object-cover'
                src={slideMobile3}
              />
              <img
                alt='Slide 3 versión desktop'
                className='hidden h-full w-full object-cover'
                src={slideDesktop3}
              />
            </div>
            <div className='embla__slide shrink-0 grow basis-full'>
              <img
                alt='Slide 4 versión mobile'
                className='h-full w-full object-cover'
                src={slideMobile4}
              />
              <img
                alt='Slide 4 versión desktop'
                className='hidden h-full w-full object-cover'
                src={slideDesktop4}
              />
            </div>
            <div className='embla__slide shrink-0 grow basis-full'>
              <img
                alt='Slide 5 versión mobile'
                className='h-full w-full object-cover'
                src={slideMobile5}
              />
              <img
                alt='Slide 5 versión desktop'
                className='hidden h-full w-full object-cover'
                src={slideDesktop5}
              />
            </div>
          </div>
          <div className='absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 text-center'>
            <span className='px-6 text-4xl font-bold text-pi-gray-light'>
              Soluciones para tu construcción
            </span>
            <p className='px-6 text-lg font-semibold text-pi-gray-light'>
              Nos encargamos de todo el proceso de construcción
            </p>
            <Link
              to={'/services/quotes'}
              className='rounded-sm bg-pi-blue-normal px-4 py-3 text-xl font-bold text-pi-gray-ultra-light shadow-md'
            >
              Cotizar Proyecto
            </Link>
          </div>
        </div>
      </div>
      <div className='relative col-span-full'>
        <div className='w-full'>
          <img
            alt='Imágen para mobile de Perforaciones en concreto'
            className='w-full'
            src={perforacionesEnConcretoMobile}
          />
          <img
            alt='Imágen para desktop de Perforaciones en concreto'
            className='hidden'
            src={perforacionesEnConcretoDesktop}
          />
        </div>
        <div className='absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 text-center'>
          <TitleItem>Perforaciones en concreto</TitleItem>
          <ButtonQuote toConcreto />
        </div>
      </div>
      <div className='relative col-span-full'>
        <div className='w-full'>
          <img
            alt='Imágen para mobile de Renta de Equipos'
            className='w-full'
            src={rentaDeEquiposMobile}
          />
          <img
            alt='Imágen para desktop de Renta de Equipos'
            className='hidden'
            src={rentaDeEquiposDesktop}
          />
        </div>
        <div className='absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 text-center'>
          <TitleItem>Renta de equipo de construcción</TitleItem>
          <ButtonQuote />
        </div>
      </div>
      <div className='relative col-span-full'>
        <div className='w-full'>
          <img
            alt='Imágen para mobile de Remodelaciones'
            className='w-full'
            src={remodelacionesMobile}
          />
          <img
            alt='Imágen para desktop de Remodelaciones'
            className='hidden'
            src={remodelacionesDesktop}
          />
        </div>
        <div className='absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 text-center'>
          <TitleItem>Remodelaciones</TitleItem>
          <ButtonQuote />
        </div>
      </div>
    </section>
  );
};

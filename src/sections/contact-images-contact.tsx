import oficinasDesktop from '../assets/images/contact/desktop/IMG_Oficinas.png';
import oficinasMobile from '../assets/images/contact/mobile/IMG_Oficinas.png';
import telefonoDesktop from '../assets/images/contact/desktop/IMG_Teléfono.png';
import telefonoMobile from '../assets/images/contact/mobile/IMG_Teléfono.png';

export const SectionContactImagesContact = () => {
  return (
    <section className='relative grid grid-cols-2 gap-1'>
      <div className='relative col-span-full'>
        <div className='w-full'>
          <img
            src={oficinasMobile}
            className='w-full'
            alt='Imágen mobile de "Oficinas" de Proyectos Inteligentes'
          />
          <img
            src={oficinasDesktop}
            className='hidden'
            alt='Imágen desktop de "Oficinas" de Proyectos Inteligentes'
          />
        </div>
        <div className='absolute top-0 flex h-full w-full flex-col items-center justify-center gap-1'>
          <span className='text-3xl font-bold text-white'>Oficinas</span>
          <span className='text-lg font-bold text-white'>
            2ª calle 18-55, oficina C
          </span>
          <span className='text-lg font-bold text-white'>
            VHI, Zona 15, Guatemala
          </span>
        </div>
      </div>
      <div className='relative col-span-full'>
        <div className='w-full'>
          <img
            src={telefonoMobile}
            className='w-full'
            alt='Imágen mobile de "Teléfono" de Proyectos Inteligentes'
          />
          <img
            src={telefonoDesktop}
            className='hidden'
            alt='Imágen desktop de "Teléfono" de Proyectos Inteligentes'
          />
        </div>
        <div className='absolute top-0 flex h-full w-full flex-col items-center justify-center gap-1'>
          <span className='text-3xl font-bold text-white'>Teléfono</span>
          <span className='text-lg font-bold text-white'>+502 2365-6492</span>
        </div>
      </div>
    </section>
  );
};

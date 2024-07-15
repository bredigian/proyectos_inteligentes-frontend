import projectDesktop from '../assets/images/home/desktop/section_Proyecto.png';
import projectMobile from '../assets/images/home/mobile/section_Proyecto.png';

export const SectionHomeProject = () => {
  return (
    <section className='grid grid-cols-5'>
      <span className='col-span-full px-16 py-24 text-center text-2xl font-bold text-pi-blue-normal'>
        Más de 10 años de experiencia
      </span>
      <div className='col-span-full'>
        <img
          alt='Imágen de proyecto de Proyectos Inteligentes'
          className='w-full'
          src={projectMobile}
        />
        <img
          alt='Imágen de proyecto de Proyectos Inteligentes'
          className='hidden'
          src={projectDesktop}
        />
      </div>
      <span className='col-span-full grid place-items-center bg-pi-blue-normal px-16 py-20 text-center text-2xl font-bold text-white'>
        Trabajamos en todo tipo de proyectos
      </span>
    </section>
  );
};

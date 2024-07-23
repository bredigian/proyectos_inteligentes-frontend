import projectDesktop from '../assets/images/home/desktop/section_Proyecto.jpg';
import projectMobile from '../assets/images/home/mobile/section_Proyecto.jpg';

export const SectionHomeProject = () => {
  return (
    <section className='grid grid-cols-5'>
      <span className='col-span-full max-w-md place-self-center px-16 py-24 text-center text-2xl font-bold text-pi-blue-normal xl:text-4xl'>
        Más de 10 años de experiencia
      </span>
      <div className='col-span-full xsm:col-span-3'>
        <img
          alt='Imágen de proyecto de Proyectos Inteligentes'
          className='w-full xsm:hidden'
          src={projectMobile}
        />
        <img
          alt='Imágen de proyecto de Proyectos Inteligentes'
          className='hidden w-full xsm:block'
          src={projectDesktop}
        />
      </div>
      <span className='col-span-full grid place-items-center bg-pi-blue-normal px-16 py-20 text-center text-2xl font-bold text-white xsm:col-span-2 xsm:max-w-md xsm:bg-white xsm:text-start xsm:text-3xl xsm:text-pi-blue-normal xl:max-w-lg xl:text-4xl'>
        Trabajamos en todo tipo de proyectos
      </span>
    </section>
  );
};

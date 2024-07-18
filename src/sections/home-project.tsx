import projectDesktop from '../assets/images/home/desktop/section_Proyecto.png';
import projectMobile from '../assets/images/home/mobile/section_Proyecto.png';

export const SectionHomeProject = () => {
  return (
    <section className='grid grid-cols-5'>
      <span className='col-span-full max-w-md place-self-center px-16 py-24 text-center text-2xl font-bold text-pi-blue-normal xl:text-4xl'>
        Más de 10 años de experiencia
      </span>
      <div className='xsm:col-span-3 col-span-full'>
        <img
          alt='Imágen de proyecto de Proyectos Inteligentes'
          className='xsm:hidden w-full'
          src={projectMobile}
        />
        <img
          alt='Imágen de proyecto de Proyectos Inteligentes'
          className='xsm:block hidden w-full'
          src={projectDesktop}
        />
      </div>
      <span className='xsm:col-span-2 xsm:bg-white xsm:text-start xsm:text-pi-blue-normal xsm:text-3xl xsm:max-w-md col-span-full grid place-items-center bg-pi-blue-normal px-16 py-20 text-center text-2xl font-bold text-white xl:max-w-lg xl:text-4xl'>
        Trabajamos en todo tipo de proyectos
      </span>
    </section>
  );
};

import { HomeContactForm } from '../components/contact-form';

export const SectionContactForm = () => {
  return (
    <section className='xsm:py-16 xsm:gap-8 flex w-full flex-col items-center gap-4 px-8 py-6'>
      <span className='xsm:text-3xl xsm:mr-80 text-2xl font-bold text-pi-blue-normal lg:mr-[480px] xl:mr-[445px] xl:text-4xl'>
        Contáctanos
      </span>
      <HomeContactForm />
    </section>
  );
};

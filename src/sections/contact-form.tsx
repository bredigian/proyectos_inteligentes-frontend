import { HomeContactForm } from '../components/contact-form';

export const SectionContactForm = () => {
  return (
    <section className='flex w-full flex-col items-center gap-4 px-8 py-6 xsm:gap-8 xsm:py-16'>
      <span className='text-2xl font-bold text-pi-blue-normal xsm:mr-80 xsm:text-3xl lg:mr-[480px] xl:mr-[445px] xl:text-4xl'>
        Contáctanos
      </span>
      <HomeContactForm />
    </section>
  );
};

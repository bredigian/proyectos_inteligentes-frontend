import { HomeContactForm } from '../components/contact-form';

export const SectionHomeContact = () => {
  return (
    <section className='flex flex-col items-center gap-4 px-8 py-6'>
      <span className='text-2xl font-bold text-pi-blue-normal'>
        Contáctanos
      </span>
      <HomeContactForm />
    </section>
  );
};

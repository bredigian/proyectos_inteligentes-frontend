import { SectionContactForm } from '../sections/contact-form';
import { SectionContactImagesContact } from '../sections/contact-images-contact';

export default function Contact() {
  return (
    <main className='flex w-full flex-col items-center gap-4'>
      <SectionContactForm />
      <SectionContactImagesContact />
    </main>
  );
}

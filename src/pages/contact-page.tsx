import { SectionContactForm } from '../sections/contact-form';
import { SectionContactImagesContact } from '../sections/contact-images-contact';
import { useSEO } from '@/hooks/use-seo';

export default function Contact() {
  useSEO({
    title: 'Contacto | Proyectos Inteligentes',
    description: 'Sección de contacto de Proyectos Inteligentes.',
    keywords: [
      'Proyectos Inteligentes',
      'contacto',
      'construcción',
      'perforaciones',
      'renta',
      'remodelaciones',
      'cotizaciones',
    ],
  });

  return (
    <main className='flex w-full flex-col items-center gap-4'>
      <SectionContactForm />
      <SectionContactImagesContact />
    </main>
  );
}

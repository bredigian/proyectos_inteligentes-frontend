import { SectionContactForm } from '../sections/contact-form';
import { SectionHomeHero } from '../sections/home-hero';
import { SectionHomeProject } from '../sections/home-project';
import { useSEO } from '@/hooks/use-seo';

export default function Home() {
  useSEO({
    title: 'Inicio | Proyectos Inteligentes',
    description: 'Página web de Proyectos Inteligentes.',
    keywords: [
      'Proyectos Inteligentes',
      'construcción',
      'perforaciones',
      'renta',
      'demolicion',
      'cotizaciones',
    ],
  });

  return (
    <main className='flex w-full flex-col'>
      <SectionHomeHero />
      <SectionHomeProject />
      <SectionContactForm />
    </main>
  );
}

import { SectionContactForm } from '../sections/contact-form';
import { SectionHomeHero } from '../sections/home-hero';
import { SectionHomeProject } from '../sections/home-project';

export default function Home() {
  return (
    <main className='flex w-full flex-col'>
      <SectionHomeHero />
      <SectionHomeProject />
      <SectionContactForm />
    </main>
  );
}

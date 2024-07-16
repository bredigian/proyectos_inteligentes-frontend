import { SectionHomeContact } from '../sections/home-contact';
import { SectionHomeHero } from '../sections/home-hero';
import { SectionHomeProject } from '../sections/home-project';

export default function Home() {
  return (
    <main className='flex w-full flex-col'>
      <SectionHomeHero />
      <SectionHomeProject />
      <SectionHomeContact />
    </main>
  );
}

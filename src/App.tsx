import { SectionHomeHero } from './sections/home-hero';
import { SectionHomeProject } from './sections/home-project';

export default function App() {
  return (
    <main className='flex w-full flex-col'>
      <SectionHomeHero />
      <SectionHomeProject />
    </main>
  );
}

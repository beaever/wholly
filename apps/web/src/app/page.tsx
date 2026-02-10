import { Header, Greeting, HeroCard, BentoGrid } from '@/components/home';
import { NavBar } from '@/components/common';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-bg pb-[100px]'>
      <Header />
      <Greeting />
      <HeroCard />
      <BentoGrid />
      <NavBar />
    </main>
  );
}

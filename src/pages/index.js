import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Services from '@/components/Services';
import Differentiation from '@/components/Differentiation';
import Pricing from '@/components/Pricing';
import SampleWork from '@/components/SampleWork';
import TrustSecurity from '@/components/TrustSecurity';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Differentiation />
      <Pricing />
      <SampleWork />
      <TrustSecurity />
      <FinalCTA />
    </>
  );
}

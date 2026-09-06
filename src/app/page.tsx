import HeroSection from '@/components/sections/HeroSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import MethodologyTeaser from '@/components/sections/MethodologyTeaser';
import DataWarSection from '@/components/sections/DataWarSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import AboutTeacher from '@/components/sections/AboutTeacher';
import PricingSection from '@/components/sections/PricingSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <MethodologyTeaser />
      <DataWarSection />
      <TestimonialsPreview />
      <AboutTeacher />
      <PricingSection />
    </>
  );
}

import LogoWordMark from "@/assets/icons/dwe/logoWordMark";
import LandingHero from "@/assets/landingHero";
import Section from "@/components/molecules/section";

const Landing = () => (
  <Section className="bg-yellow text-purple h-screen">
    <LogoWordMark />
    <div className="flex-1 flex items-center justify-center">
      <LandingHero className="w-full md:w-[40%]" />
    </div>
  </Section>
);
export default Landing;

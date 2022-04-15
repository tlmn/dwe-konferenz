import LogoWordMark from "@/assets/icons/dwe/logoWordMark";
import LandingHero from "@/assets/landingHero";
import Button from "@/components/atoms/button";
import Section from "@/components/molecules/section";
import Link from "next/link";

const Landing = () => (
  <Section className="bg-yellow text-purple h-screen">
    <div>
      <Button href="https://www.dwenteignen.de">
        <LogoWordMark />
      </Button>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <LandingHero className="w-full md:w-[40%]" />
    </div>
  </Section>
);
export default Landing;

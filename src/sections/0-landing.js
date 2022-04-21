import LogoWordMark from "@/assets/icons/dwe/logoWordMark";
import LandingHero from "@/assets/landingHero";
import Button from "@/components/atoms/button";
import Section from "@/components/molecules/section";
import Image from "next/image";
import ImageLanding from "@/public/images/landing.jpg";

const Landing = () => (
  <Section className="bg-yellow text-purple h-screen">
    <div className="absolute top-0 left-0 h-full w-full z-0 overflow-hidden">
      <Image src={ImageLanding} alt="" layout="responsive" />
    </div>
    <div className="relative z-10">
      <div>
        <Button href="https://www.dwenteignen.de">
          <LogoWordMark />
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <LandingHero className="w-full md:w-[40%]" />
      </div>
    </div>
  </Section>
);
export default Landing;

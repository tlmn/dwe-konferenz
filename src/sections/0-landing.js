import LogoWordMark from "@/assets/icons/dwe/logoWordMark";
import LandingHeroDesktop from "@/assets/landingHero--desktop";
import LandingHeroMobile from "@/assets/landingHero--mobile";
import Button from "@/components/atoms/button";
import Section from "@/components/molecules/section";
import Image from "next/image";
import ImageLanding from "@/public/images/landing.jpg";

const Landing = () => (
  <>
    <Section className="bg-yellow text-purple h-screen relative">
      <div className="relative z-10">
        <div>
          <Button href="https://www.dwenteignen.de">
            <LogoWordMark />
          </Button>
        </div>
        <div className="flex items-center justify-center relative">
          {/* <LandingHeroDesktop className="h-full hidden md:block" />
          <LandingHeroMobile className="h-full block md:hidden" /> */}
        </div>
      </div>
    </Section>
    <div className="absolute top-0 left-0 h-full w-full z-0 overflow-hidden">
      <Image src={ImageLanding} alt="" layout="fill" objectFit="cover" />
    </div>
  </>
);
export default Landing;

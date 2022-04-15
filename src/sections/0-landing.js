import LogoWordMark from "@/assets/icons/dwe/logoWordMark";
import LandingHero from "@/assets/landingHero";
import Section from "@/components/molecules/section";
import Link from "next/link";

const Landing = () => (
  <Section className="bg-yellow text-purple h-screen">
    <div>
      <Link href="https://www.dwenteignen.de">
        <a className="inline-block origin-center hover:scale-110 transition-all duration-200 ease-in-out">
          <LogoWordMark />
        </a>
      </Link>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <LandingHero className="w-full md:w-[40%]" />
    </div>
  </Section>
);
export default Landing;

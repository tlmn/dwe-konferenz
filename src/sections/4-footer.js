import LogoWordMark from "@/assets/icons/dwe/logoWordMark";
import Section from "@/components/molecules/section";
import Link from "next/link";

const Footer = () => (
  <Section className="bg-yellow text-purple">
    <ul className="flex justify-around flex-wrap gap-4">
      <li>
        <a href="" className="button bg-purple text-yellow my-1 block">
          Spenden
        </a>
      </li>
      <li>
        <a href="" className="button bg-purple text-yellow my-1 block">
          Mitmachen
        </a>
      </li>
      <li>
        <a href="" className="button bg-purple text-yellow my-1 block">
          Impressum
        </a>
      </li>
      <li>
        <a href="" className="button bg-purple text-yellow my-1 block">
          Kontakt
        </a>
      </li>
    </ul>
    <ul className="mt-6 flex justify-around flex-wrap">
      <li>
        <Link href="">
          <a className="inline-block origin-center hover:scale-110 transition-all duration-200 ease-in-out">
            <LogoWordMark />
          </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a className="inline-block origin-center hover:scale-110 transition-all duration-200 ease-in-out">
            <LogoWordMark />
          </a>
        </Link>
      </li>
    </ul>
  </Section>
);
export default Footer;

import LogoWordMark from "@/assets/icons/dwe/logoWordMark";
import LogoRLS from "@/assets/icons/logo-rls";
import Section from "@/components/molecules/section";
import Image from "next/image";
import Link from "next/link";
import logoAsta from "@/assets/icons/logo-asta.png";

const Footer = () => (
  <Section className="bg-yellow text-purple">
    <ul className="flex justify-around flex-wrap gap-x-4">
      <li>
        <a href="" className="button bg-purple text-yellow block">
          Spenden
        </a>
      </li>
      <li>
        <a href="" className="button bg-purple text-yellow block">
          Mitmachen
        </a>
      </li>
      <li>
        <a href="" className="button bg-purple text-yellow block">
          Impressum
        </a>
      </li>
      <li>
        <a href="" className="button bg-purple text-yellow block">
          Kontakt
        </a>
      </li>
    </ul>
    <ul className="mt-6 flex justify-around flex-wrap">
      <li>
        <Link href="">
          <a className="inline-block origin-center hover:scale-110 transition-all duration-200 ease-in-out">
            <Image src={logoAsta} alt="Logo des Asta der TU Berlin" quality={100} />
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
      <li>
        <Link href="">
          <a className="inline-block origin-center hover:scale-110 transition-all duration-200 ease-in-out">
            <LogoRLS />
          </a>
        </Link>
      </li>
    </ul>
  </Section>
);
export default Footer;

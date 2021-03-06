import LogoWordMark from "@/assets/icons/dwe/logoWordMark";
import LogoRLS from "@/assets/icons/logo-rls";
import Section from "@/components/molecules/section";
import Image from "next/image";
import logoAsta from "@/assets/icons/logo-asta.png";
import Button from "@/components/atoms/button";

const Footer = () => (
  <Section className="bg-yellow text-purple">
    <ul className="flex justify-center flex-wrap gap-x-4 gap-y-2">
      <li>
        <Button
          href="https://www.dwenteignen.de/spenden/"
          className="bg-purple text-yellow block px-2 py-1 rounded-lg"
        >
          Spenden
        </Button>
      </li>
      <li>
        <Button
          href="https://www.dwenteignen.de/mitmachen/"
          className="bg-purple text-yellow block px-2 py-1 rounded-lg"
        >
          Mitmachen
        </Button>
      </li>
      <li>
        <Button
          href="https://www.dwenteignen.de/impressum/"
          className="bg-purple text-yellow block px-2 py-1 rounded-lg"
        >
          Impressum
        </Button>
      </li>
      <li>
        <Button
          href="https://www.dwenteignen.de/kontakt/"
          className="bg-purple text-yellow block px-2 py-1 rounded-lg"
        >
          Kontakt
        </Button>
      </li>
    </ul>
    <ul className="mt-6 flex justify-center items-center gap-x-4 gap-y-2 flex-wrap">
      <li>
        <Button href="https://asta.tu-berlin.de/">
          <Image
            src={logoAsta}
            alt="Logo des Asta der TU Berlin"
            quality={100}
            height={70}
            width={81}
          />
        </Button>
      </li>
      <li>
        <Button href="https://www.dwenteignen.de">
          <LogoWordMark />
        </Button>
      </li>
      <li>
        <Button href="https://www.rosalux.de/">
          <LogoRLS />
        </Button>
      </li>
    </ul>
  </Section>
);
export default Footer;

import LogoWordMark from "@/assets/icons/dwe/logoWordMark";
import InstagramIcon from "@/assets/icons/social/instagram";
import Section from "@/components/molecules/section";

const Footer = () => (
  <Section className="bg-yellow text-purple">
    <ul className="flex justify-around">
      <li>
        <a href="" className="button bg-purple text-yellow">
          Spenden
        </a>
      </li>
      <li>
        <a href="" className="button bg-purple text-yellow">
          Mitmachen
        </a>
      </li>
      <li>
        <a href="" className="button bg-purple text-yellow">
          Impressum
        </a>
      </li>
      <li>
        <a href="" className="button bg-purple text-yellow">
          Kontakt
        </a>
      </li>
    </ul>
    <ul className="mt-6 flex justify-around">
      <li>
        <a href="">
          <LogoWordMark />
        </a>
      </li>
      <li>
        <a href="">
          <LogoWordMark />
        </a>
      </li>
    </ul>
  </Section>
);
export default Footer;

import Section from "@/components/molecules/section";
import Title from "@/components/atoms/title";

const Register = () => (
  <Section className="bg-purple text-yellow" hasArrow>
    <div className="flex-1 flex flex-col items-center justify-center">
      <Title className="bg-yellow text-purple">Ich will dabei sein</Title>
      <a
        href="https://dwewolke.de/index.php/apps/forms/ymPCk2GbeTi9rnzx"
        target="_blank"
        className="button bg-yellow text-purple"
      >
        Jetzt anmelden!
      </a>
    </div>
  </Section>
);
export default Register;

import Title from "@/components/atoms/title";
import ReadMore from "@/components/molecules/readMore";
import Section from "@/components/molecules/section";

const Register = () => (
  <Section className="bg-yellow text-purple">
    <Title className="text-yellow bg-purple" isBig>Zeit zu reden</Title>
    <div>
      Es wird Zeit dass wir miteinander reden. Am Himmelfahrtwochenende (27.-29.
      Mai 2022) wird eine große Konferenz rund um die Themen Enteignung &amp;
      Vergesellschaftung von Immobilienkonzernen in den Räumen der TU Berlin
      stattfinden. In Kooperation mit dem Asta der TU Berlin und der
      Rosa-Luxemburg Stiftung wollen wir mit dieser Konferenz Alternativen zum
      profitgetriebenen Wohnwahnsinn starkmachen. Folgende Themen und
      Fragestellungen wollen wir uns widmen:
    </div>
    <ReadMore className="text-yellow bg-purple">
      Das ist die ReadMore-Komponente.
    </ReadMore>
  </Section>
);
export default Register;

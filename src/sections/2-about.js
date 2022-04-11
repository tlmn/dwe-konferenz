import DWECarousel from "@/components/atoms/carousel";
import CarouselItem from "@/components/atoms/carouselItem";
import Title from "@/components/atoms/title";
import ReadMore from "@/components/molecules/readMore";
import Section from "@/components/molecules/section";
import Body from "@/components/atoms/body";
import ImageUnterschriften from "@/public/images/unterschriften.jpg";
import ImageDemo from "@/public/images/demo.jpg";
import Image from "next/image";

const Register = () => (
  <>
    <div className="-mb-2">
      <Image
        src={ImageUnterschriften}
        alt="Zahl der Unterschriften für den Volksentscheid auf Plakaten"
        placeholder="blur"
        priority={true}
      />
    </div>
    <Section className="bg-yellow text-purple">
      <Title className="text-yellow bg-purple" isBig>
        Zeit zu reden
      </Title>
      <div className="dwe-grid">
        <Body>
          Es wird Zeit dass wir miteinander reden. Am Himmelfahrtwochenende
          (27.-29. Mai 2022) wird eine große Konferenz rund um die Themen
          Enteignung &amp; Vergesellschaftung von Immobilienkonzernen in den
          Räumen der TU Berlin stattfinden. In Kooperation mit dem Asta der TU
          Berlin und der Rosa-Luxemburg Stiftung wollen wir mit dieser Konferenz
          Alternativen zum profitgetriebenen Wohnwahnsinn starkmachen. Folgende
          Themen und Fragestellungen wollen wir uns widmen:
        </Body>
        <DWECarousel>
          <CarouselItem>Frage 1</CarouselItem>
          <CarouselItem>Frage 2</CarouselItem>
          <CarouselItem>Frage 3</CarouselItem>
        </DWECarousel>
      </div>

      <ReadMore className="text-yellow bg-purple">
        <div className="mb-5">
          <Image
            src={ImageDemo}
            alt="Demonstrantinnen für Deutsche Wohnen und Co. enteignen"
            placeholder="blur"
          />
        </div>

        <div className="dwe-grid">
          <Body>
            Das Programm setzt sich aus Abendpodien, Skill-Sharing- Workshops,
            verschiedenen Impulsvorträgen namhafter Personen, Wissensvermittlung
            und Organizing zusammen. Die drei Tage bieten also Platz und Raum
            nicht nur zum Diskutieren, sondern auch ganz konkrete Zukunftspläne
            zu schmieden:
          </Body>

          <DWECarousel>
            <CarouselItem>Frage 1</CarouselItem>
            <CarouselItem>Frage 2</CarouselItem>
            <CarouselItem>Frage 3</CarouselItem>
          </DWECarousel>

          <Body>
            Durch das gemeinsame Diskutieren und Beantworten dieser Fragen soll
            es uns dann möglich werden, ganz konkret zu werden: Wie baut man
            eigentlich eine lokale Enteignungskampagne auf? Wie wird es möglich,
            unsere Nachbar*innen im Quartier, im Stadtteil, im Bezirk oder der
            ganzen Kommune mit der Mieter*innenbewegung bekannt zu machen? Wir
            wollen uns austauschen, vernetzen und bundesweit planen, was die
            nächsten Schritte zu bezahlbarem Wohnraum für alle sind. Eingeladen
            sind alle, die Interesse haben: Ob Du langjährige
            Wohnraumaktivist*in bist oder einfach Interesse hast, ob Du in
            Bayern oder in Berlin wohnst - alle sind willkommen und eingeladen.
            Es wird eine Schlafplatzbörse geben. Hierzu informieren wir zeitnah.
            Das vollständige Programm ist gerade noch in Arbeit, bald wird es
            weitere Infos zu Programm und Ablauf folgen.
          </Body>
        </div>
      </ReadMore>
    </Section>
  </>
);
export default Register;

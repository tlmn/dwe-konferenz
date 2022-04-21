import DWECarousel from "@/components/atoms/carousel";
import CarouselItem from "@/components/atoms/carouselItem";
import Title from "@/components/atoms/title";
import ReadMore from "@/components/molecules/readMore";
import Section from "@/components/molecules/section";
import Body from "@/components/atoms/body";
import ImageUnterschriftenSammeln from "@/public/images/unterschriftenSammeln.jpg";
import ImageZahlen from "@/public/images/zahlen.jpg";
import Image from "next/image";

const About = () => (
  <>
    <div className="-mb-2">
      <Image
        src={ImageZahlen}
        alt="Zahl der Unterschriften für den Volksentscheid auf Plakaten"
        placeholder="blur"
        priority={true}
        layout="responsive"
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
            <CarouselItem>Ist Vergesellschaftung eine Maßnahme zur Lösung ganz unterschiedlicher Krisen?</CarouselItem>
            <CarouselItem>Wie haben Mieter*innenkämpfe die Enteignungsforderung in dieser Breite überhaupt erst möglich gemacht - und wie werden sie zur Durchsetzung beitragen?</CarouselItem>
            <CarouselItem>Oligarchen, Steuerhinterzieher*innen und Kriminelle - wie viel schmutziges Geld steckt im Immobilienmarkt?</CarouselItem>
            <CarouselItem>Anstalt öffentlichen Rechts - unsere Antwort auf Profitwahn</CarouselItem>
            <CarouselItem>Was kostet eigentlich die Enteignung von Deutsche Wohnen und Vonovia?</CarouselItem>
            <CarouselItem>Was tun gegen Bodenspekulation?</CarouselItem>
            <CarouselItem>Mietendeckel, Mietenstopp und die Wege dorthin</CarouselItem>
            <CarouselItem>Wohnen und Klimagerechtigkeit</CarouselItem>
            <CarouselItem>Das Geschäftsmodell Vonvovia</CarouselItem>
            <CarouselItem>Was ist Finanzialisierung des Wohnens?</CarouselItem>
          </DWECarousel>
      </div>

      <ReadMore className="text-yellow bg-purple">
        <div className="mb-5">
          <Image
            src={ImageUnterschriftenSammeln}
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
            <CarouselItem>Was sind die nächsten Schritte zur Enteignung in Berlin?</CarouselItem>
            <CarouselItem>Wie kann in anderen Städten eine ähnliche Kampagne wie in Berlin aufgestellt werden? </CarouselItem>
            <CarouselItem>Was ist in den vielen kleinen und mittelgroßen Städten anders als in den Metropolen?</CarouselItem>
            <CarouselItem>Welche juristischen Mittel gibt es?</CarouselItem>
            <CarouselItem>Welche Alternativen, Wohnraum anders zu denken als in der Hand von Großinvestoren, sind denkbar und entsprechen einer solidarischen Praxis?</CarouselItem>
        
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
export default About;

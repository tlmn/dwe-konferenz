import Button from "@/components/atoms/button";
import ProgrammeItem from "@/components/atoms/programmeItem";
import Title from "@/components/atoms/title";
import ProgrammeDay from "@/components/molecules/programmeDay";
import Section from "@/components/molecules/section";
import SessionTitle from "@/components/atoms/sessionTitle";

const Programme = () => (
  <Section className="bg-purple text-yellow" hasArrow>
    <Title className="bg-yellow text-purple" isBig>
      Programm
    </Title>

    <ProgrammeDay day="Freitag, 27. Mai">
      <SessionTitle className="text-yellow">Crashkurse</SessionTitle>
      <ProgrammeItem
        title="Was ist: Finanzialisierung des Wohnens? (Crashkurse 1)"
        time="17:30 - 18:30"
      >
        Ref: Philipp Metzger
      </ProgrammeItem>
      <ProgrammeItem
        title="Wohnungsfrage und Wohnungspolitik (Crashkurse 2)"
        time="17:30 - 18:30"
      >
        Ref: Andrej Holm
      </ProgrammeItem>
      <ProgrammeItem
        title="Art. 15 für Nicht-Jurist:innen (Crashkurse 3)"
        time="17:30 - 18:30"
      >
        Ref: Franziska Drohsel
      </ProgrammeItem>
      <ProgrammeItem
        title="Vom Einzelfall zur organisierten Nachbarschaft (Crashkurse 4)"
        time="17:30 - 18:30"
      >
        Wie Organisierende Mietrechts- Sozial-Beratungen und
        Nachbarschaftskampagnen zu erfolgreichen Mieter*Innenkämpfen um
        Enteignung &amp; Co beitragen können Ref: Tashy Endres und Georgios
        Thodos (beide: AG Starthilfe)
      </ProgrammeItem>

      <SessionTitle className="text-yellow">Podiumsdiskussion</SessionTitle>
      <ProgrammeItem
        title="Auftaktveranstaltung: Der Kampf um Vergesellschaftung im internationalen Kontext"
        time="19:00 - 21:00"
      >
        mit Balakrishnan Rajagopal (Video), danach Gespräch mit Andrej Holm,
        jemanden von DWE und evtl. weiterem internationalen Gast. moderiert von
        Nina Scholz Livestream
      </ProgrammeItem>
    </ProgrammeDay>
    <ProgrammeDay day="Samstag, 28. Mai">
      
      <SessionTitle className="text-yellow">Streitgespräch: Vergesellschaftung jetzt!</SessionTitle>

      <ProgrammeItem title="Follow the money - Der deutsche Immobilienmarkt als Tummelplatz für Oligarchen, Kriminelle und Steuerhinterzieher" time="11-19 Uhr">
        Christoph Trautvetter (Netzwerk Steuergerechtigkeit, externer Projektleiter „Wem gehört die Stadt?“), Gabriela
Keller (Correctiv), Moderation: Katalin Gennburg
 
Berlin ist aus Sicht internationaler Kapitalströme zu einem der Zielorte schlechthin avanciert:
die gebaute Umwelt der Stadt verspricht hohe Renditen und Möglichkeiten zur Spekulation.
Doch woher kommt das Kapital? Aufwendig verschachtelte Firmen- und
Beteiligungskonstrukte, die bis in das europäische wie außereuropäische Ausland reichen,
verschleiern den Ursprung der Kapitalströme und verdecken oftmals, wer die tatsächlich
wirtschaftlich Berechtigten hinter einer Immobilie sind. Sie ermöglichen so Geldwäsche und
Steuerhinterziehung. 

Die Veranstaltung geht der Frage nach, welche Methoden der Verschleierung zum Einsatz
kommen – und welche gesetzgeberischen Schlupflöcher dies überhaupt erst ermöglichen.
Aufgezeigt werden sollen diese Methoden anhand konkreter Beispiele aus der jüngeren
Stadtgeschichte Berlins, wobei sich auch der Frage nach der Rolle russischer Oligarchen auf
dem Berliner Immobilienmarkt zugewandt werden soll.


      <SessionTitle className="text-yellow">Themenstrang 1: Vergesellschaftung</SessionTitle>


      </ProgrammeItem>
      <ProgrammeItem title="Willkommen" time="Zeit">
        Crashkurse zu Finanzialisierung (Philipp Metzger), Gentrifizierung und
        Mietenbewegung (Lisa Vollmer oder Andrej zu seinem Buch), Art. 15 für
        Nicht-Jurist:innen (Cara Röhner oder Franziska Drohsel)
      </ProgrammeItem>
      <ProgrammeItem title="Willkommen" time="Zeit">
        Crashkurse zu Finanzialisierung (Philipp Metzger), Gentrifizierung und
        Mietenbewegung (Lisa Vollmer oder Andrej zu seinem Buch), Art. 15 für
        Nicht-Jurist:innen (Cara Röhner oder Franziska Drohsel)
      </ProgrammeItem>
    </ProgrammeDay>
    <ProgrammeDay day="Sonntag, 29. Mai">
      <ProgrammeItem title="Willkommen" time="Zeit">
        Crashkurse zu Finanzialisierung (Philipp Metzger), Gentrifizierung und
        Mietenbewegung (Lisa Vollmer oder Andrej zu seinem Buch), Art. 15 für
        Nicht-Jurist:innen (Cara Röhner oder Franziska Drohsel)
      </ProgrammeItem>
      <ProgrammeItem title="Willkommen" time="Zeit">
        Crashkurse zu Finanzialisierung (Philipp Metzger), Gentrifizierung und
        Mietenbewegung (Lisa Vollmer oder Andrej zu seinem Buch), Art. 15 für
        Nicht-Jurist:innen (Cara Röhner oder Franziska Drohsel)
      </ProgrammeItem>
      <ProgrammeItem title="Willkommen" time="Zeit">
        Crashkurse zu Finanzialisierung (Philipp Metzger), Gentrifizierung und
        Mietenbewegung (Lisa Vollmer oder Andrej zu seinem Buch), Art. 15 für
        Nicht-Jurist:innen (Cara Röhner oder Franziska Drohsel)
      </ProgrammeItem>
    </ProgrammeDay>
    <a href="" target="_blank" className="button bg-yellow text-purple mx-auto">
      Jetzt anmelden!
    </a>
    <Button
      href="/programm.pdf"
      className="bg-yellow text-purple button mx-auto"
    >
      Programm als PDF
    </Button>
  </Section>
);
export default Programme;

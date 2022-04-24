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

      <ProgrammeItem title="Auftakt: Eröffnungsrede, Begrüßung, Keynote, /Gespräch?" time="10-11 Uhr">
      Prof. Tim Wihl


      <SessionTitle className="text-yellow">Themenstrang 1: Vergesellschaftung</SessionTitle>

   <ProgrammeItem title="Follow the money - Der deutsche Immobilienmarkt als Tummelplatz für Oligarchen, Kriminelle und Steuerhinterzieher" time="11-19 Uhr">
        Christoph Trautvetter (Netzwerk Steuergerechtigkeit, externer Projektleiter „Wem gehört die Stadt?“), Gabriela
Keller (Correctiv), Moderation: Katalin Gennburg<br>
 
Berlin ist aus Sicht internationaler Kapitalströme zu einem der Zielorte schlechthin avanciert:
die gebaute Umwelt der Stadt verspricht hohe Renditen und Möglichkeiten zur Spekulation.
Doch woher kommt das Kapital? Aufwendig verschachtelte Firmen- und
Beteiligungskonstrukte, die bis in das europäische wie außereuropäische Ausland reichen,
verschleiern den Ursprung der Kapitalströme und verdecken oftmals, wer die tatsächlich
wirtschaftlich Berechtigten hinter einer Immobilie sind. Sie ermöglichen so Geldwäsche und
Steuerhinterziehung.<br>
Die Veranstaltung geht der Frage nach, welche Methoden der Verschleierung zum Einsatz
kommen – und welche gesetzgeberischen Schlupflöcher dies überhaupt erst ermöglichen.
Aufgezeigt werden sollen diese Methoden anhand konkreter Beispiele aus der jüngeren
Stadtgeschichte Berlins, wobei sich auch der Frage nach der Rolle russischer Oligarchen auf
dem Berliner Immobilienmarkt zugewandt werden soll.


      </ProgrammeItem>
      <ProgrammeItem title="Eine Anstalt öffentlichen Rechts - unsere Alternative zu privaten Immobilienkonzernen" time="11-19 Uhr">
        Die Wohnungsbestände großer Immobilienkonzerne in Berlin zu vergesellschaften, d.h. in demokratisch verwaltetes Gemeineigentum zu überführen, ist das Ziel der Kampagne Deutsche Wohnen und Co enteignen. 
Aber was genau bedeutet das? Wie muss die geplante Anstalt öffentlichen Rechts organisiert sein, um eine gemeinwohlorientierte, funktionierende und demokratische Verwaltung zu ermöglichen? 
  Zu dieser Frage bereitet die Vergesellschaftungs-AG der Kampagne derzeit einen Vorschlag vor.
Die dabei relevant werdenden Themen spielen in der Mieter:innenbewegung Berlins schon lange eine Rolle: 
Zu Fragen der Mieter:innenmitbestimmung und zur transparenten und diskriminierungsarmen Wohnungsvergabe z.B. gibt es bereits differenzierte Diskussionen und praktische Erfahrungen. 
Beim geplanten Workshop wollen wir unsere bisherigen Ideen vorstellen und am Beispiel dieser Aspekte mit Akteur:innen der Mietenbewegung ins Gespräch darüber kommen, 
  wie die neu zu gründende Anstalt öffentlichen Rechts konkret aussehen kann. <br>
Referent*innen: Vergesellschaftungs-AG von DWE
      </ProgrammeItem>

      <ProgrammeItem title="Vom Mieter*innen-Protest zur Enteignung? Über das komplizierte Verhältnis von Mieter*innen-Kämpfen und Enteigungs-Kampagne  " time="11-19 Uhr">
       Ohne die Mieter*innen-Proteste der Deutsche Wohnen Mieter*innen gegen Mieterhöhungen und Verdrängungen wäre die Enteignungskampagne in Berlin nie möglich gewesen. 
       Die Kampagne selbst weist über die Kämpfe hinaus. Während des Volksentscheids haben sich Kampagne und konkrete Kämpfe immer wieder gegenseitig beflügelt. 
       Ohne Organisierung gibt es also keine Enteignung - und trotzdem bleiben die Aktivist*innen in der Kampagne oft unter sich. 
       Welche Lösungen gibt es? Was können wir aus der Vergangenheit für die Zukunft lernen?<br>
Hannes Strobel und Nina Scholz (AG Starthilfe)
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

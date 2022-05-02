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
        title="Was ist: Finanzialisierung des Wohnens?"
        time="17:30 - 18:30"
      >
        Ref: Philipp Metzger
      </ProgrammeItem>

      <ProgrammeItem
        title="Wohnungsfrage und Wohnungspolitik"
        time="17:30 - 18:30"
      >
        Ref: Andrej Holm
      </ProgrammeItem>

      <ProgrammeItem
        title="Art. 15 für Nicht-Jurist:innen"
        time="17:30 - 18:30"
      >
        Ref: N.N.
      </ProgrammeItem>

      <ProgrammeItem
        title="Vom Einzelfall zur organisierten Nachbarschaft"
        time="17:30 - 18:30"
      >
        Wie Organisierende Mietrechts- Sozial-Beratungen und
        Nachbarschaftskampagnen zu erfolgreichen Mieter*Innenkämpfen um
        Enteignung &amp; Co beitragen können
        <br />
        <br />
        Ref: Tashy Endres und Georgios Thodos (beide: AG Starthilfe)
      </ProgrammeItem>

      <SessionTitle className="text-yellow">Podiumsdiskussion</SessionTitle>

      <ProgrammeItem
        title="Auftaktveranstaltung: Der Kampf um Vergesellschaftung im internationalen Kontext"
        time="19:00 - 21:00"
      >
        mit Balakrishnan Rajagopal &amp; Andrej Holm
      </ProgrammeItem>
    </ProgrammeDay>

    <ProgrammeDay day="Samstag, 28. Mai">
      <SessionTitle className="text-yellow">
        Streitgespräch: Vergesellschaftung jetzt!
      </SessionTitle>

      <ProgrammeItem title="Auftakt: Gespräch mit " time="10-11 Uhr">
        Prof. Tim Wihl (Sachverständiger in der Expert:innenkommission des
        Berliner Senats)
      </ProgrammeItem>

      <SessionTitle className="text-yellow">
        Themenstrang 1: Vergesellschaftung
      </SessionTitle>

      <ProgrammeItem title="Follow the money - Der deutsche Immobilienmarkt als Tummelplatz für Oligarchen, Kriminelle und Steuerhinterzieher">
        Berlin ist aus Sicht internationaler Kapitalströme zu einem der Zielorte
        schlechthin avanciert: die gebaute Umwelt der Stadt verspricht hohe
        Renditen und Möglichkeiten zur Spekulation. Doch woher kommt das
        Kapital? Aufwendig verschachtelte Firmen- und Beteiligungskonstrukte,
        die bis in das europäische wie außereuropäische Ausland reichen,
        verschleiern den Ursprung der Kapitalströme und verdecken oftmals, wer
        die tatsächlich wirtschaftlich Berechtigten hinter einer Immobilie sind.
        Sie ermöglichen so Geldwäsche und Steuerhinterziehung. Die Veranstaltung
        geht der Frage nach, welche Methoden der Verschleierung zum Einsatz
        kommen – und welche gesetzgeberischen Schlupflöcher dies überhaupt erst
        ermöglichen. Aufgezeigt werden sollen diese Methoden anhand konkreter
        Beispiele aus der jüngeren Stadtgeschichte Berlins, wobei sich auch der
        Frage nach der Rolle russischer Oligarchen auf dem Berliner
        Immobilienmarkt zugewandt werden soll.
        <br />
        Mit: Christoph Trautvetter (Netzwerk Steuergerechtigkeit, externer
        Projektleiter „Wem gehört die Stadt?“), Gabriela Keller (Correctiv),
        Moderation: Katalin Gennburg
      </ProgrammeItem>

      <ProgrammeItem title="Eine Anstalt öffentlichen Rechts - unsere Alternative zu privaten Immobilienkonzernen">
        Die Wohnungsbestände großer Immobilienkonzerne in Berlin zu
        vergesellschaften, d.h. in demokratisch verwaltetes Gemeineigentum zu
        überführen, ist das Ziel der Kampagne Deutsche Wohnen und Co enteignen.
        Aber was genau bedeutet das? Wie muss die geplante Anstalt öffentlichen
        Rechts organisiert sein, um eine gemeinwohlorientierte, funktionierende
        und demokratische Verwaltung zu ermöglichen? Zu dieser Frage bereitet
        die Vergesellschaftungs-AG der Kampagne derzeit einen Vorschlag vor. Die
        dabei relevant werdenden Themen spielen in der Mieter:innenbewegung
        Berlins schon lange eine Rolle: Zu Fragen der Mieter:innenmitbestimmung
        und zur transparenten und diskriminierungsarmen Wohnungsvergabe z.B.
        gibt es bereits differenzierte Diskussionen und praktische Erfahrungen.
        Beim geplanten Workshop wollen wir unsere bisherigen Ideen vorstellen
        und am Beispiel dieser Aspekte mit Akteur:innen der Mietenbewegung ins
        Gespräch darüber kommen, wie die neu zu gründende Anstalt öffentlichen
        Rechts konkret aussehen kann.
        <br />
        Referent*innen: Vergesellschaftungs-AG von DWE
      </ProgrammeItem>

      <ProgrammeItem title="Enteignen für eine (klima)gerechte Stadt für alle (RLS)">
        Das Geschäftsmodell der großen Wohnungsunternehmen lautet:
        Profitmaximierung auf Kosten der Mieter*innen. Mietenbewegungen und
        –vereine kritisieren seit Langem die Luxussanierungen im Altbau als
        zentrales Instrument der Verdrängung von Bestandsmieter*innen ohne
        großes Einkommen. Und wenn die Kosten vollends auf die Mieter*innen
        umgelagert werden, tragen auch energetische Sanierungen zur
        Mietpreisspirale und Verdrängung bei. Und dennoch wird die Dringlichkeit
        zur Emissionsreduktion in allen Sektoren, einer gerechten Klimapolitik
        und Klimaanpassungen immer deutlicher. Mit dem Faire-Mieten-Modell zeigt
        die Kampagne, wie die Vergesellschaftung haushaltsneutral gelingt und
        trotzdem sozial verträgliche Mietpreise etabliert werden können. Aber
        lassen sich so auch die Klimaanpassung im Bestand, und der Neubau von
        nachhaltigem und preisgünstigen Wohnraum finanzieren? Und welche Chancen
        bietet die Vergesellschaftung von Wohnraum für die sozial, wie
        klimagerechte Stadt?
        <br />
        Es diskutieren Theresa Keilhacker (Architektenkammer Berlin), Benedikt
        Walters
      </ProgrammeItem>

      <ProgrammeItem title="Vom Mieter*innen-Protest zur Enteignung? Über das komplizierte Verhältnis von Mieter*innen-Kämpfen und Enteigungs-Kampagne">
        Ohne die Mieter*innen-Proteste der Deutsche Wohnen Mieter*innen gegen
        Mieterhöhungen und Verdrängungen wäre die Enteignungskampagne in Berlin
        nie möglich gewesen. Die Kampagne selbst weist über die Kämpfe hinaus.
        Während des Volksentscheids haben sich Kampagne und konkrete Kämpfe
        immer wieder gegenseitig beflügelt. Ohne Organisierung gibt es also
        keine Enteignung - und trotzdem bleiben die Aktivist*innen in der
        Kampagne oft unter sich. Welche Lösungen gibt es? Was können wir aus der
        Vergangenheit für die Zukunft lernen?
        <br />
        Referent:innen: Hannes Strobel und Nina Scholz (AG Starthilfe von DWE)
      </ProgrammeItem>

      <SessionTitle className="text-yellow">
        Themenstrang 2: Skill-Sharing
      </SessionTitle>

      <ProgrammeItem title="Vergesellschaftung - Social Media und soziale Bewegungen">
        Zwischen Memes, TikToks und Insta-Stories. Wie läuft die Social Media
        Arbeit bei Deutsche Wohnen &amp; Co enteignen? Wie entwickeln wir Posts?
        Wie gelingt ein erfolreiches Community Building und wie gehen wir mit
        Shitstorms um? Diese und viele weitere Fragen wollen wir zusammen mit
        euch in diesem Workshop beantworten. Wir stellen unsere Arbeitsweise
        vor, analysieren gemeinsam Posts, sprechen über praktische Tipps und
        politische Kommunikation in Sozialen Medien. Außerdem wird es praktische
        Übungen geben, bitte bringt daher wenn möglich einen Laptop mit.
        <br />
        Referent:innen: Mareike &amp; Marcel (Social Media AG von DWE)
      </ProgrammeItem>

      <ProgrammeItem title="Data-driven campaigning oder was Daten alles (nicht) können">
        „Kenne Dein Potential“ gilt nicht nur allgemein als Lebensweisheit
        sondern ist auch für das Organizing unabdingbar. Wer ist unsere
        Zielgruppe? Wie viele Stimmen können wir in welchem Bezirk erreichen? In
        welchem Bezirk ist die Zustimmung am größten, in welchem am kleinsten?
        Zentrale Fragen, die in Plenumsdebatten nach Bauchgefühl oder
        individuellen Erlebnissen diskutiert werden, können datenbasiert
        empirisch bestimmt werden, oder?
        <br />
        Die Datentaskforce berichtet über Mapping, Statistik und Fallstricke der
        Kommunikation.
      </ProgrammeItem>

      <ProgrammeItem title="Es wurde schon alles gesagt - nur nicht von (allen) FLINTA">
        Was ist eigentlich eine Kernbotschaft? Muss ich auf die Frage antworten,
        die mir gestellt wurde - oder darf ich einfach auf eine andere
        antworten? Und wer hilft mir dabei? Ein Workshop für FLINTA rund ums
        Sprechen in der Öffentlichkeit: Wie Medien- und Pressearbeit bei DWE
        funktioniert und warum mit Kompliz*innen alles besser ist.
        <br />
        Referent:innen: DWE FLINTA-Vernetzung
      </ProgrammeItem>

      <SessionTitle className="text-yellow">
        Themenstrang 3: Gemeinwirtschaftliche Alternativen für preiswertes und
        selbstverwaltetes Wohnen
      </SessionTitle>

      <ProgrammeItem title="Aufwerten, Auspressen, Abschöpfen - Entstehung, Geschäftsmodelle und Widerstände gegen große Wohnungskonzerne wie Vonovia, LEG, Heimstaden und Co">
        Private Wohnungsunternehmen sind relativ neu in der Riege der
        Großkonzerne. Sie sind ein Produkt der Neoliberalisierung des Wohnens,
        das heißt: der Privatisierung öffentlicher Wohnungsbestände, der
        Deregulierung und der zunehmenden Finanzmarktorientierung der
        Wohnungswirtschaft. Aber was genau zeichnet die Wohnungskonzerne,
        jenseits ihrer Größe, gegenüber anderen privaten Vermieter:innen aus?
        Welche Geschäftsmodelle verfolgen sie? Wie erreichen sie ihre Rendite
        und wie finanzieren sie die hohen, alljährlichen Ausschüttungen an ihre
        Aktionär:innen? Wer profitiert dabei – und auf wessen Kosten? Wie können
        sich Mieter:innen dagegen wehren? Und was ist von den Versprechungen
        über freiwillige Begrenzungen von Mieterhöhungen oder der Präsentation
        von Vonovia &amp; Co. als „verlässliche Partner:innen“ bei Neubau und
        einer klimaverträglichen Sanierung der Bestände zu halten?
        <br />
        Referent:innen: Knut Unger (MieterInnenverein Witten/Kritische
        ImmobilienaktionärInnen); Berliner Mieterverein (angefragt),
        Mieterinitiativen Stuttgart (angegefragt); Moderation: Philipp Möller
        (Redaktion MieterEcho, wissenschaftlicher Mitarbeiter Niklas Schenker,
        MdA)
      </ProgrammeItem>

      <ProgrammeItem title="Rent Control! - Mietenstopp, Mietendeckel und der Weg dahin">
        Der Berliner Mietendeckel war ein Hoffnungsschimmer. Er wurde bundesweit
        und international beachtet und zum Vorbild genommen. Aber er war auch
        Zielscheibe einer wahnwitzigen Gegenkampagne, an deren Spitze sich Union
        und FDP gesetzt haben, um ihn schließlich vor das Verfassungsgericht zu
        bringen. Am Ende ist der Berliner Vorstoß am Zuständigkeits-Klein-Klein
        gescheitert. Doch damit ist die Mietenfrage nicht erledigt. Denn es
        liegt ja auf der Hand: gegen die Mietpreisexplosion, die vor allem die
        Gewinne von Eigentümer:innen mehrt, hilft vor allem kurzfristig nur
        eins: Rent control, die gesetzliche Begrenzung der Mietpreise. Die
        Kampagne Mietenstopp, getragen von Initiativen, Mietervereinen,
        Gewerkschaften und Sozialverbänden, mobilisiert dafür ebenso wie
        unzählige Initiativen in den Städten, die auch 2022 wieder einen bundes-
        und europaweiten Housing Action Day organisiert haben. Doch nach fast 15
        Jahren Kampf gegen steigende Mieten: Wo stehen wir? Und wie kommen wir
        weiter?
        <br />
        Referent:innen: Caren Lay (MdB LINKE); Benjamin Raabe (RAV AK
        Mietrecht); Monika Schmid-Balzert (Kampagne
        Mietenstopp/Landesgeschäftsführerin DMB Bayern); Moderation: Armin Kuhn
        (Rosa-Luxemburg-Stiftung)
      </ProgrammeItem>

      <ProgrammeItem title="Die Bodenpreisrallye stoppen">
        Noch stärker als die Mieten steigen seit Jahren und Jahrzehnten die
        Preise für den Boden, auf dem die Wohnungen stehen. Städtische
        Grundstücke sind - ebenso wie landwirtschaftliche Flächen - zu weltweit
        begehrten Anlage- und Spekulationsobjekten geworden, ganz besonders seit
        der weltweiten Finanzkrise 2008. Käufer:innen finden sich auch zu
        aberwitzigen Preisen, weil die ebenso verlässlich steigenden Mieten oder
        auch der Verkauf ein paar Jahre später sichere und hohe Renditen
        versprechen. So arbeitet der Boden als Umverteilungsmaschine, die den
        Eigentümer:innen auf Kosten der Mietenden leistungslose Gewinne
        verschafft. Nur wenn wir diese Maschine stoppen, sind leistbare Mieten,
        bezahlbarer Neubau und die Rückgewinnung demokratischer Kontrolle über
        die Art, wie sich die Städte entwickeln, überhaupt denkbar. Wie
        leistungslose Gewinne abgeschöpft und die Bodenpreisrallye gestoppt
        werden kann, soll in diesem Workshop diskutiert werden.
        <br />
        Referent: Christoph Trautvetter (ext. Projektleiter „Wem gehört die
        Stadt“, RLS), moderiert von Stefan Thimmel (RLS)
      </ProgrammeItem>

      <ProgrammeItem title="Demokratisierung des Wohnens - Wege zur Selbstbestimmung in unterschiedlichen Eigentumsverhältnissen">
        Ziel dieses Workshops ist, die Frage der Selbstbestimmung als eine
        Triebkraft politischer Auseinandersetzungen zu thematisieren und Wege zu
        diskutieren, wie diese in den verschiedenen Wohnformen (Anstalt des
        öffentlichen Rechts, Genossenschaften, andere private Rechtsformen)
        erkämpft und umgesetzt werden kann. Hierfür wird es auch wichtig sein
        näher zu bestimmen, was eigentlich genau gefordert wird, wenn es um
        Selbstbestimmung und Demokratisierung geht.
      </ProgrammeItem>

      <ProgrammeItem title="Wohnen jenseits des Markts – Herausforderungen für ein gemeinnütziges Wohnen">
        Die derzeitige wohnungspolitische Notlage ist Ausweis des Marktversagens
        bei der Bereitstellung von günstigem Wohnraum. Neue Regeln und
        Instrumente sind nötig, um Wohnen wieder leistbar für alle zu machen.
        Gleichzeitig gilt es, Häuser klimaneutral umzubauen und die
        demokratische Beteiligung der Bewohnerschaft bei der Verwaltung und
        Bewirtschaftung einzuführen. Wie könnte eine Transformation der
        Wohnraumversorgung gelingen, welche Ziele sollen formuliert werden,
        welche Konflikte bestehen dabei? Im Workshop wollen wir anhand von
        unterschiedlichen Vorstellungen von Gemeinwohl / Gemeinnützigkeit /
        Gemeinwirtschaft über Lösungen der Wohnungskrise diskutieren. Wir
        besprechen Modelle und Ansätze, die dauerhaft ein Wohnen jenseits des
        Markts ermöglichen und einen Eindruck geben, wie Vergesellschaftung
        praktisch aussehen kann. Dabei sollen die Vor- und Nachteile
        verschiedener Ansätze vorgestellt und die Zielkonflikte benannt werden.
        Der Workshop sucht nach Möglichkeiten, soziale, ökologische und
        demokratische Bedürfnisse zusammenzubringen – und die praktisch
        umzusetzen.
        <br />
        Inputs ok -sabine notz tbc - Christian Felber, Gemeinwohlökonomie -
        Sabine Horlitz (Mitautorin ‚Neue Wohnungsgemeinnützigkeit, RLS 2017‘ /
        Stadtbodenstiftung - Person von DWE (zu Gemeinwirtschaft) - Person von
        Immovilien / Montagsstiftung / NABU Bodenbesteuerung (Ulrich Kriese)
        Moderation: Sebastian Botzem (Genossenschafter*innen)
      </ProgrammeItem>

      <SessionTitle className="text-yellow">
        Themenstrang 4: Bundesweite Vernetzung
      </SessionTitle>

      <ProgrammeItem title="Vergesellschaftung - Social Media und soziale Bewegungen">
        Zwischen Memes, TikToks und Insta-Stories. Wie läuft die Social Media
        Arbeit bei Deutsche Wohnen &amp; Co enteignen? Wie entwickeln wir Posts?
        Wie gelingt ein erfolreiches Community Building und wie gehen wir mit
        Shitstorms um? Diese und viele weitere Fragen wollen wir zusammen mit
        euch in diesem Workshop beantworten. Wir stellen unsere Arbeitsweise
        vor, analysieren gemeinsam Posts, sprechen über praktische Tipps und
        politische Kommunikation in Sozialen Medien. Außerdem wird es praktische
        Übungen geben, bitte bringt daher wenn möglich einen Laptop mit.
        <br />
        Referent*innen: Mareike &amp; Marcel (Social Media AG DWE)
      </ProgrammeItem>

      <SessionTitle className="text-yellow">
        Podiumsdiskussion: Vergesellschaftung
      </SessionTitle>

      <ProgrammeItem
        title="Demonstrieren, deckeln, enteignen – den Wohnungsmarkt revolutionieren!?"
        time="19-21 Uhr"
      >
        mit Lena Kreck (Senatorin Justiz, Antidiskriminierung, Vielfalt), Lisa
        Vollmer (Bauhaus-Uni Weimar), Lukas Siebenkotten (DMB), N.N. (Ko-Kreis
        DWE), <br />
        Moderation: Armin Kuhn (RLS)
      </ProgrammeItem>
    </ProgrammeDay>

    <ProgrammeDay day="Sonntag, 29. Mai">
      <SessionTitle className="text-yellow">
        Fortsetzung der Workshop-Phase
      </SessionTitle>

      <SessionTitle className="text-yellow">
        Abschlussveranstaltung: Perspektiven
      </SessionTitle>

      <ProgrammeItem
        title="Abschluss-Podium Vorschlag: Wie weiter mit der Mietenbewegung – in Berlin und bundesweit?"
        time="12:30-14 Uhr"
      >
        Moderiert von DWE, plus Hamburg enteignet, bundesweiite
        Enteignungs-Vernetzung, Kampagne Mietenstopp + 1-2 Joker (Eindrücke vom
        Kongress) Verabschiedung der Kongresserklärung
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

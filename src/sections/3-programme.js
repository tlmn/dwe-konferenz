import ProgrammeItem from "@/components/atoms/programmeItem";
import Title from "@/components/atoms/title";
import ProgrammeDay from "@/components/molecules/programmeDay";
import Section from "@/components/molecules/section";

const Programme = () => (
  <Section className="bg-purple text-yellow" hasArrow>
    <Title className="bg-yellow text-purple" isBig>
      Programm
    </Title>
    <ProgrammeDay day="Freitag, 27. Mai">
      <ProgrammeItem title="Willkommen" time="Zeit">
        Crashkurse zu Finanzialisierung (Philipp Metzger), Gentrifizierung und
        Mietenbewegung (Lisa Vollmer oder Andrej zu seinem Buch), Art. 15 für
        Nicht-Jurist:innen (Cara Röhner oder Franziska Drohsel)
      </ProgrammeItem>
    </ProgrammeDay>
    <ProgrammeDay day="Samstag, 28. Mai">
      <ProgrammeItem title="Willkommen" time="Zeit">
        Crashkurse zu Finanzialisierung (Philipp Metzger), Gentrifizierung und
        Mietenbewegung (Lisa Vollmer oder Andrej zu seinem Buch), Art. 15 für
        Nicht-Jurist:innen (Cara Röhner oder Franziska Drohsel)
      </ProgrammeItem>
    </ProgrammeDay>
  </Section>
);
export default Programme;

import Button from "@/components/atoms/button";
import ProgrammeItem from "@/components/atoms/programmeItem";
import Title from "@/components/atoms/title";
import ProgrammeDay from "@/components/molecules/programmeDay";
import Section from "@/components/molecules/section";
import PROGRAMME from "../data/programme";
import { Fragment } from "react";

const Programme = () => (
  <Section className="bg-purple text-yellow" hasArrow>
    <Title className="bg-yellow text-purple" isBig>
      Programm
    </Title>
    {PROGRAMME.map(({ day, items }, index) => (
      <Fragment key={`day-${index}`}>
        <ProgrammeDay day={day}>
          {items.map(({ title, time, location, teaser, eventID }) => (
            <ProgrammeItem title={title} time={time} location={location} eventID={eventID}>
              <span dangerouslySetInnerHTML={{ __html: teaser }} />
            </ProgrammeItem>
          ))}
        </ProgrammeDay>
      </Fragment>
    ))}

    <a
      href="https://dwewolke.de/index.php/apps/forms/ymPCk2GbeTi9rnzx"
      target="_blank"
      className="button bg-yellow text-purple mx-auto"
    >
      Jetzt anmelden!
    </a>

    <Button
      href="/Programm_Enteignungskonferenz.pdf"
      className="bg-yellow text-purple button mx-auto"
    >
      Programm als PDF
    </Button>
  </Section>
);
export default Programme;

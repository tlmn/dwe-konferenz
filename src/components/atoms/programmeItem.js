import clsx from "clsx";
import React, { useState } from "react";

const ProgrammeItem = ({ title, time, location, children, eventID }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <span>
        {time}, Ort: {location} (ID: {eventID})
      </span>
      <h3
        className="font-bold text-2xl underline cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className={clsx(isOpen ? "block" : "hidden", "text-lg")}>
        {children}
      </div>
    </div>
  );
};

export default ProgrammeItem;

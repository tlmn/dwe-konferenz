import clsx from "clsx";
import React, { useState } from "react";

const ProgrammeItem = ({ title, time, location, children, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <span>{time}, Ort: {location}</span>
      <h3
        className="font-bold text-2xl underline md:no-underline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </h3>
      {children}
      
    </div>
  );
};

export default ProgrammeItem;

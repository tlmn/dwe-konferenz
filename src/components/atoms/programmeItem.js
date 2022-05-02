import clsx from "clsx";
import React, { useState } from "react";

const ProgrammeItem = ({ title, time, children, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <span>{time}</span>
      <h3
        className="font-bold text-2xl underline md:no-underline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </h3>
      <span>{category}</span>
      {Array.isArray(children) ? (
        children.map((child, index) => {
          return typeof child === "object" ? (
            <br key={index} />
          ) : (
            <p
              dangerouslySetInnerHTML={{ __html: child }}
              className={clsx("text-lg", !isOpen && "hidden", "md:block")}
              key={index}
            />
          );
        })
      ) : (
        <p
          dangerouslySetInnerHTML={{ __html: children }}
          className={clsx("text-lg", !isOpen && "hidden", "md:block")}
        />
      )}
    </div>
  );
};

export default ProgrammeItem;

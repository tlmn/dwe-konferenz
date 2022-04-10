import clsx from "clsx";
import React, { useState } from "react";

const ReadMore = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={clsx(!isOpen ? "hidden" : "block")}>{children}</div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx("button mx-auto", className)}
      >
        {!isOpen ? `Mehr lesen` : `Weniger anzeigen`}
      </button>
    </>
  );
};
export default ReadMore;

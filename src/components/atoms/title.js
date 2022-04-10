import clsx from "clsx";
import React from "react";

const Title = ({ children, className = "" }) => (
  <div className="text-center my-4 -rotate-[3deg]">
    <h3
      className={clsx(
        "py-1 px-2 mx-auto text-3xl md:text-4xl font-bold inline leading-relaxed",
        className
      )}
      style={{ WebkitBoxDecorationBreak: "clone" }}
    >
      {children}
    </h3>
  </div>
);

export default Title;

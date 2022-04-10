import clsx from "clsx";
import React from "react";

const Title = ({ children, className = "", isBig = false }) => (
  <div className="text-center my-4 -rotate-[3deg]">
    <h3
      className={clsx(
        "py-1 px-2 mx-auto font-bold inline leading-relaxed",
        isBig ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl",
        className
      )}
      style={{ WebkitBoxDecorationBreak: "clone" }}
    >
      {children}
    </h3>
  </div>
);

export default Title;

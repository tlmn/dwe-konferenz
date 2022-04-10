import React from "react";
import Title from "../atoms/title";

const ProgrammeDay = ({ day, children }) => {
  return (
    <div className="text-left">
      <Title className="text-purple bg-yellow">{day}</Title>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div key={index}>
              {child}
              {children.length !== index + 1 && (
                <hr
                  style={{ borderTop: `3px dotted #FDD816` }}
                  className="my-2"
                />
              )}
            </div>
          ))
        : children}
    </div>
  );
};

export default ProgrammeDay;

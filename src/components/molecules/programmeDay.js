import React from "react";
import Title from "../atoms/title";

const ProgrammeDay = ({ day, children }) => {
  return (
    <div className="text-left dwe-grid my-4">
      <div className="col-span-full">
        <Title className="text-purple bg-yellow">{day}</Title>
      </div>
      <div className="col-span-full md:col-span-4 md:col-start-2">
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div key={index}>
                {child}
                {children.length !== index + 1 && (
                  <hr
                    style={{ borderTop: `3px dotted #FDD816` }}
                    className="my-2 md:my-4 max-w-lg mx-auto"
                  />
                )}
              </div>
            ))
          : children}
      </div>
    </div>
  );
};

export default ProgrammeDay;

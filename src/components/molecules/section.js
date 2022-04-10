import clsx from "clsx";

const Section = ({ children, className = "", hasArrow = false }) => (
  <div className={clsx("w-full py-3", className)}>
    <div className="container flex flex-col h-full">{children}</div>
  </div>
);

export default Section;

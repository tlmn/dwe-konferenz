import clsx from "clsx";

const SessionTitle = ({ className, children }) => (
  <h4 className={clsx("uppercase font-bold text-center text-xl sm:text-2xl", className)}>
    {children}
  </h4>
);

export default SessionTitle;

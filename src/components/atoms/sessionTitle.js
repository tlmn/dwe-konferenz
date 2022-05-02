import clsx from "clsx";

const SessionTitle = ({ className, children }) => (
  <h4 className={clsx("uppercase text-center text-2xl sm:text-3xl", className)}>
    {children}
  </h4>
);

export default SessionTitle;

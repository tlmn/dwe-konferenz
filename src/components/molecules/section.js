import clsx from "clsx";

const Section = ({ children, className = "", hasArrow = false }) => {
  const Content = () => (
    <div className={clsx("w-full py-5", hasArrow && "hasArrow", className)}>
      <div className="container flex flex-col h-full">{children}</div>
    </div>
  );

  return (
    <>
      {hasArrow ? (
        <div
          className={clsx(
            className.includes("bg-yellow") ? "bg-purple" : "bg-yellow"
          )}
        >
          <Content />
        </div>
      ) : (
        <Content />
      )}
    </>
  );
};

export default Section;

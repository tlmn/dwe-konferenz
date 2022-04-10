import clsx from "clsx";

const Section = ({
  children,
  className = "",
  hasArrow = false,
  noPaddingTop = false,
}) => {
  const Content = () => (
    <div
      className={clsx(
        "w-full pb-5",
        hasArrow && "hasArrowpt-6",
        !hasArrow && noPaddingTop ? "pt-0": "pt-5",
        className
      )}
    >
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

import Link from "next/link";
import clsx from "clsx";

const Button = ({ children, className, href, ...props }) => (
  <Link href={href}>
    <a
      className={clsx(
        "inline-block origin-center hover:scale-110 transition-all duration-200 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </a>
  </Link>
);

export default Button;

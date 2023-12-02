import { Link } from "react-router-dom";
import { NavLinkProps } from "../utils/types";

export function NavLink({ to, isActive, text }: NavLinkProps) {
  const defaultClasses =
    "cursor-pointer hover:text-dark-blue transition-colors";
  const activeClasses = "text-dark-blue";

  return (
    <Link to={to} className={`${defaultClasses} ${isActive && activeClasses}`}>
      {text}
    </Link>
  );
}

import { Link } from "react-router-dom";
import { NavLinkProps } from "../utils/types";

export function NavLink({ to, isActive, text }: NavLinkProps) {
  const defaultClass = "cursor-pointer hover:text-dark-blue transition-colors";
  const activeClass = "text-dark-blue";

  return (
    <Link to={to} className={`${defaultClass} ${isActive && activeClass}`}>
      {text}
    </Link>
  );
}

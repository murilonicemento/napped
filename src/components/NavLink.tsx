import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import { NavLinkProps } from "../utils/types";

export function NavLink({
  to,
  isActive,
  text,
  isButton,
  buttonColor,
}: NavLinkProps) {
  const defaultClass = "cursor-pointer hover:text-dark-blue transition-colors";
  const activeClass = "text-dark-blue";
  const buttonClass = `w-36 text-white bg-gradient-to-b ${buttonColor} flex justify-center border rounded border-none p-2`;
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut();

    return navigate("/login");
  };

  return (
    <Link
      to={to}
      onClick={text === "Sair" ? handleSignOut : undefined}
      className={
        isButton
          ? `${buttonClass}`
          : `${defaultClass} ${isActive && activeClass}`
      }
    >
      {text}
    </Link>
  );
}

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { AuthContext } from "../context/auth/AuthContext.tsx";
import { NavLink } from "./NavLink.tsx";
import { PopAnchor } from "./PopAnchor.tsx";

export function Header() {
  const { pathname } = useLocation();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut();

    return navigate("/login");
  };

  return (
    <header className="w-full border-b border-solid border-b-dark-30 flex justify-between p-4">
      <Link to="/" className="flex gap-4 items-center justify-center">
        <img src={logo} alt="Logo" className="w-10" />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue font-medium text-2xl">
          Napped
        </span>
      </Link>
      <div className="lg:hidden">
        {pathname !== "/login" && pathname !== "/register" && <PopAnchor />}
      </div>
      <nav className="hidden lg:flex items-center gap-14 text-white">
        <NavLink to="/" isActive={pathname === "/"} text="Início" />
        <NavLink to="/series" isActive={pathname === "/series"} text="Séries" />
        <NavLink to="/movies" isActive={pathname === "/movies"} text="Filmes" />
        <NavLink to="/animes" isActive={pathname === "/animes"} text="Animes" />
        <NavLink to="/games" isActive={pathname === "/games"} text="Jogos" />
      </nav>
      <span className="hidden lg:flex items-center gap-6">
        <Link
          to="/myaccount"
          className="w-36 text-white bg-gradient-to-b from-brand to-dark-blue flex justify-center border rounded border-none p-2"
        >
          Minha Conta
        </Link>
        <button
          type="submit"
          onClick={handleSignOut}
          className="w-36 text-white bg-gradient-to-b from-warning to-dark-warning flex justify-center border rounded border-none p-2"
        >
          Sair
        </button>
      </span>
    </header>
  );
}

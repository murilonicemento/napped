import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import { NavLink } from "./NavLink";

export function PopAnchor() {
  const { pathname } = useLocation();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut();

    return navigate("/login");
  };

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button className="flex gap-1 flex-col">
          <div className="w-6 border border-b-2 border-dark-blue"></div>
          <div className="w-6 border border-b-2 border-dark-blue"></div>
          <div className="w-6 border border-b-2 border-dark-blue"></div>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody className="w-80 mt-16 border border-none rounded-xl bg-dark-10 p-4">
          <nav className="flex flex-col gap-4 text-white mb-4">
            <NavLink to="/" isActive={pathname === "/"} text="Início" />
            <NavLink
              to="/series"
              isActive={pathname === "/series"}
              text="Séries"
            />
            <NavLink
              to="/movies"
              isActive={pathname === "/movies"}
              text="Filmes"
            />
            <NavLink
              to="/animes"
              isActive={pathname === "/animes"}
              text="Animes"
            />
            <NavLink
              to="/games"
              isActive={pathname === "/games"}
              text="Jogos"
            />
          </nav>
          <span className="flex flex-col gap-4">
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
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

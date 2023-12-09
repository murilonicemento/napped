import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { SideBar } from "./SideBar/SideBar.tsx";

export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="w-full border border-solid border-b-dark-30 flex justify-between p-4">
      <Link to="/" className="flex gap-4 items-center justify-center">
        <img src={logo} alt="Logo" className="w-10" />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue font-medium text-2xl">
          Napped
        </span>
      </Link>
      {pathname !== "/login" && pathname !== "/register" && <SideBar />}
    </header>
  );
}

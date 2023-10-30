import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="w-full border border-solid border-b-dark-30 flex items-center justify-around p-4">
      <div className="flex gap-4 items-center justify-center">
        <img src={logo} alt="Logo" className="w-10" />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue font-medium text-2xl">
          Napped
        </span>
      </div>
      <nav className="flex items-center justify-between gap-20">
        <ul className="flex gap-14 text-text">
          <li className="cursor-pointer">Início</li>
          <li className="cursor-pointer">Séries</li>
          <li className="cursor-pointer">Filmes</li>
          <li className="cursor-pointer">Animes</li>
          <li className="cursor-pointer">Jogos</li>
        </ul>
        <a
          href="/login"
          className="text-text bg-gradient-to-b from-brand to-dark-blue w-36 flex justify-center border rounded border-none p-2"
        >
          Minha Conta
        </a>
      </nav>
    </header>
  );
}

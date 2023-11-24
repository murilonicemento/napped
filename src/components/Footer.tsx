import brandLogo from "../assets/images/brand-logo.svg";

export function Footer() {
  return (
    <footer className="w-full p-4 mt-4 bg-footer text-dark-40 flex flex-col items-center justify-center gap-1">
      <p>Copyright © 2023. Todos os direitos reservados.</p>
      <div className="flex items-center justify-center gap-2">
        <p>Powered by</p>
        <img src={brandLogo} alt="Brand Logo" />
      </div>
    </footer>
  );
}

import gojo from "../assets/images/gojo.png";

export function SearchImage() {
  return (
    <div className="filter brightness-75">
      <img
        src={gojo}
        alt="Imagem"
        className="w-full h-fit border border-none rounded-md"
      />
      <div className="w-full absolute bottom-0 left-0 right-0 p-4 text-white">
        <h2 className="uppercase text-sm">Animes</h2>
        <p className="text-sm mt-2 text-dark-40">
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </div>
    </div>
  );
}

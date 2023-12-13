export function Searcher() {
  return (
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Quer ajuda na procura? Pesquise aqui"
      className="w-full h-auto pt-1 pb-1 pl-2 pr-2 bg-footer bg-no-repeat border border-solid border-dark-30 rounded-sm placeholder:text-sm"
      style={{
        backgroundImage: "url(./src/assets/images/loupe.svg)",
        backgroundPosition: "right center",
      }}
    />
  );
}

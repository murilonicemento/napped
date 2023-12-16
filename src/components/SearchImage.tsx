import { useLocation } from "react-router-dom";
import theLastOfUs from "../assets/images/GOF.png";
import fiveNight from "../assets/images/five-night.jpeg";
import strangerThings from "../assets/images/stranger-things.jpg";
import yourName from "../assets/images/your-name.jpg";

export function SearchImage({ title }: { title: string }) {
  const { pathname } = useLocation();

  function handleSourceImage() {
    switch (pathname) {
      case "/series":
        return strangerThings;
      case "/movies":
        return fiveNight;
      case "/animes":
        return yourName;
      case "/games":
        return theLastOfUs;
    }
  }

  return (
    <div className="max-h-72 filter brightness-75 relative -z-10 overflow-hidden rounded-md">
      <img src={handleSourceImage()} alt="Imagem" className="object-cover" />
      <div className="w-full absolute bottom-0 left-0 right-0 p-4 text-white">
        <h2 className="uppercase text-sm">{title}</h2>
        <p className="max-w-[492px] text-sm mt-2 text-dark-40">
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </div>
    </div>
  );
}

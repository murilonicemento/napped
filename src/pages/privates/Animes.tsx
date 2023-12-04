import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import anime from "../../assets/images/animeLower.svg";
import gojo from "../../assets/images/gojo.png";
import goku from "../../assets/images/goku.svg";
import tanjiro from "../../assets/images/tanjiro.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LatestNewsCard } from "../../components/LatestNewsCard";
import { useApi } from "../../hooks/useApi";

export function Animes() {
  const authAPI = useApi();
  const navigate = useNavigate();

  /**
   * TODO: Ao invés do botão minha colocar um avatar (foto de perfil do usuário) e ao clicar redirecionar para página de alteração de informações do usuário
   * TODO: Cria uma página para minha conta onde será possível alterar informações do usuário e deletar a conta. Também adicionar a funcionalidade de inclusão foto de perfil (Colocar como foto padrão Toji Fushiguro)
   * TODO: Adicionar animações
   */

  useEffect(() => {
    const access_token = localStorage.getItem("authToken");

    if (!access_token) return navigate("/login");

    const isValidated = authAPI.validateToken(access_token);

    if (!isValidated) return navigate("/login");
  }, []);

  return (
    <>
      <Header />
      <main className="w-10/12 m-auto mt-20">
        <section className="flex flex-col gap-6">
          <div className="filter brightness-75">
            <img
              src={gojo}
              alt="Imagem"
              className="w-full h-fit border border-none rounded-md"
            />
            <div className="w-full absolute bottom-0 left-0 right-0 p-4 text-white">
              <h2 className="uppercase text-sm">Animes</h2>
              <p className="text-sm mt-2 text-dark-40">
                O Naped pode ser sua fonte de informações sobre o mundo nerd e
                outros assuntos relacionados.
              </p>
            </div>
          </div>
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
        </section>
        <section className="mt-12 flex flex-col gap-6">
          <LatestNewsCard
            imageURL={tanjiro}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <LatestNewsCard
            imageURL={anime}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

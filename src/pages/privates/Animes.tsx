import { AxiosError } from "axios";
import { useCallback, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import anime from "../../assets/images/animeLower.svg";
import gojo from "../../assets/images/gojo.png";
import goku from "../../assets/images/goku.svg";
import tanjiro from "../../assets/images/tanjiro.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LatestNewsCard } from "../../components/LatestNewsCard";
import { AuthContext } from "../../context/auth/AuthContext";
import { ValidateTokenErrorAPI } from "../../utils/types";

export function Animes() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  /**
   * TODO: Adicionar animações
   * TODO: Consumir API da NEWSDATA.IO
   */

  const validate = useCallback(async () => {
    try {
      const access_token = localStorage.getItem("authToken");

      if (!access_token) return navigate("/login");

      await auth.validateToken(access_token);
    } catch (error) {
      const data = (error as AxiosError<ValidateTokenErrorAPI>).response?.data;
      const message = data?.error.message;

      toast.error(`${message} Realize o login para ter acesso ao Napped.`);

      return setTimeout(() => navigate("/login"), 1200);
    }
  }, [auth, navigate]);

  useEffect(() => {
    validate();
  }, [validate]);

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

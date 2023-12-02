import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import anime from "../../assets/images/animeLower.svg";
import goku from "../../assets/images/goku.svg";
import tanjiro from "../../assets/images/tanjiro.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LatestNewsCard } from "../../components/LatestNewsCard";
import { useApi } from "../../hooks/useApi";

export function Series() {
  const api = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem("authToken");

    if (!access_token) return navigate("/login");

    const isValidated = api.validateToken(access_token);

    if (!isValidated) return navigate("/login");
  }, []);

  return (
    <>
      <Header />
      <div className="w-10/12 flex flex-col m-auto mt-20 mb-4 gap-3">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue text-center">
          Séries
        </h1>
        <p className="text-white text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis
          neque sed odio.
        </p>
        <p className="text-dark-40 text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis
          neque sed odio.
        </p>
      </div>
      <main className="w-10/12 m-auto">
        <section className="flex flex-col gap-6">
          <img
            src={anime}
            alt="Girl looking with her left hand holding her straw hat as the wind blows."
          />
          <p className="text-dark-40 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius
            eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum,
            nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper
            tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci
            rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis
            sit amet gravida sagittis. Ut eleifend ornare leo et auctor.
          </p>
          <p className="text-dark-40 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius
            eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum,
            nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper
            tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci
            rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis
            sit amet gravida sagittis. Ut eleifend ornare leo et auctor.
          </p>
        </section>
        <section className="mt-12 flex flex-col gap-6">
          <h2 className="text-white">Outras notícias parecidos</h2>
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

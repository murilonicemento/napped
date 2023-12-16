import { useCallback, useEffect, useState } from "react";
import AnimatedPage from "../../animatedPage";
import chichiro from "../../assets/images/chichiro.svg";
import goku from "../../assets/images/goku.svg";
import kratos from "../../assets/images/kratos.svg";
import naoko from "../../assets/images/naoko.svg";
import tanjiro from "../../assets/images/tanjiro.svg";
import viking from "../../assets/images/viking.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Image } from "../../components/Image";
import { LatestNewsCard } from "../../components/LatestNewsCard";
import { ReleaseCard } from "../../components/ReleaseCard";
import { newsAPI } from "../../services/api";
import { NewsDataIO } from "../../utils/types";

export function Home() {
  const [seriesData, setSeriesData] = useState<NewsDataIO>();
  const [gamesData, setGamesData] = useState<NewsDataIO>();
  const [animesData, setAnimesData] = useState<NewsDataIO>();
  const [moviesData, setMoviesData] = useState<NewsDataIO>();

  const getDataAPI = useCallback(async () => {
    try {
      const seriesData = await newsAPI.get(
        `/news?apikey=${
          import.meta.env.VITE_API_NEWSDATAIO_KEY
        }&q=series&language=pt`
      );
      const gamesData = await newsAPI.get(
        `/news?apikey=${
          import.meta.env.VITE_API_NEWSDATAIO_KEY
        }&q=game&language=pt`
      );
      const animesData = await newsAPI.get(
        `/news?apikey=${
          import.meta.env.VITE_API_NEWSDATAIO_KEY
        }&q=animes&language=pt`
      );
      const moviesData = await newsAPI.get(
        `/news?apikey=${
          import.meta.env.VITE_API_NEWSDATAIO_KEY
        }&q=animes&language=pt`
      );

      setSeriesData(seriesData.data);
      setGamesData(gamesData.data);
      setAnimesData(animesData.data);
      setMoviesData(moviesData.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getDataAPI();
  }, [getDataAPI]);

  return (
    <AnimatedPage>
      <Header />
      <div className="w-10/12 m-auto mt-16 grid place-items-center text-white">
        <h1 className="text-3xl">Mundo Nerd?</h1>
        <h1 className="text-3xl">Napped</h1>
        <p className="mt-8 text-center">
          O Napped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </div>
      <main className="mt-12">
        <section className="w-10/12 m-auto flex flex-col gap-4">
          <Image
            imageURL={
              seriesData?.results[0].image_url
                ? seriesData?.results[0].image_url
                : viking
            }
            type="Séries"
            title={seriesData?.results[0].title}
            description={seriesData?.results[0].description}
          />
          <div className="flex flex-col gap-4">
            <Image
              imageURL={
                gamesData?.results[0].image_url
                  ? seriesData?.results[0].image_url
                  : kratos
              }
              type="Jogos"
              title={gamesData?.results[0].title}
            />
            <Image
              imageURL={
                animesData?.results[0].image_url
                  ? seriesData?.results[0].image_url
                  : chichiro
              }
              type="Animes"
              title={animesData?.results[0].title}
            />
          </div>
        </section>
        <section className="w-10/12 flex flex-col gap-8 m-auto mt-28">
          <h2 className="text-white text-xl mb-12">Notícias mais recentes</h2>
          <LatestNewsCard
            imageURL={tanjiro}
            type="Filmes"
            title={moviesData?.results[0].title}
            description={moviesData?.results[0].description}
          />
          <LatestNewsCard
            imageURL={naoko}
            type="Animes"
            title={animesData?.results[0].title}
            description={animesData?.results[0].description}
          />
          <LatestNewsCard
            imageURL={goku}
            type="Séries"
            title={seriesData?.results[0].title}
            description={seriesData?.results[0].description}
          />
        </section>
        <section className="w-10/12 m-auto mt-28">
          <h2 className="text-white text-xl mb-12">Lançamentos</h2>
          <div className="flex flex-col gap-8">
            <ReleaseCard
              type="Filmes"
              title={moviesData?.results[0].title}
              description={moviesData?.results[0].description}
            />
            <ReleaseCard
              type="Filmes"
              title={moviesData?.results[0].title}
              description={moviesData?.results[0].description}
            />
          </div>
        </section>
      </main>
      <Footer />
    </AnimatedPage>
  );
}

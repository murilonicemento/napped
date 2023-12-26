import { useCallback, useEffect, useState } from "react";
import AnimatedPage from "../animatedPage";
import cinemark from "../assets/images/cinemark.png";
import crunchyroll from "../assets/images/crunchyroll.jpg";
import netflixCard from "../assets/images/netflix-card.jpeg";
import netflix from "../assets/images/netflix.jpeg";
import playStation from "../assets/images/play-station.jpeg";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Image } from "../components/Image";
import { LatestNewsCard } from "../components/LatestNewsCard";
import { ReleaseCard } from "../components/ReleaseCard";
import { newsAPI } from "../services/api";
import { NewsDataIO } from "../utils/types";

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
        <h1 className="text-3xl md:text-4xl lg:text-6xl">Mundo Nerd?</h1>
        <h1 className="text-3xl md:text-4xl lg:text-6xl">Napped</h1>
        <p className="w-full lg:w-7/12 mt-8 text-center text-base md:text-lg lg:text-2xl">
          O Napped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </div>
      <main className="mt-12">
        <section className="w-10/12 m-auto flex flex-col lg:flex-row gap-4 sm:gap-8 md:gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              imageURL={netflix}
              type="Séries"
              title={seriesData?.results[0].title}
              description={seriesData?.results[0].description}
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-8">
            <Image
              imageURL={playStation}
              type="Jogos"
              title={gamesData?.results[1].title}
            />
            <Image
              imageURL={crunchyroll}
              type="Animes"
              title={animesData?.results[2].title}
            />
          </div>
        </section>
        <section className="w-10/12 flex flex-col gap-8 m-auto mt-28">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl mb-12">
            Notícias mais recentes
          </h2>
          <div className="w-full h-fit lg:grid lg:grid-cols-3 lg:gap-28">
            <LatestNewsCard
              imageURL={cinemark}
              type="Filmes"
              title={moviesData?.results[3].title}
              description={moviesData?.results[3].description}
              id={moviesData?.results[3].article_id}
            />
            <LatestNewsCard
              imageURL={crunchyroll}
              type="Animes"
              title={animesData?.results[4].title}
              description={animesData?.results[4].description}
              id={animesData?.results[4].article_id}
            />
            <LatestNewsCard
              imageURL={netflixCard}
              type="Séries"
              title={seriesData?.results[5].title}
              description={seriesData?.results[5].description}
              id={seriesData?.results[5].article_id}
            />
          </div>
        </section>
        <section className="w-10/12 m-auto mt-28 pb-24">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl mb-12">
            Lançamentos
          </h2>
          <div className="flex flex-col gap-8">
            <ReleaseCard
              type="Filmes"
              title={moviesData?.results[6].title}
              description={moviesData?.results[6].description}
              id={moviesData?.results[6].article_id}
            />
            <ReleaseCard
              type="Filmes"
              title={moviesData?.results[7].title}
              description={moviesData?.results[7].description}
              id={moviesData?.results[7].article_id}
            />
          </div>
        </section>
      </main>
      <Footer />
    </AnimatedPage>
  );
}

import { useCallback, useEffect, useState } from "react";
import AnimatedPage from "../animatedPage";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Image } from "../components/Image";
import { LatestNewsCard } from "../components/LatestNewsCard";
import { ReleaseCard } from "../components/ReleaseCard";
import { newsAPI } from "../services/api";
import { NewsAPI } from "../utils/types";

export function Home() {
  const [seriesData, setSeriesData] = useState<NewsAPI>();
  const [gamesData, setGamesData] = useState<NewsAPI>();
  const [animesData, setAnimesData] = useState<NewsAPI>();
  const [moviesData, setMoviesData] = useState<NewsAPI>();

  const getDataAPI = useCallback(async () => {
    try {
      const seriesData = await newsAPI.get(
        `/everything?q=series&apikey=${
          import.meta.env.VITE_API_NEWSAPI_KEY
        }&q=series&language=pt`
      );
      const gamesData = await newsAPI.get(
        `/everything?q=games&apikey=${
          import.meta.env.VITE_API_NEWSAPI_KEY
        }&q=game&language=pt`
      );
      const animesData = await newsAPI.get(
        `/everything?q=animes&apikey=${
          import.meta.env.VITE_API_NEWSAPI_KEY
        }&q=animes&language=pt`
      );
      const moviesData = await newsAPI.get(
        `/everything?q=movies&apikey=${
          import.meta.env.VITE_API_NEWSAPI_KEY
        }&q=filmes&language=pt`
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
              imageURL={seriesData?.articles[0].urlToImage}
              type="Séries"
              title={seriesData?.articles[0].title}
              description={seriesData?.articles[0].description}
              id={seriesData?.articles[0].source.id}
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-8">
            <Image
              imageURL={gamesData?.articles[1].urlToImage}
              type="Jogos"
              title={gamesData?.articles[1].title}
              id={gamesData?.articles[1].source.id}
            />
            <Image
              imageURL={animesData?.articles[2].urlToImage}
              type="Animes"
              title={animesData?.articles[2].title}
              id={animesData?.articles[2].source.id}
            />
          </div>
        </section>
        <section className="w-10/12 flex flex-col gap-8 m-auto mt-28">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl mb-12">
            Notícias mais recentes
          </h2>
          <div className="w-full h-fit lg:grid lg:grid-cols-3 lg:gap-28">
            <LatestNewsCard
              imageURL={moviesData?.articles[3].urlToImage}
              type="Filmes"
              title={moviesData?.articles[3].title}
              description={moviesData?.articles[3].description}
              id={moviesData?.articles[3].source.id}
            />
            <LatestNewsCard
              imageURL={animesData?.articles[4].urlToImage}
              type="Animes"
              title={animesData?.articles[4].title}
              description={animesData?.articles[4].description}
              id={animesData?.articles[4].source.id}
            />
            <LatestNewsCard
              imageURL={seriesData?.articles[5].urlToImage}
              type="Séries"
              title={seriesData?.articles[5].title}
              description={seriesData?.articles[5].description}
              id={seriesData?.articles[5].source.id}
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
              title={moviesData?.articles[6].title}
              description={moviesData?.articles[6].description}
              id={moviesData?.articles[6].source.id}
            />
            <ReleaseCard
              type="Filmes"
              title={moviesData?.articles[7].title}
              description={moviesData?.articles[7].description}
              id={moviesData?.articles[7].source.id}
            />
          </div>
        </section>
      </main>
      <Footer />
    </AnimatedPage>
  );
}

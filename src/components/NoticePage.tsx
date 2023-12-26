import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimatedPage from "../animatedPage";
import cinemark from "../assets/images/cinemark.png";
import crunchyroll from "../assets/images/crunchyroll.jpg";
import netflixCard from "../assets/images/netflix-card.jpeg";
import { newsAPI } from "../services/api";
import { NewsDataIO, NewsDataIOResult } from "../utils/types";
import { LatestNewsCard } from "./LatestNewsCard";

export function NoticePage() {
  const [data, setData] = useState<NewsDataIO>();
  const [article, setArticle] = useState<NewsDataIOResult>();
  const { id, type } = useParams();

  const getDataAPI = useCallback(async () => {
    try {
      const noticeData = await newsAPI.get(
        `/news?apikey=${
          import.meta.env.VITE_API_NEWSDATAIO_KEY
        }&q=${type}&language=pt`
      );

      setData(noticeData.data);

      const article = noticeData.data?.results.find(
        (article: NewsDataIOResult) => article.article_id === id
      );

      setArticle(article);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getDataAPI();
  });

  return (
    <AnimatedPage>
      <div className="w-10/12 flex flex-col m-auto mt-20 mb-4 gap-3">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue text-center uppercase">
          {type}
        </h1>
        <p className="text-white text-xl text-center">{article?.title}</p>
        <p className="text-dark-40 text-sm text-center">
          {article?.description}
        </p>
      </div>
      <main className="w-10/12 m-auto">
        <section className="flex flex-col gap-6">
          <img
            src={article?.image_url}
            alt="Girl looking with her left hand holding her straw hat as the wind blows."
          />
          <p className="text-dark-40 text-sm text-center">{}</p>
        </section>
        <section className="mt-12 flex flex-col gap-6">
          <h2 className="text-white">Outras notícias parecidos</h2>
          <LatestNewsCard
            imageURL={cinemark}
            type={type}
            title={data?.results[3].title}
            description={data?.results[3].description}
            id={data?.results[3].article_id}
          />
          <LatestNewsCard
            imageURL={crunchyroll}
            type={type}
            title={data?.results[4].title}
            description={data?.results[4].description}
            id={data?.results[4].article_id}
          />
          <LatestNewsCard
            imageURL={netflixCard}
            type={type}
            title={data?.results[5].title}
            description={data?.results[5].description}
            id={data?.results[5].article_id}
          />
        </section>
      </main>
    </AnimatedPage>
  );
}

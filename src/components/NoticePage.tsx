import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedPage from "../animatedPage";
import netflix from "../assets/images/netflix.jpeg";
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

      const article = data?.results.find(
        (article: NewsDataIOResult) => article.article_id == id
      );

      setArticle(article);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getDataAPI();
  }, [getDataAPI]);

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
          <img src={article?.image_url} alt="Article Image" />
          <p className="text-dark-40 text-sm text-center">{}</p>
        </section>
        <section className="mt-12 flex flex-col gap-6">
          <h2 className="text-white">Outras notícias parecidos</h2>
          <div className="pb-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data?.results.map((article) => (
                <SwiperSlide key={article.article_id}>
                  <LatestNewsCard
                    imageURL={netflix}
                    type={type}
                    title={article.title}
                    description={article.description}
                    id={article.article_id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
}

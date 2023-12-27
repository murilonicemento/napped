import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SearchProps } from "../utils/types";
import { LatestNewsCard } from "./LatestNewsCard";
import { SearchImage } from "./SearchImage";
import { Searcher } from "./Searcher";

export function Search({ type, articles }: SearchProps) {
  return (
    <>
      <section className="flex flex-col gap-6 mb-10">
        <SearchImage type={type} />
        <Searcher />
      </section>
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
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {articles?.results.map((article) => (
          <SwiperSlide key={article.article_id}>
            <LatestNewsCard
              imageURL={article.image_url}
              type={type}
              title={article.title}
              description={article.description}
              id={article.article_id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

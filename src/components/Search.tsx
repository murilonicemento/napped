import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import anime from "../assets/images/animeLower.svg";
import goku from "../assets/images/goku.svg";
import tanjiro from "../assets/images/tanjiro.svg";
import { LatestNewsCard } from "./LatestNewsCard";
import { SearchImage } from "./SearchImage";
import { Searcher } from "./Searcher";

export function Search({ title }: { title: string }) {
  return (
    <>
      <section className="flex flex-col gap-6 mb-10">
        <SearchImage title={title} />
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
        <SwiperSlide>
          <LatestNewsCard
            imageURL={tanjiro}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsCard
            imageURL={anime}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

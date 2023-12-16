import { AxiosError } from "axios";
import { useCallback, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedPage from "../../animatedPage";
import anime from "../../assets/images/animeLower.svg";
import goku from "../../assets/images/goku.svg";
import tanjiro from "../../assets/images/tanjiro.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LatestNewsCard } from "../../components/LatestNewsCard";
import { SearchImage } from "../../components/SearchImage";
import { Searcher } from "../../components/Searcher";
import { AuthContext } from "../../context/auth/AuthContext";
import { ValidateTokenErrorAPI } from "../../utils/types";

export function Animes() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

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
  }, []);

  useEffect(() => {
    validate();
  }, [validate]);

  return (
    <AnimatedPage>
      <Header />
      <main className="w-10/12 m-auto mt-20">
        <section className="flex flex-col gap-6">
          <SearchImage />
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
      </main>
      <Footer />
    </AnimatedPage>
  );
}

import { AxiosError } from "axios";
import { useCallback, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

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
    <AnimatedPage>
      <Header />
      <main className="w-10/12 m-auto mt-20">
        <section className="flex flex-col gap-6">
          <SearchImage />
          <Searcher />
        </section>
        <Slider {...settings}>
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
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <LatestNewsCard
            imageURL={goku}
            title="Animes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Slider>
      </main>
      <Footer />
    </AnimatedPage>
  );
}

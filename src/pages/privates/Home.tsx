import { motion } from "framer-motion";
import tanjiro from "../../assets/images/tanjiro.svg";
import viking from "../../assets/images/viking.jpg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Image } from "../../components/Image";
import { LatestNewsCard } from "../../components/LatestNewsCard";
import { ReleaseCard } from "../../components/ReleaseCard";

export function Home() {
  return (
    <>
      <motion.div
        className="wrapper"
        initial={{ clipPath: "inset(0px round 10px)", y: "100vh", zIndex: "1" }}
        animate={{
          clipPath: "inset(0px round 0px)",
          y: "0",
          zIndex: "0",
          transition: { delay: 0.25, duration: "0.5", ease: "easeIn" },
        }}
        exit={{
          clipPath: "inset(10px round 10px)",
          filter: "brightness(0.9)",
          transition: { duration: "0.25", ease: "easeOut" },
        }}
      >
        <Header />
        <div className="w-10/12 m-auto mt-16 grid place-items-center text-white">
          <h1 className="text-3xl">Mundo Nerd?</h1>
          <h1 className="text-3xl">Napped</h1>
          <p className="mt-8 text-center">
            O Napped pode ser sua fonte de informações sobre o mundo nerd e
            outros assuntos relacionados.
          </p>
        </div>
        <main className="mt-12">
          <section className="w-10/12 m-auto flex flex-col gap-4">
            <Image
              imageURL={viking}
              title="Séries"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
            />
            <div className="flex flex-col gap-4">
              <Image
                imageURL={viking}
                title="Séries"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
              />
              <Image
                imageURL={viking}
                title="Séries"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
              />
            </div>
          </section>
          <section className="w-10/12 flex flex-col gap-8 m-auto mt-28">
            <h2 className="text-white text-xl mb-12">Notícias mais recentes</h2>
            <LatestNewsCard
              imageURL={tanjiro}
              title="Séries"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
            />
            <LatestNewsCard
              imageURL={tanjiro}
              title="Séries"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
            />
            <LatestNewsCard
              imageURL={tanjiro}
              title="Séries"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
            />
            <LatestNewsCard
              imageURL={tanjiro}
              title="Séries"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
            />
          </section>
          <section className="w-10/12 m-auto mt-28">
            <h2 className="text-white text-xl mb-12">Lançamentos</h2>
            <div className="flex flex-col gap-8">
              <ReleaseCard
                type="Filmes"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. "
              />
              <ReleaseCard
                type="Filmes"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. "
              />
            </div>
          </section>
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

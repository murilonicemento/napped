import tanjiro from "../assets/tanjiro.svg";
import viking from "../assets/viking.jpg";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Image } from "../components/Image";

export function Home() {
  return (
    <>
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
          <Card
            imageURL={tanjiro}
            title="Séries"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
          />
          <Card
            imageURL={tanjiro}
            title="Séries"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
          />
          <Card
            imageURL={tanjiro}
            title="Séries"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
          />
          <Card
            imageURL={tanjiro}
            title="Séries"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
          />
        </section>
        <section className="w-10/12 m-auto mt-28">
          <h2 className="text-white text-xl mb-12">Lançamentos</h2>
          <div>
            <span></span>
            <span></span>
          </div>
        </section>
      </main>
    </>
  );
}

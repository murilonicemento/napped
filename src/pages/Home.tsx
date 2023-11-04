import viking from "../assets/viking.jpg";
import { Header } from "../components/Header";

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
        <section className="w-10/12 h-96 m-auto flex border border-solid border-brand">
          <img src={viking} alt="" className="w-full" />
          <div className="grid place-items-center">
            {/* <img src={viking} alt="" className="" /> */}
            {/* <img src={viking} alt="" className="" /> */}
          </div>
        </section>
        <section>
          <h2>Notícias mais recentes</h2>
          <div>
            <img src={viking} alt="" />
            <img src={viking} alt="" />
            <img src={viking} alt="" />
          </div>
        </section>
        <section>
          <h2>Lançamentos</h2>
          <div>
            <span></span>
            <span></span>
          </div>
        </section>
      </main>
    </>
  );
}

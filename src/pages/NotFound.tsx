import { Link } from "react-router-dom";
import notFound from "../assets/forward.svg";
import { Header } from "../components/Header";

export function NotFound() {
  return (
    <>
      <Header />
      <main className="w-10/12 m-auto mt-16 text-white">
        <section className="grid place-items-center mb-8">
          <img src={notFound} alt="404 Not Found Image" />
          <p className="mt-10">Ups! Você chegou no espaço...</p>
          <p>volte para o mundo nerd!</p>
        </section>

        <section className="flex flex-col justify-center mb-6">
          <h1 className="text-3xl text-center mb-6">
            Tenho más notícias para você!
          </h1>
          <p className="text-justify mb-6">
            A página que você está procurando pode ter sido removida ou está
            temporariamente indisponível.
          </p>
          <Link
            to="/"
            className="bg-gradient-to-b from-brand to-dark-blue w-full flex justify-center border rounded border-none p-2"
          >
            Voltar para o início
          </Link>
        </section>
      </main>
    </>
  );
}

import { Link } from "react-router-dom";
import notFound from "../assets/forward.svg";
import { Header } from "../components/Header";

export function NotFound() {
  return (
    <>
      <Header />
      <main className="w-10/12 m-auto mt-20 text-white">
        <section className="flex flex-col justify-center mb-6">
          <h1 className="text-2xl text-center mb-6">
            Tenho más notícias para você!
          </h1>
          <p className="text-justify mb-6">
            A página que você está procurando pode ter sido removida ou está
            temporariamente indisponível.
          </p>
          <img src={notFound} alt="404 Not Found Image" />
          <Link
            to="/"
            className="bg-gradient-to-b from-brand to-dark-blue w-full flex justify-center border rounded border-none p-2 mt-12"
          >
            Voltar para o início
          </Link>
        </section>
        <section></section>
      </main>
    </>
  );
}

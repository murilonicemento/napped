import toji from "../../assets/images/toji-fushiguro.jpg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function MyAccount() {
  return (
    <>
      <Header />
      <main>
        <section className="w-10/12 flex flex-col justify-center items-center m-auto mt-10">
          <img
            src={toji}
            alt=""
            className=" w-10/12 rounded-full border-4 border-dark-blue border-solid"
          />
          <p className="text-dark-40 mt-6 uppercase">Toji Fushiguro</p>
        </section>
        <form
          action=""
          className="w-10/12 m-auto mt-6 mb-8 flex flex-col gap-4"
        >
          <label className="w-full">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              className="w-full bg-[url('./src/assets/images/user.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border border-solid rounded-md border-dark-30 text-white placeholder:text-white"
            />
          </label>
          <label htmlFor="email" className="w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="w-full bg-[url('./src/assets/images/at-sign.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white"
            />
          </label>
          <label htmlFor="password" className="w-full">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite uma senha"
              className="w-full bg-[url('./src/assets/images/lock.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white"
            />
          </label>
        </form>
      </main>
      <Footer />
    </>
  );
}

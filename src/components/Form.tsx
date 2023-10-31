import { Link } from "react-router-dom";

export function Form() {
  return (
    <form
      action=""
      className="flex flex-col items-center gap-4 p-8 mt-10 w-10/12 m-auto"
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue text-xl">
        NAPPED
      </span>
      <span className="text-text text-4xl">Faça uma conta</span>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Digite seu usuário"
        className="w-full bg-[user] bg-dark-30 pl-4 pt-2 pb-2 border rounded-md border-none text-text placeholder:text-text"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu e-mail"
        className="w-full bg-dark-30 pl-4 pt-2 pb-2 border rounded-md border-none text-text placeholder:text-text"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Digite uma senha"
        className="w-full bg-dark-30 pl-4 pt-2 pb-2 border rounded-md border-none text-text placeholder:text-text"
      />
      <input
        type="password"
        name="passwordRepeat"
        id="passwordRepeat"
        placeholder="Digite novamente a senha"
        className="w-full bg-dark-30 pl-4 pt-2 pb-2 border rounded-md border-none text-text placeholder:text-text"
      />
      <button
        type="submit"
        className="text-text bg-gradient-to-b from-brand to-dark-blue w-full flex justify-center border rounded border-none p-2"
      >
        Criar conta
      </button>
      <Link
        to="/login"
        className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue"
      >
        Já tenho uma conta
      </Link>
    </form>
  );
}

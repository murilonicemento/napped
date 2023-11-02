import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");

  async function handleSubmit(event: { preventDefault: () => void }) {
    event?.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      passwordRepeat === ""
    ) {
      return toast.error("Por favor, preencha todos os campos.", {
        duration: 3000,
        position: "top-center",
        style: {
          backgroundColor: "#151B26",
          color: "#FEFBFB",
        },
      });
    }

    if (password !== passwordRepeat) {
      return toast.error("Senhas não coincidem.", {
        duration: 3000,
        position: "top-center",
        style: {
          backgroundColor: "#151B26",
          color: "#FEFBFB",
        },
      });
    }

    const data = await axios.post(
      "http://localhost:8080/api/register",
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(data);
  }

  return (
    <form
      action=""
      className="flex flex-col items-center gap-4 p-8 mt-10 w-10/12 m-auto"
      onSubmit={handleSubmit}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue text-xl">
        NAPPED
      </span>
      <span className="text-white text-4xl">Faça uma conta</span>
      <label htmlFor={name} className="w-full">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full bg-user bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border border-solid rounded-md border-dark-30 text-white placeholder:text-white outline-none"
        />
      </label>
      <label htmlFor="email" className="w-full">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full bg-at-sign bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white outline-none"
        />
      </label>
      <label htmlFor="password" className="w-full">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite uma senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full bg-lock bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white outline-none"
        />
      </label>
      <label htmlFor="passwordRepeat" className="w-full">
        <input
          type="password"
          name="passwordRepeat"
          id="passwordRepeat"
          placeholder="Digite novamente a senha"
          value={passwordRepeat}
          onChange={(event) => setPasswordRepeat(event.target.value)}
          className="w-full bg-lock bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white outline-none"
        />
      </label>

      <button
        type="submit"
        className="text-white bg-gradient-to-b from-brand to-dark-blue w-full flex justify-center border rounded border-none p-2"
      >
        Criar conta
      </button>
      <Link
        to="/login"
        className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue hover:text-white transition-colors"
      >
        Já tenho uma conta
      </Link>
    </form>
  );
}

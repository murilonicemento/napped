import axios, { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { DataAPI, ErrorAPI } from "../utils/types";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function validateForm() {
    let isValid = true;

    if (!email.trim().length || !password.trim().length) {
      toast.error("Por favor, preencha todos os campos.");
      isValid = false;
      return isValid;
    }

    return isValid;
  }

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const { data } = await axios.post<DataAPI>(
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

      toast.success(data.message, {
        position: "top-center",
        style: {
          backgroundColor: "#151B26",
          color: "#FEFBFB",
        },
      });

      return navigate("/home");
    } catch (error) {
      const data = (error as AxiosError<ErrorAPI>).response?.data;
      const message = data?.error.message;

      return toast.error(`${message}`);
    }
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
      <span className="text-white text-4xl">Entrar na conta</span>

      <label htmlFor="email" className="w-full">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu usuário"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full bg-[url('./src/assets/user.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white"
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
          className="w-full bg-[url('./src/assets/lock.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white"
        />
      </label>

      <button
        type="submit"
        className="text-white bg-gradient-to-b from-brand to-dark-blue w-full flex justify-center border rounded border-none p-2"
      >
        Logar na conta
      </button>
      <Link
        to="/register"
        className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue hover:text-white transition-colors"
      >
        Criar uma conta
      </Link>
    </form>
  );
}
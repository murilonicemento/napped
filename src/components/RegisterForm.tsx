import { AxiosError } from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import { RegisterErrorAPI } from "../utils/types";

export function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  function handlePaste(event: { preventDefault: () => void }) {
    event.preventDefault();
    toast.error(
      "Por favor, digite sua senha novamente. A ação de colar está bloqueada."
    );
  }

  function validateForm() {
    let isValid = true;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

    if (
      !name.trim().length ||
      !email.trim().length ||
      !password.trim().length ||
      !passwordConfirmation.trim().length
    ) {
      toast.error("Por favor, preencha todos os campos.");
      isValid = false;
      return isValid;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        "Senha deve conter 8 caracteres, letras maiúsculas e minúsculas e um carácter especial.",
        { duration: 5000 }
      );
      isValid = false;
      return isValid;
    }

    if (password !== passwordConfirmation) {
      toast.error("Senhas não coincidem.");
      isValid = false;
      return isValid;
    }

    return isValid;
  }

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const isRegistered = await auth.register(name, email, password);
      const toastId = toast.loading("Criando usuário...");

      if (isRegistered) {
        setTimeout(() => {
          toast.success("Usuário cadastrado com sucesso.", {
            id: toastId,
          });
        }, 1300);

        return setTimeout(() => navigate("/login"), 2200);
      }
    } catch (error) {
      const data = (error as AxiosError<RegisterErrorAPI>).response?.data;
      const message = data?.error.message;

      return toast.error(`${message}`);
    }
  }

  return (
    <form
      action=""
      className="w-10/12 lg:w-96 flex flex-col items-center gap-4 p-8 mt-10 m-auto"
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
          className="w-full bg-[url('./src/assets/images/user.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border border-solid rounded-md border-dark-30 text-white placeholder:text-white"
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
          className="w-full bg-[url('./src/assets/images/at-sign.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white"
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
          className="w-full bg-[url('./src/assets/images/lock.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white"
        />
      </label>
      <label htmlFor="passwordRepeat" className="w-full">
        <input
          type="password"
          name="passwordRepeat"
          id="passwordRepeat"
          placeholder="Digite novamente a senha"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          onPaste={handlePaste}
          className="w-full bg-[url('./src/assets/images/lock.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white"
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

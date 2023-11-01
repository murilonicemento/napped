import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "./Input";

export function Form() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordRepeat, setPasswordRepeat] = useState<string>();

  function onSubmit(data: object) {
    console.log(data);
  }

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <form
      action=""
      className="flex flex-col items-center gap-4 p-8 mt-10 w-10/12 m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-dark-blue text-dark-blue text-xl">
        NAPPED
      </span>
      <span className="text-white text-4xl">Faça uma conta</span>
      <Input
        type="text"
        name="name"
        value={name}
        set={setName}
        placeholder="Digite seu usuário"
        errorMessage="Nome é obrigatório"
      />
      <input
        {...register("email", { required: true })}
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="w-full bg-at-sign bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white outline-none"
      />
      {errors.email?.type === "required" && <span>E-mail é obrigatório</span>}
      <input
        {...register("password", { required: true })}
        type="password"
        name="password"
        id="password"
        placeholder="Digite uma senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="w-full bg-lock bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white outline-none"
      />
      {errors.password?.type === "required" && <span>Senha é obrigatório</span>}
      <input
        {...register("passwordRepeat", { required: true })}
        type="password"
        name="passwordRepeat"
        id="passwordRepeat"
        placeholder="Digite novamente a senha"
        value={passwordRepeat}
        onChange={(event) => setPasswordRepeat(event.target.value)}
        className="w-full bg-lock bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white outline-none"
      />
      {errors.password?.type === "required" && <span>Senha é obrigatório</span>}
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

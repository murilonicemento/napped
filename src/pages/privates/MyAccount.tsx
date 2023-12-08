import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import toji from "../../assets/images/toji-fushiguro.jpg";
import { DeleteAlert } from "../../components/DeleteAlert";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AuthContext } from "../../context/auth/AuthContext";
import { ValidateTokenErrorAPI } from "../../utils/types";

export function MyAccount() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  const handleUpdateAccount = async () => {
    try {
      if (
        !password?.trim().length &&
        password !== null &&
        !passwordRegex.test(password)
      ) {
        return toast.error(
          "Senha deve conter 8 caracteres, letras maiúsculas e minúsculas e um carácter especial.",
          { duration: 5000 }
        );
      }

      if (auth.user) {
        await auth.updateAccount(auth.user?.id, "cleitin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validate = async () => {
    try {
      const access_token = localStorage.getItem("authToken");

      if (!access_token) return navigate("/login");

      await auth.validateToken(access_token);
    } catch (error) {
      const data = (error as AxiosError<ValidateTokenErrorAPI>).response?.data;
      const message = data?.error.message;

      toast.error(`${message} Realize o login para ter acesso ao Napped.`);

      return setTimeout(() => navigate("/login"), 1200);
    }
  };

  useEffect(() => {
    validate();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="w-10/12 flex flex-col justify-center items-center m-auto mt-10">
          <img
            src={toji}
            alt="Toji Fushiguro Face"
            className=" w-10/12 rounded-full border-4 border-dark-blue border-solid"
          />
          <p className="text-dark-40 mt-6 uppercase">{auth.user?.name}</p>
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
              onChange={(event) => setName(event.target.value)}
              placeholder={auth.user?.name}
              className="w-full bg-[url('./src/assets/images/user.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border border-solid rounded-md border-dark-30 text-white placeholder:text-white"
            />
          </label>
          <label htmlFor="email" className="w-full">
            <input
              type="email"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder={auth.user?.email}
              className="w-full bg-[url('./src/assets/images/at-sign.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white"
            />
          </label>
          <label htmlFor="password" className="w-full">
            <input
              type="password"
              name="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="********"
              className="w-full bg-[url('./src/assets/images/lock.svg')] bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border rounded-md border-dark-30 text-white placeholder:text-white"
            />
          </label>
          <button
            type="button"
            onClick={handleUpdateAccount}
            className="w-full text-white bg-gradient-to-b from-brand to-dark-blue flex justify-center border rounded border-none p-2"
          >
            Salvar
          </button>
          <DeleteAlert />
        </form>
      </main>
      <Footer />
    </>
  );
}

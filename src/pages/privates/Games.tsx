import { AxiosError } from "axios";
import { useCallback, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../animatedPage";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { AuthContext } from "../../context/auth/AuthContext";
import { ValidateTokenErrorAPI } from "../../utils/types";

export function Games() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const validate = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    validate();
  }, [validate]);

  return (
    <AnimatedPage>
      <Header />
      <main className="w-10/12 m-auto mt-20">
        <Search title="Jogos" />
      </main>
      <Footer />
    </AnimatedPage>
  );
}

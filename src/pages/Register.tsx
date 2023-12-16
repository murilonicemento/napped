import { useCallback, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../animatedPage.tsx";
import { Header } from "../components/Header.tsx";
import { RegisterForm } from "../components/RegisterForm.tsx";
import { AuthContext } from "../context/auth/AuthContext.tsx";

export function Register() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const validate = useCallback(async () => {
    try {
      const access_token = localStorage.getItem("authToken");

      if (!access_token) return;

      const isValidated = await auth.validateToken(access_token);

      if (isValidated) return navigate("/");
    } catch (error) {
      toast.error(`${error}`);
    }
  }, []);

  useEffect(() => {
    validate();
  }, [validate]);

  return (
    <AnimatedPage>
      <Header />
      <RegisterForm />
    </AnimatedPage>
  );
}

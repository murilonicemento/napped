import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header.tsx";
import { LoginForm } from "../components/LoginForm.tsx";
import { AuthContext } from "../context/auth/AuthContext.tsx";

export function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const validate = async () => {
    const access_token = localStorage.getItem("authToken");

    if (!access_token) return;

    const isValidated = await auth.validateToken(access_token);

    if (isValidated) return navigate("/");
  };

  useEffect(() => {
    validate();
  }, []);

  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
}

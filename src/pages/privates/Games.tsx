import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useApi } from "../../hooks/useApi";

export function Games() {
  const api = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem("authToken");

    if (!access_token) return navigate("/login");

    const isValidated = api.validateToken(access_token);

    if (!isValidated) return navigate("/login");
  }, []);

  return (
    <div>
      <Header />
      <h1>Animes Page</h1>
      <p>Welcome to the Animes page!</p>
      <Footer />
    </div>
  );
}

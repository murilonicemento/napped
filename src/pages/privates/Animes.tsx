import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

export function Animes() {
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
      <h1>Animes Page</h1>
      <p>Welcome to the Animes page!</p>
    </div>
  );
}

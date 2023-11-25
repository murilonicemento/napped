import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";

export function Series() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      const id = 12;
      const url = `private/series/${id}`;
      const token = localStorage.getItem("authToken");
      if (token) {
        const isValidated = await auth.validateToken(url, token);
        console.log(isValidated);
        return !isValidated && navigate("/login");
      }
    };
    validateToken();
  }, []);
  return (
    <div>
      <h1>Animes Page</h1>
      <p>Welcome to the Animes page!</p>
    </div>
  );
}

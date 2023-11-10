import { ReactNode, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      try {
        const storageData = localStorage.getItem("authToken");
        const data = await api.validateToken(storageData);

        if (data.user) setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    validateToken();
  }, [api]);

  const setToken = (token: string) => localStorage.setItem("authToken", token);

  const removeToken = () => localStorage.removeItem("authToken");

  const signOut = async () => {
    await api.signOut();
    setUser(null);
    removeToken();
  };

  const login = async (email: string, password: string) => {
    try {
      const data = await api.login(email, password);

      if (data.user && data.token) {
        setUser(data.user);
        setToken(data.token);
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

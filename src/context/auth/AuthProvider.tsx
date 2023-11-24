import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi.ts";
import { User } from "../../utils/types.ts";
import { AuthContext } from "./AuthContext.tsx";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [api]);

  const register = async (name: string, email: string, password: string) => {
    const data = await api.register(name, email, password);

    if (data.user && data.statusCode === 201) return true;

    return false;
  };

  const login = async (email: string, password: string) => {
    const data = await api.login(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signOut = async () => {
    console.log("SignOut está sendo executada.");
    setUser(null);
    setToken("");
    await api.signOut();
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
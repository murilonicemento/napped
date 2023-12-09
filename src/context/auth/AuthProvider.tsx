import { useState } from "react";
import { useApi } from "../../hooks/useApi.ts";
import { User } from "../../utils/types.ts";
import { AuthContext } from "./AuthContext.tsx";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const validateToken = async (access_token: string) => {
    const data = await api.validateToken(access_token);

    if (data.validated && data.user) {
      setUser(data.user);
      return true;
    }

    setUser(null);
    return false;
  };

  const register = async (name: string, email: string, password: string) => {
    const data = await api.register(name, email, password);

    if (data.user && data.statusCode === 201) return true;

    return false;
  };

  const login = async (email: string, password: string) => {
    const data = await api.login(email, password);

    if (data.user && data.user.access_token) {
      setUser(data.user);
      setToken(data.user.access_token);
      return true;
    }

    return false;
  };

  const deleteAccount = async (id: number) => {
    const data = await api.deleteAccount(id);
    removeToken();

    return data.statusCode === 200;
  };

  const updateAccount = async (
    id: number,
    name: string | null = null,
    email: string | null = null,
    password: string | null = null
  ) => {
    const data = await api.updateAccount(id, name, email, password);

    return data.statusCode === 200;
  };

  const signOut = () => {
    setUser(null);
    removeToken();
  };

  const setToken = (token: string) => localStorage.setItem("authToken", token);

  const removeToken = () => localStorage.removeItem("authToken");

  return (
    <AuthContext.Provider
      value={{
        user,
        validateToken,
        register,
        login,
        deleteAccount,
        updateAccount,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

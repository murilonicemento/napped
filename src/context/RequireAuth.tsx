import { ReactNode, useContext } from "react";
import { Login } from "../pages/Login.tsx";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) return <Login />;

  return children;
};

import { createContext } from "react";
import { AuthContextType } from "../../utils/types.ts";

export const AuthContext = createContext<AuthContextType>(null!);

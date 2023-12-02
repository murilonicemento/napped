import { authAPI } from "../services/api";
import { LoginDataAPI, RegisterDataAPI, ValidateToken } from "../utils/types";

export const useApi = () => ({
  validateToken: async (access_token: string) => {
    const { data } = await authAPI.post<ValidateToken>(
      "/validate",
      {
        access_token,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  },
  register: async (name: string, email: string, password: string) => {
    const { data } = await authAPI.post<RegisterDataAPI>(
      "/register",
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  },
  login: async (email: string, password: string) => {
    const response = await authAPI.post<LoginDataAPI>(
      "/login",
      { email, password },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },
  signOut: async () => {
    const response = await authAPI.post("/signOut");

    return response.data;
  },
});

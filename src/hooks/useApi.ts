import { api } from "../services/api";
import { DataAPI } from "../utils/types";

export const useApi = () => ({
  validateToken: async (token: string | null) => {
    const response = await api.post("/validate", { token });

    return response.data;
  },
  register: async (name: string, email: string, password: string) => {
    const { data } = await api.post<DataAPI>(
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
    const response = await api.post(
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
    const response = await api.post("/api/logout");

    return response.data;
  },
});

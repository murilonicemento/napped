import { api } from "../services/api";
import { LoginDataAPI, PrivateRoutes, RegisterDataAPI } from "../utils/types";

export const useApi = () => ({
  validateToken: async (url: string, token: string) => {
    const { data } = await api.get<PrivateRoutes>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },
  register: async (name: string, email: string, password: string) => {
    const { data } = await api.post<RegisterDataAPI>(
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
    const response = await api.post<LoginDataAPI>(
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
    const response = await api.post("/signOut");

    return response.data;
  },
});

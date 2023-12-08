import { authAPI } from "../services/api";
import {
  DeleteDataAPI,
  LoginDataAPI,
  RegisterDataAPI,
  ValidateToken,
} from "../utils/types";

export const useApi = () => ({
  validateToken: async (access_token: string) => {
    const { data } = await authAPI.get<ValidateToken>("/validate", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

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
    const { data } = await authAPI.post<LoginDataAPI>(
      "/login",
      { email, password },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  },
  deleteAccount: async (id: number) => {
    const { data } = await authAPI.delete<DeleteDataAPI>(`/delete/${id}`);

    return data;
  },
  updateAccount: async (
    id: number,
    name?: string,
    email?: string,
    password?: string
  ) => {
    const { data } = await authAPI.put(
      `/update/${id}`,
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
});

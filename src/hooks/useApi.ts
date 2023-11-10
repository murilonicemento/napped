import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const useApi = () => ({
  validateToken: async (token: string | null) => {
    const response = await api.post("/api/validate", { token });

    return response.data;
  },
  login: async (email: string, password: string) => {
    const response = await api.post(
      "/api/login",
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

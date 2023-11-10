import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const data = await api.post("/api/validate", { token });

    return data;
  },
  login: async (email: string, password: string) => {
    const data = await api.post(
      "/api/login",
      { email, password },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  },
});

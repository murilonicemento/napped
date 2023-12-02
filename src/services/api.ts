import axios from "axios";

export const authAPI = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_BASE_URL,
});

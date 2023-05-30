import axios from "axios";

const BASE = "http://localhost:8080";
const DEFAULT_HEADER = "application/json;charset=UTF-8";

export const todoService = axios.create({
  baseURL: BASE,
  headers: { "Content-Type": DEFAULT_HEADER },
  responseType: "json",
});

export const authService = axios.create({
  baseURL: BASE,
  headers: { "Content-Type": DEFAULT_HEADER },
  responseType: "json",
});

todoService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("todo-token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

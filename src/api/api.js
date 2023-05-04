import axios from "axios";

const BASE = "http://localhost:8080";
const AUTH_HEADER = localStorage.getItem("todo-token");
const DEFAULT_HEADER = "application/json;charset=UTF-8";

export const api = {
  getTodos: `${BASE}/todos`,
  getTodoById: (id) => `${BASE}/todos/${id}`,
  createTodo: `${BASE}/todos`,
  updateTodo: (id) => `${BASE}/todos/${id}`,
  deleteTodo: (id) => `${BASE}/todos/${id}`,
  signIn: `${BASE}/users/login`,
  signUp: `${BASE}/users/create`,
};

export const todoApi = axios.create({
  baseURL: BASE,
  headers: { "Content-Type": DEFAULT_HEADER, Authorization: AUTH_HEADER },
  responseType: "json",
});

export const authApi = axios.create({
  baseUrl: BASE,
  headers: { "Content-Type": DEFAULT_HEADER },
});

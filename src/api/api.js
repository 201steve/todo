const BASE = "http://localhost:8080";

export const api = {
  getTodos: `${BASE}/todos`,
  getTodoById: `${BASE}/todos/`,
  createTodo: `${BASE}/todos`,
  updateTodo: `${BASE}/todos/`,
  deleteTodo: `${BASE}/todos/`,
  signIn: `${BASE}/users/login`,
  signUp: `${BASE}/users/create`,
};

const BASE = "http://localhost:8080";

export const api = {
  getTodos: `${BASE}/todos`,
  getTodoById: (id) => `${BASE}/todos/${id}`,
  createTodo: `${BASE}/todos`,
  updateTodo: (id) => `${BASE}/todos/${id}`,
  deleteTodo: (id) => `${BASE}/todos/${id}`,
  signIn: `${BASE}/users/login`,
  signUp: `${BASE}/users/create`,
};

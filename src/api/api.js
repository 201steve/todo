const BASE = "http://localhost:8080";

export const api = {
  getTodos: `${BASE}/todos`,
  getTodoById: `${BASE}/todos/:id`,
  createTodo: `${BASE}/todos`,
  updateTodo: `${BASE}/todos/:id`,
  deleteTodo: `${BASE}/todos:id`,
  signIn: `${BASE}/users/login`,
  signUp: `${BASE}/users/create`,
};

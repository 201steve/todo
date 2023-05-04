import { api, authApi, todoApi } from "./api";

export const client = {
  getTodos: () => todoApi.get(api.getTodos),
  createTodo: (title, content) => todoApi.post(api.createTodo, { title, content }),
  updateTodo: (id, title, content) => todoApi.put(api.updateTodo(id), { title, content }),
  deleteTodo: (id) => todoApi.delete(api.deleteTodo(id)),
  signIn: (email, password) => authApi.post(api.signIn, email, password),
  signup: (email, password) => authApi.post(api.signUp, email, password),
};

import { todoService } from "api/api";

export const todoApi = {
  getTodo: () => todoService.get(`/todos`),
  updateTodo: (id, title, content) => todoService.put(`/todos/${id}`, { title, content }),
  deleteTodo: (id) => todoService.delete(`/todos/${id}`),
  createTodo: (title, content) => todoService.post(`/todos`, { title, content }),
};

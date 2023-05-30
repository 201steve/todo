import { authService } from "api/api";

export const authApi = {
  signIn: (email, password) => authService.post(`/users/login`, { email, password }),
  signUp: (email, password) => authService.post(`/users/create`, { email, password }),
};

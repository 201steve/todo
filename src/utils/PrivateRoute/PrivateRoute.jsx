import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let token = localStorage.getItem("todo-token");
  token || alert("로그인이 필요합니다");
  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "services/authApi";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;

  const isSubmitEnabled = email.includes("@") && password.length >= 8;

  const navigate = useNavigate();

  const getUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const goToList = () => {
    navigate("/");
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const response = await authApi.signIn(email, password);
      alert("로그인 성공");
      localStorage.setItem("todo-token", response.data.token);
      setUserInfo({ ...userInfo, email: "", password: "" });
      goToList();
    } catch {
      alert("로그인 정보를 다시 확인 해 보세요");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-md p-10">
      <div className="w-full text-right">
        <button onClick={goToList} className="px-5 py-1 mb-3 mr-5 rounded-lg bg-zinc-300">
          todoList
        </button>
      </div>

      <h1 className="mb-5 text-md">로그인</h1>

      <form className="flex flex-col" onSubmit={signIn}>
        <input
          placeholder="ID"
          type="email"
          value={email}
          name="email"
          onChange={getUserInfo}
          className={`p-3 px-4 border-2 w-[300px] ${
            email.includes("@") && "border-emerald-200"
          } rounded-md mb-5 focus:outline-none `}
        />
        <input
          placeholder="PASSWORD"
          type="password"
          value={password}
          name="password"
          onChange={getUserInfo}
          className={`py-3 px-4 border-2 w-[300px] ${
            password.length >= 8 && "border-emerald-200"
          } rounded-md mb-5 focus:outline-none`}
        />
        <button
          className="rounded-md disabled:bg-red-100 enabled:bg-emerald-100 enabled:active:bg-emerald-300 "
          type="submit"
          disabled={!isSubmitEnabled}
          onClick={signIn}
        >
          로그인
        </button>
      </form>
      <p className="mt-10">
        아직 가입하지않았다면
        <Link className="px-2 py-1 border-b-2 border-b-emerald-200 " to="/auth">
          회원가입하러 가기
        </Link>
      </p>
    </div>
  );
};

export default Signin;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;
  const navigate = useNavigate();

  const getUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const validation = email.includes("@") && password.length >= 8;

  const signUp = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: { "Content-type": "application/json;charset=utf-8" },
      body: JSON.stringify(userInfo),
    });
    const createdUser = await response.json();
    if (!createdUser.token) {
      alert("로그인 정보를 다시 확인 해 보세요");
      navigate("/signin");
    } else {
      alert("로그인 성공");
      localStorage.setItem("todo-token", createdUser.token);
      setUserInfo({ ...userInfo, email: "", password: "" });
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center max-w-md p-10 border-2 border-emerald-300">
      <h1 className="mb-5 text-md">로그인</h1>

      <form className="flex flex-col" onSubmit={signUp}>
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
          className="disabled:bg-red-100 enabled:bg-emerald-100 enabled:active:bg-emerald-300 rounded-md "
          type="submit"
          disabled={!validation}
          onClick={signUp}
        >
          로그인
        </button>
      </form>
      <p className="mt-10">
        아직 가입하지않았다면
        <Link className="border-b-2 border-b-emerald-200 px-2 py-1 " to="/auth">
          회원가입하러 가기
        </Link>
      </p>
    </div>
  );
};

export default Signin;

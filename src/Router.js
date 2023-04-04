import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Auth from "./pages/Auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

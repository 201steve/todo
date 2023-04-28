import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import List from "pages/list/List";
import Auth from "pages/Auth/Auth";
import Signin from "pages/Auth/Signin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}>
          <Route path="/:id" element={<List />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

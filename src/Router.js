import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDoList from './pages/ToDoList/ToDoList';
import Auth from './pages/Auth/Auth';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

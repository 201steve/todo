import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoModal from "./TodoModal/TodoModal";
import Todo from "./Todo/Todo";
import TodoDetail from "./TodoDetail/TodoDetail";
import { todoApi } from "services/todoApi";

const List = () => {
  const [todoList, setTodoList] = useState([]);
  const [isTodoModalOpend, setTodoModalIsOpend] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const goToSignIn = () => {
    navigate("signin");
  };

  const toggleTodoModal = () => {
    setTodoModalIsOpend((prev) => !prev);
  };

  const getTodo = async () => {
    const response = await todoApi.getTodo();
    setTodoList(response.data.data);
  };

  const deleteTodo = async (selectedId) => {
    try {
      await todoApi.deleteTodo(selectedId);
      setTodoList((prev) => prev.filter((list) => list.id !== selectedId));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const selectTodo = (id) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="relative max-w-2xl pb-10 m-10 border-2 rounded-lg">
      <div className="w-full p-4 text-right">
        <button
          onClick={goToSignIn}
          className="px-3 py-1 rounded-lg text-md bg-zinc-100 active:bg-zinc-300 active:text-white"
        >
          Login
        </button>
        <button
          onClick={toggleTodoModal}
          className="px-3 py-1 rounded-lg text-md bg-zinc-100 active:bg-zinc-300 active:text-white"
        >
          +
        </button>
      </div>
      {isTodoModalOpend && (
        <TodoModal
          setTodoModalIsOpend={setTodoModalIsOpend}
          toggleTodoModal={toggleTodoModal}
          setTodoList={setTodoList}
        />
      )}
      {todoList?.map(({ id, title, content }) => (
        <Todo
          key={id}
          id={id}
          title={title}
          content={content}
          deleteTodo={deleteTodo}
          setTodoList={setTodoList}
          selectTodo={selectTodo}
        />
      ))}
      {id && <TodoDetail todoList={todoList} />}
    </div>
  );
};

export default List;

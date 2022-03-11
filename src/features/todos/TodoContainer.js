import React from "react";

import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoContainer() {
  const todos = useSelector((state) => state.todos.entities);
  console.log("🚀 ~ file: TodoContainer.js ~ line 8 ~ TodoContainer ~ todos", todos)

  const todoList = todos.map((todo, index) => <Todo key={index} text={todo} />);
  return <ul>{todoList}</ul>;
}

export default TodoContainer;

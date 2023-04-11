import React from "react";
import { AppTypes } from "../App";
import SingleTodo from "./SingleTodo";

interface TodoListTypes {
  IProps: {
    todos: AppTypes["todo"][];
  };
}

const TodoList: React.FC<TodoListTypes["IProps"]> = ({ todos }) => {
  const TodoMap = todos.map((todo, i) => (
    <SingleTodo key={todo.title + i} todo={todo} />
  ));

  return <div className="p-3 pb-5">{TodoMap}</div>;
};

export default TodoList;

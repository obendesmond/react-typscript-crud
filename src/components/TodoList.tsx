import React from "react";
import SingleTodo from "./SingleTodo";
import { AppTypes } from "../ContextApi/ListContextProvider";

interface TodoListTypes {
  IProps: {
    todos: AppTypes["todo"][];
  };
}

const TodoList: React.FC<TodoListTypes["IProps"]> = ({ todos }) => {
  const TodoMap = todos.map((todo, i) => (
    <SingleTodo key={todo.id} todo={todo} />
  ));

  return <div className="p-3 pb-5">{TodoMap}</div>;
};

export default TodoList;

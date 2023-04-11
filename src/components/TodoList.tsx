import React from "react";
import { AppTypes } from "../App";

interface TodoListTypes {
  IProps: {
    todos: AppTypes["todo"][];
  };
}

const TodoList: React.FC<TodoListTypes["IProps"]> = ({ todos }) => {
  return <div className="p-3">TODO LIST</div>;
};

export default TodoList;

import React from "react";
import { AppTypes } from "../App";

interface TodoTypes {
  IProps: {
    todo: AppTypes["todo"];
  };
}

const SingleTodo: React.FC<TodoTypes["IProps"]> = ({ todo }) => {
  return (
    <div className="p-2 mb-2 rounded-md bg-white drop-shadow-sm">
      {todo.title}
    </div>
  );
};

export default SingleTodo;

import React from "react";
import { AppTypes } from "../App";
import SingleTodo from "./SingleTodo";

interface TodoListTypes {
  IProps: {
    todos: AppTypes["todo"][];
    todoSwitchEditMode: (id: string) => void;
    saveTodo: (id: string, title?: string, description?: string) => void;
    deleteTodo: (id: string) => void;
    collapseTodo: (id: string) => void;
  };
}

const TodoList: React.FC<TodoListTypes["IProps"]> = ({
  todos,
  todoSwitchEditMode,
  saveTodo,
  deleteTodo,
  collapseTodo,
}) => {
  const TodoMap = todos.map((todo, i) => (
    <SingleTodo
      key={todo.id}
      todo={todo}
      todoSwitchEditMode={todoSwitchEditMode}
      saveTodo={saveTodo}
      deleteTodo={deleteTodo}
      collapseTodo={collapseTodo}
    />
  ));

  return <div className="p-3 pb-5">{TodoMap}</div>;
};

export default TodoList;

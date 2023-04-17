import React, { useContext, useState } from "react";
import Icon from "./Icon";
import { MdEdit, MdSaveAs, MdDelete } from "react-icons/md";
import ListContext, { AppTypes } from "../ContextApi/ListContextProvider";

interface TodoTypes {
  IProps: {
    todo: AppTypes["todo"];
  };
}

const SingleTodo: React.FC<TodoTypes["IProps"]> = ({ todo }) => {
  const {
    handleTodoSwitchEditMode,
    handleSaveTodo,
    handleDeleteTodo,
    handleCollapseTodo,
  } = useContext(ListContext);
  const { id, title, description, editMode, collapsed } = todo;
  const [homeTitle, setHomeTitle] = useState<string>(title);
  const [homeDescription, setHomeDescription] = useState<string>(description);

  const saveTodo = (): void => {
    handleSaveTodo(id, homeTitle, homeDescription);
  };

  return (
    <div className="p-2 mb-2 rounded-md bg-white drop-shadow-sm cursor-pointer hover:drop-shadow-md">
      {editMode ? (
        <input
          value={homeTitle}
          onChange={e => setHomeTitle(e.target.value)}
          className="border-2 px-2 border-myBlue rounded-sm mb-1"
          placeholder="Todo title"
        />
      ) : (
        <p onClick={() => handleCollapseTodo(id)}> {title}</p>
      )}
      {!collapsed && (
        <div>
          <hr />
          <div>
            {editMode ? (
              <textarea
                value={homeDescription}
                onChange={e => setHomeDescription(e.target.value)}
                placeholder="todo description"
                className="w-full px-3 border-2 border-myBlue rounded-md mt-2"
              />
            ) : (
              <p className="p-2 text-justify">{description}</p>
            )}

            <div className="flex justify-end">
              <Icon
                onClick={() =>
                  editMode ? saveTodo() : handleTodoSwitchEditMode(id)
                }
                Icon={editMode ? MdSaveAs : MdEdit}
                size={16}
              />
              <Icon
                onClick={() => handleDeleteTodo(id)}
                Icon={MdDelete}
                size={16}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTodo;

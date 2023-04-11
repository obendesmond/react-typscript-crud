import React, { useState } from "react";
import { AppTypes } from "../App";
import Icon from "./Icon";
import { MdEdit, MdSaveAs, MdDelete } from "react-icons/md";

interface TodoTypes {
  IProps: {
    todo: AppTypes["todo"];
    todoSwitchEditMode: (id: string) => void;
    saveTodo: (id: string, title?: string, description?: string) => void;
    deleteTodo: (id: string) => void;
  };
}

const SingleTodo: React.FC<TodoTypes["IProps"]> = ({
  todo,
  todoSwitchEditMode,
  saveTodo,
  deleteTodo,
}) => {
  const { id, title, description, editMode } = todo;
  const [showDescription, setShowDescription] = useState<boolean>(editMode);
  const [homeTitle, setHomeTitle] = useState<string>(title);
  const [homeDescription, setHomeDescription] = useState<string>(description);

  const handleSaveTodo = (): void => {
    saveTodo(id, homeTitle, homeDescription);
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
        <p onClick={() => setShowDescription(!showDescription)}> {title}</p>
      )}
      {showDescription && (
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
                  editMode ? handleSaveTodo() : todoSwitchEditMode(id)
                }
                Icon={editMode ? MdSaveAs : MdEdit}
                size={16}
              />
              <Icon onClick={() => deleteTodo(id)} Icon={MdDelete} size={16} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTodo;

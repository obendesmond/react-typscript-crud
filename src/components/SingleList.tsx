import React, { useState } from "react";
import { AppTypes } from "../App";
import TodoList from "./TodoList";
import { MdEdit, MdSaveAs, MdDelete, MdAdd } from "react-icons/md";
import Icon from "./Icon";

interface SingleListTypes {
  IProps: {
    singleList: AppTypes["singleList"];
    saveListTitle: (title: string, id: string) => void;
    listSwitchEditMode: (id: string) => void;
    deleteList: (id: string) => void;
    addTodo: (id: string) => void;
    todoSwitchEditMode: (id: string) => void;
    saveTodo: (id: string, title?: string, description?: string) => void;
  };
}

const SingleList: React.FC<SingleListTypes["IProps"]> = ({
  singleList,
  saveListTitle,
  listSwitchEditMode,
  deleteList,
  addTodo,
  todoSwitchEditMode,
  saveTodo,
}) => {
  const { id, editMode, todos } = singleList;
  const [title, setTitle] = useState<string>(singleList.title);

  const saveListTitleFunc = () => {
    saveListTitle(title, singleList.id);
  };

  const checkEnterKey = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") saveListTitleFunc();
  };

  return (
    <div className="relative group">
      <div className="w-full md:w-[400px] drop-shadow-md rounded-md overflow-hidden min-h-[150px] bg-[#d3f0f9]">
        <div className="flex items-center justify-center gap-10 bg-gradient-to-tr from-myBlue to-myPink bg-opacity-70 p-3 text-white text-center">
          {/* bg-gradient-to-tr from-myBlue to-myPink | bg-blue-900 bg-opacity-70 */}
          {editMode ? (
            <input
              onKeyDown={checkEnterKey}
              className="flex-1 bg-transparent placeholder-gray-300 px-3 py-1 border-[1px] border-white rounded-md"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter list title"
            />
          ) : (
            <p className="flex-1 text-left md:text-center">
              {singleList.title}
            </p>
          )}
          <div>
            <Icon
              onClick={() =>
                editMode ? saveListTitleFunc() : listSwitchEditMode(id)
              }
              Icon={editMode ? MdSaveAs : MdEdit}
            />
            <Icon onClick={() => deleteList(id)} Icon={MdDelete} />
          </div>
        </div>
        <TodoList
          todoSwitchEditMode={todoSwitchEditMode}
          saveTodo={saveTodo}
          todos={todos}
        />
      </div>

      {/* add todo button */}
      <Icon
        onClick={() => addTodo(id)}
        Icon={MdAdd}
        className="hidden group-hover:inline-block  absolute -mt-6 -ml-4 p-2 bg-myBlue text-white border-2 border-white drop-shadow-lg hover:bg-myPink bg-opacity-100"
        reduceOpacityOnHover={false}
      />
    </div>
  );
};

export default SingleList;

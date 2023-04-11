import React, { useState } from "react";
import { AppTypes } from "../App";
import TodoList from "./TodoList";
import { MdEdit, MdSaveAs } from "react-icons/md";
import Icon from "./Icon";

interface SingleListTypes {
  IProps: {
    singleList: AppTypes["singleList"];
    saveListTitle: (title: string, id: string) => void;
    switchEditMode: (id: string) => void;
  };
}

const SingleList: React.FC<SingleListTypes["IProps"]> = ({
  singleList,
  saveListTitle,
  switchEditMode,
}) => {
  const { id, editMode } = singleList;
  const [title, setTitle] = useState<string>(singleList.title);

  const saveListTitleFunc = () => {
    saveListTitle(title, singleList.id);
  };

  const checkEnterKey = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") saveListTitleFunc();
  };

  return (
    <div className="w-[400px] drop-shadow-md rounded-t-md overflow-hidden min-h-[150px] bg-[#d3f0f9]">
      <div className="flex items-center justify-center gap-10 bg-blue-900 bg-opacity-70 p-3 text-white text-center">
        {/* bg-gradient-to-tr from-myBlue to-myPink */}
        {editMode ? (
          <input
            onKeyDown={checkEnterKey}
            className="flex-1 bg-transparent placeholder-gray-300 px-3 py-1 border-[1px] border-white rounded-md"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter list title"
          />
        ) : (
          <p className="flex-1">{singleList.title}</p>
        )}
        <Icon
          onClick={() => (editMode ? saveListTitleFunc() : switchEditMode(id))}
          Icon={editMode ? MdSaveAs : MdEdit}
        />
      </div>
      <TodoList todos={singleList.todos} />
    </div>
  );
};

export default SingleList;

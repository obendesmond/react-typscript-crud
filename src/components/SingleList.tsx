import React, { useState } from "react";
import { AppTypes } from "../App";
import TodoList from "./TodoList";
import { MdEdit, MdSaveAs } from "react-icons/md";
import Icon from "./Icon";

interface SingleListTypes {
  IProps: {
    singleList: AppTypes["singleList"];
    saveListTitle: (title: string, id: string) => void;
  };
}

const SingleList: React.FC<SingleListTypes["IProps"]> = ({
  singleList,
  saveListTitle,
}) => {
  const [editMode, setEditMode] = useState<boolean>(true);
  const [title, setTitle] = useState<string>(singleList.title);

  const saveListTitleFunc = () => {
    saveListTitle(title, singleList.id);
    setEditMode(false);
  };

  return (
    <div className="w-[400px] drop-shadow-md rounded-t-md overflow-hidden min-h-[150px] bg-[#d3f0f9]">
      <div className="flex items-center justify-center gap-10 bg-gradient-to-tr from-myBlue to-myPink p-3 text-white text-center">
        {editMode ? (
          <input
            className="bg-transparent placeholder-gray-300 px-3 py-1 border-[1px] border-white rounded-md"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter list title"
          />
        ) : (
          <p className="flex-1">{singleList.title}</p>
        )}
        <Icon
          onClick={() =>
            editMode ? saveListTitleFunc() : setEditMode(!editMode)
          }
          Icon={editMode ? MdSaveAs : MdEdit}
        />
      </div>
      <TodoList todos={singleList.todos} />
    </div>
  );
};

export default SingleList;

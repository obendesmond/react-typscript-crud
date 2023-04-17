import React, { useContext, useEffect, useState } from "react";
import TodoList from "./TodoList";
import {
  MdEdit,
  MdSaveAs,
  MdDelete,
  MdAdd,
  MdKeyboardArrowDown,
} from "react-icons/md";
import Icon from "./Icon";
import ListContext, { AppTypes } from "../ContextApi/ListContextProvider";

interface SingleListTypes {
  IProps: {
    singleList: AppTypes["singleList"];
  };
}

const SingleList: React.FC<SingleListTypes["IProps"]> = ({ singleList }) => {
  const {
    handleSaveListTitle,
    handleListSwitchEditMode,
    handleDeleteList,
    handleAddTodo,
    handleCollapseAllTodo,
  } = useContext(ListContext);

  const { id, editMode, todos } = singleList;
  const [title, setTitle] = useState<string>(singleList.title);
  const [allCollapsed, setAllCollapsed] = useState(false);

  useEffect(() => {
    const checkAllTodoCollapsed = () => {
      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        if (!todo.collapsed) return setAllCollapsed(false);
      }
      return setAllCollapsed(true);
    };
    checkAllTodoCollapsed();
  }, [todos]);

  const saveListTitleFunc = () => {
    handleSaveListTitle(title, singleList.id);
  };

  const checkEnterKey = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") saveListTitleFunc();
  };

  const handleCollapseClick = () => {
    if (allCollapsed) {
      // if they're all collapsed then un collapse them
      return handleCollapseAllTodo(id, false);
    }

    return handleCollapseAllTodo(id);
  };

  return (
    <div className="relative">
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
                editMode ? saveListTitleFunc() : handleListSwitchEditMode(id)
              }
              Icon={editMode ? MdSaveAs : MdEdit}
            />
            <Icon onClick={() => handleDeleteList(id)} Icon={MdDelete} />
            <Icon
              onClick={() => handleCollapseClick()}
              Icon={MdKeyboardArrowDown}
              className={`${allCollapsed ? "rotate-180" : "rotate-0"}`}
            />
          </div>
        </div>
        <TodoList todos={todos} />
      </div>

      {/* add todo button */}
      <Icon
        onClick={() => handleAddTodo(id)}
        Icon={MdAdd}
        className="absolute -mt-6 -ml-4 p-2 bg-myBlue text-white border-2 border-white drop-shadow-lg hover:bg-myPink bg-opacity-100"
        reduceOpacityOnHover={false}
      />
    </div>
  );
};

export default SingleList;

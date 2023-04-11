import React from "react";
import { AppTypes } from "../App";
import SingleList from "./SingleList";

interface BoardTypes {
  Iprops: {
    lists: AppTypes["list"];
    setLists: React.Dispatch<React.SetStateAction<AppTypes["list"]>>;
  };
}

const ListsBoard: React.FC<BoardTypes["Iprops"]> = ({ lists, setLists }) => {
  // function for saving title of a list card
  const handleSaveListTitle = (title: string, id: string): void => {
    const updatedList = lists.map(list => {
      if (list.id === id) {
        list.title = title;
        list.editMode = false;
      }
      return list;
    });
    setLists(updatedList);
  };

  // function for switching editMode
  const handleSwitchEditMode = (id: string, value?: boolean): void => {
    const updatedList = lists.map(list => {
      if (list.id === id) {
        list.editMode = value !== undefined ? value : !list.editMode;
      }
      return list;
    });
    setLists(updatedList);
  };

  // function for deleting a List Board
  const handleDeleteList = (id: string): void => {
    const listToDelete = lists.find(list => list.id === id);

    if (window.confirm(`Delete ${listToDelete?.title}?`)) {
      const updatedList = lists.filter(list => list.id !== id);
      setLists(updatedList);
    }
  };

  // function for adding default todo to a list card
  const handleAddTodo = (id: string): void => {
    handleSwitchEditMode(id, false);
    const defaultTodo: AppTypes["todo"] = {
      title: "Sample todo",
      description: "sample description",
    };

    const updatedList = lists.map(list => {
      if (list.id === id) {
        list.todos.push(defaultTodo);
      }
      return list;
    });

    setLists(updatedList);
  };

  const listsMap = lists.map(list => (
    <SingleList
      key={list.id}
      singleList={list}
      saveListTitle={handleSaveListTitle}
      switchEditMode={handleSwitchEditMode}
      deleteList={handleDeleteList}
      addTodo={handleAddTodo}
    />
  ));

  return <div className={`p-10 flex flex-wrap gap-10`}>{listsMap}</div>;
};

export default ListsBoard;

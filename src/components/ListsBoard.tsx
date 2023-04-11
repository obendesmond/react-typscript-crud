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
      }
      return list;
    });
    setLists(updatedList);
  };

  const listsMap = lists.map(list => (
    <SingleList
      saveListTitle={handleSaveListTitle}
      key={list.id}
      singleList={list}
    />
  ));

  return <div className={`p-10 flex flex-wrap gap-10`}>{listsMap}</div>;
};

export default ListsBoard;

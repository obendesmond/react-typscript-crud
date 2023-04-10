import React from "react";
import { AppTypes } from "../App";
import SingleList from "./SingleList";

interface BoardProps {
  Iprops: {
    lists: AppTypes["list"];
    setLists: React.Dispatch<React.SetStateAction<AppTypes["list"]>>;
  };
}

function ListsBoard({ lists }: BoardProps["Iprops"]): JSX.Element {
  //
  const listsMap = lists.map((list, i) => (
    <SingleList key={list.title + i} singleList={list} />
  ));

  return <div className="p-10 flex flex-wrap gap-10">{listsMap}</div>;
}

export default ListsBoard;

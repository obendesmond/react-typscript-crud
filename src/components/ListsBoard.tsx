import React, { useContext } from "react";
import SingleList from "./SingleList";
import ListContext from "../ContextApi/ListContextProvider";

const ListsBoard: React.FC = () => {
  const { list } = useContext(ListContext);

  const listsMap = list.map((singleList: any) => (
    <SingleList key={singleList.id} singleList={singleList} />
  ));

  return <div className={`p-10 flex flex-wrap gap-10`}>{listsMap}</div>;
};

export default ListsBoard;

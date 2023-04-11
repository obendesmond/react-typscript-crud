import React, { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ListsBoard from "./components/ListsBoard";
import uuid from "react-uuid";

export interface AppTypes {
  list: AppTypes["singleList"][];

  singleList: {
    id: string;
    title: string;
    todos: AppTypes["todo"][];
    editMode: boolean;
  };

  todo: {
    title: string;
    description: string;
  };
}

const App: React.FC = () => {
  const defaultList = {
    id: uuid(),
    title: "Sample List Board Title",
    todos: [],
    editMode: true,
  };
  const [lists, setLists] = useState<AppTypes["list"]>([defaultList]);

  const handleAddNewList = (): void => {
    const oldList = [...lists].map(list => {
      list.editMode = false;
      return list;
    });

    setLists([...oldList, { ...defaultList, id: uuid() }]);
  };

  return (
    <Layout>
      <Header addNewList={handleAddNewList} />
      <ListsBoard lists={lists} setLists={setLists} />
    </Layout>
  );
};

export default App;

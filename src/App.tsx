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
  };
  const [lists, setLists] = useState<AppTypes["list"]>([defaultList]);

  const handleAddNewList = (): void => {
    setLists([...lists, { ...defaultList, id: uuid() }]);
  };

  return (
    <Layout>
      <Header addNewList={handleAddNewList} />
      <ListsBoard lists={lists} setLists={setLists} />
      <button className="gone" onClick={() => alert("good")}></button>
    </Layout>
  );
};

export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ListsBoard from "./components/ListsBoard";

export interface AppTypes {
  list: AppTypes["singleList"][];

  singleList: {
    title: string;
    todos: AppTypes["todo"][];
  };

  todo: {
    title: string;
    description: string;
  };
}

const App: React.FC = () => {
  const [lists, setLists] = useState<AppTypes["list"]>([
    {
      title: "First Board",
      todos: [{ title: "first todo", description: "some description" }],
    },
    {
      title: "Second Board",
      todos: [{ title: "first todo", description: "some description" }],
    },
  ]);

  return (
    <Layout>
      <Header />
      <ListsBoard lists={lists} setLists={setLists} />
    </Layout>
  );
};

export default App;

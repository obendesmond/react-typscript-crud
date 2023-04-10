import React, { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";

interface AppTypes {
  boardTypes: {
    title: string;
    todos: AppTypes["todo"][];
  }[];

  todo: {
    title: string;
    description: string;
  };
}

const App: React.FC = () => {
  const [boards, setBoards] = useState<AppTypes["boardTypes"]>([
    {
      title: "First Board",
      todos: [{ title: "first todo", description: "some description" }],
    },
  ]);

  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ListsBoard from "./components/ListsBoard";
import { ListContextProvider } from "./ContextApi/ListContextProvider";
import Alert from "./components/Alert";

const App: React.FC = () => {
  return (
    <ListContextProvider>
      <Layout>
        <Header />
        <ListsBoard />
        <Alert />
      </Layout>
    </ListContextProvider>
  );
};

export default App;

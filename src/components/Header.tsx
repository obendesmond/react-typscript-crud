import React, { useContext } from "react";
import ListContext from "../ContextApi/ListContextProvider";
const logo = require("../assets/logo.png");

const Header: React.FC = () => {
  const { handleAddNewList } = useContext(ListContext);
  return (
    <div className="sticky z-10 top-0 drop-shadow-md flex flex-col items-center overflow-visible justify-end bg-gradient-to-r from-myBlue to-myPink h-32 p-5 text-white">
      <img
        src={logo}
        className="w-[100px] left-0 drop-shadow-md absolute"
        alt="logo"
      />
      <h1 className="mb-10 text-3xl">Add And Manage Lists</h1>
      <button
        onClick={handleAddNewList}
        className="bg-myBlue py-2 px-9 -mb-10 rounded-full text-white border-2 border-white drop-shadow-md transition-all hover:drop-shadow-lg"
      >
        Add New List Board
      </button>
    </div>
  );
};

export default Header;

import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center overflow-visible justify-end bg-gradient-to-r from-myBlue to-myPink bg-opacity-10 h-32 p-5 text-white">
      <h1 className="mb-10 text-3xl">Add And Manage Lists</h1>
      <button className="bg-myBlue py-2 px-9 -mb-10 rounded-full text-white border-2 border-white drop-shadow-md transition-all hover:drop-shadow-lg">
        Add New Board
      </button>
    </div>
  );
};

export default Header;

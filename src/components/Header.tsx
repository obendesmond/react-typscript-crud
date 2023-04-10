import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center overflow-visible justify-end bg-gradient-to-r from-[#0A32B3] to-pink-700 bg-opacity-10 h-32 p-5 text-white">
      <h1 className="mb-10 text-3xl">Add And Manage Board</h1>
      <button className="bg-[#0A32B3] py-2 px-9 -mb-10 rounded-full text-white border-2 border-white drop-shadow-sm transition-all hover:drop-shadow-lg">
        Add New Board
      </button>
    </div>
  );
};

export default Header;

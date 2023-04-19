import React, { useContext } from "react";
import ListContext from "../ContextApi/ListContextProvider";

const Alert: React.FC = () => {
  const { alert, setAlert } = useContext(ListContext);

  return (
    <div
      className={`absolute top-0 block z-50 h-full w-full ${
        alert.open ? "block" : "hidden"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-white border-8 min-w-[90%] min-h-[100px] md:min-w-[500px] md:min-h-[300px] rounded-[30px] z-30 self-center flex flex-col p-10">
          <div className="flex-1">
            <p>{alert.content}</p>
          </div>
          <div className="flex justify-end gap-5">
            <button
              onClick={() => setAlert && setAlert({ ...alert, open: false })}
              className="bg-myPink py-2 px-9 rounded-full text-white border-2 border-white transition-all hover:drop-shadow-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => alert.action()}
              className="bg-myBlue py-2 px-9 rounded-full text-white border-2 border-white transition-all hover:drop-shadow-lg"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="bg-black bg-opacity-30 backdrop-blur-[2px] h-full w-full absolute z-20"></div>
      </div>
    </div>
  );
};

export default Alert;

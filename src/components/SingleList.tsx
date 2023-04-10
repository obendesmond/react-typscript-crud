import React from "react";
import { AppTypes } from "../App";

interface SingleListTypes {
  IProps: {
    singleList: AppTypes["singleList"];
  };
}

const SingleList: React.FC<SingleListTypes["IProps"]> = ({ singleList }) => {
  return (
    <div className="w-[400px] rounded-t-md overflow-hidden min-h-[150px] bg-[#d3f0f9]">
      <div className="bg-gradient-to-tr from-myBlue to-myPink py-3 text-white text-center">
        {singleList.title}
      </div>
    </div>
  );
};

export default SingleList;

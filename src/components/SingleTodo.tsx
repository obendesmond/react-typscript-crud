import React, { useState } from "react";
import { AppTypes } from "../App";
import Icon from "./Icon";
import { MdEdit, MdSaveAs, MdDelete } from "react-icons/md";

interface TodoTypes {
  IProps: {
    todo: AppTypes["todo"];
  };
}

const SingleTodo: React.FC<TodoTypes["IProps"]> = ({ todo }) => {
  const { title, description } = todo;
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <div className="p-2 mb-2 rounded-md bg-white drop-shadow-sm cursor-pointer hover:drop-shadow-md">
      <p onClick={() => setShowDescription(!showDescription)}> {title}</p>
      {showDescription && (
        <div>
          <hr />
          <div>
            <p className="p-2 text-justify">
              {description} Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Perferendis quas odit sint sapiente, quia quis iure
              voluptatibus commodi molestiae dolor provident, laboriosam officia
              nisi, similique architecto eveniet? Cupiditate, molestias
              nesciunt!
            </p>
            <div className="flex justify-end">
              <Icon Icon={MdEdit} size={16} />
              <Icon Icon={MdDelete} size={16} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTodo;

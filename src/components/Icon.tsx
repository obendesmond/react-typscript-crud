import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
  size?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

function Icon({ Icon, size = 20, onClick }: IconProps) {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-full cursor-pointer transition-all delay-150 hover:bg-myBlue hover:bg-opacity-30 outline-none"
    >
      <Icon size={size} />
    </button>
  );
}

export default Icon;

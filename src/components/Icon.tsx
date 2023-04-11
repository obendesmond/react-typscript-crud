import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
  size?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  reduceOpacityOnHover?: boolean;
}

function Icon({
  Icon,
  size = 20,
  onClick,
  className,
  reduceOpacityOnHover = true,
}: IconProps) {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-full cursor-pointer transition-all delay-150 hover:bg-myBlue outline-none ${
        reduceOpacityOnHover && "hover:bg-opacity-30"
      } ${className}`}
    >
      <Icon size={size} />
    </button>
  );
}

export default Icon;

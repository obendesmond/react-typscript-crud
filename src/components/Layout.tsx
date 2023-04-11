import React, { ReactNode } from "react";

interface LayoutTypes {
  IProps: {
    children: ReactNode;
  };
}

const Layout: React.FC<LayoutTypes["IProps"]> = ({ children }) => {
  return <div className="bg-pattern min-h-[100vh]">{children}</div>;
};

export default Layout;

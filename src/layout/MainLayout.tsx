import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className="main_layout">{children}</div>;
};

export default MainLayout;

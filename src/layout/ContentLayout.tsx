import React from "react";

type ContentLayoutProps = {
  children: React.ReactNode;
};

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <div className="content_layout">{children}</div>;
};

export default ContentLayout;

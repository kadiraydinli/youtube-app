import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return <div className="flex w-full">{children}</div>;
};

export default PageContainer;

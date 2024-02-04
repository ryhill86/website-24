import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className="px-[5vw] lg:px-0 container mx-auto">{children}</div>;
};

export default PageContainer;

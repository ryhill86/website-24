import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import PageContainer from '../components/PageContainer';

const Layout: React.FC = () => {
  return (
    <div>
      <Menu />
      <hr />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </div>
  );
};

export default Layout;

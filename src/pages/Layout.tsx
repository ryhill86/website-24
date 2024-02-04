import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import PageContainer from '../components/PageContainer';

const Layout: React.FC = () => {
  return (
    <div>
      <Menu />
      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <PageContainer>
        <Outlet />
      </PageContainer>
    </div>
  );
};

export default Layout;

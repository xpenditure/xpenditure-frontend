import React from 'react';
import styled from 'styled-components';

import Sidenav from '../components/sidenav/Sidenav';
import Settings from '../components/settings/Settings';
import { Outlet } from 'react-router-dom';
import AddLabel from '../components/widgets/AddLabel';

const Dashboard = () => {
  return (
    <>
      <DashWrap>
        <Sidenav />

        <MainViews>
          <Container>
            <Outlet />
          </Container>
        </MainViews>
      </DashWrap>
      <Settings />
      <AddLabel />
    </>
  );
};

const DashWrap = styled.div`
  display: flex;
  overflow: hidden;
`;

const MainViews = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export default Dashboard;

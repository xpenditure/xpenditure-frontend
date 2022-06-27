import React, { useEffect } from 'react';
import styled from 'styled-components';
import Budgets from '../components/views/Budgets';
import Labels from '../components/views/Labels';
import Sidenav from '../components/sidenav/Sidenav';
import { useSelector } from 'react-redux';
import Settings from '../components/settings/Settings';

const Dashboard = () => {
  const { activeView } = useSelector((state) => state.action);

  return (
    <>
      <DashWrap>
        <Sidenav />

        <MainViews>
          <Container>
            {activeView === 'budgets' && <Budgets />}
            {activeView === 'labels' && <Labels />}
          </Container>
        </MainViews>
      </DashWrap>
      <Settings />
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

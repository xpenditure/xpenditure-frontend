import React, { useEffect } from 'react';
import styled from 'styled-components';

import Sidenav from '../components/sidenav/Sidenav';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { useDispatch } from 'react-redux';
import { getUserProfileAsync } from '../features/userSlice';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(getUserProfileAsync());
    };
  }, []);

  return (
    <>
      <DashWrap>
        <Sidenav />

        <MainViews>
          <Header />
          <OutletWrap>
            <Container>
              <Outlet />
            </Container>
          </OutletWrap>
        </MainViews>
      </DashWrap>
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
  overflow-y: auto;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

const OutletWrap = styled.div`
  margin: 10px 0;
`;

export default Dashboard;

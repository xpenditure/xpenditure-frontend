import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';

import Sidenav from '../components/sidenav/Sidenav';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { useDispatch } from 'react-redux';
import { getUserProfileAsync } from '../features/userSlice';
import Alert from '../components/message/Alert';
import { SocketContext } from '../context/socket';

const Dashboard = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    return () => {
      dispatch(getUserProfileAsync());
    };
  }, []);

  useEffect(() => {
    return () => {
      socket.on('message', (data) => {
        setMessage(data);
      });
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
      <Alert data={message} />
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

import React from 'react';
import styled from 'styled-components';
import Logout from './Logout';
import NavTab from './NavTab';

const Sidenav = () => {
  return (
    <SidenavWrap>
      <SidenavInner>
        <NavTab />
        <Logout />
      </SidenavInner>
    </SidenavWrap>
  );
};

const SidenavWrap = styled.div`
  display: flex;
  height: 100vh;
  width: 250px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.border_color1};
`;

const SidenavInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
`;

export default Sidenav;

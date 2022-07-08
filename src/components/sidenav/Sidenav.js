import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavTab from './NavTab';

const Sidenav = () => {
  const { sideNav } = useSelector((state) => state.action);

  return (
    <SidenavWrap active={sideNav}>
      <SidenavInner>
        <SidenavTop>
          <NavTab active={sideNav} />
        </SidenavTop>
        <SidenavBottom></SidenavBottom>
      </SidenavInner>
    </SidenavWrap>
  );
};

const SidenavWrap = styled.div`
  display: flex;
  height: 100vh;
  width: ${(props) => (props.active ? '300px' : '60px')};
  background-color: ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.border_color1};
  overflow: hidden;
  transition: all 300ms;
`;

const SidenavInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
`;

const SidenavTop = styled.div`
  flex: 1;
  width: 100%;
`;

const SidenavBottom = styled.div`
  width: 100%;
`;

export default Sidenav;

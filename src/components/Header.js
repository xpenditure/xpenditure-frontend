import React from 'react';
import styled from 'styled-components';
import { DarkButton } from '../styles/DefaultStyles';
import { showCreateModal } from '../features/actionSlice';
import Link from 'next/link';

const Header = ({ addClick }) => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <HeaderLeft>
          <Link href="/">
            <a>Xpenditure</a>
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <DarkButton onClick={addClick}>Add Budget</DarkButton>
        </HeaderRight>
      </HeaderInner>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  padding: 0 20px;
  top: 0;
  left: 0;
`;
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;
const HeaderLeft = styled.div`
  display: flex;
`;
const HeaderRight = styled.div`
  display: flex;
`;

export default Header;

import React from 'react';
import styled from 'styled-components';
import SearchInput from '../search/SearchInput';
import { BellIcon, EllipsisVerticalIcon } from '../icons';
import { Link } from 'react-router-dom';
import MoreSide from '../widgets/MoreSide';
import { useDispatch } from 'react-redux';
import { toggleMoreSide } from '../../features/actionSlice';
import { ButtonPrimary } from '../../styles/DefaultStyles';

const Header = () => {
  const dispatch = useDispatch();

  const handleShowMoreSide = () => {
    dispatch(toggleMoreSide(true));
  };

  return (
    <HeaderWrap>
      <HeaderLeft>
        <SearchInput />
      </HeaderLeft>
      <HeaderRight>
        <div className="noti">
          <Link to="notifications">
            <BellIcon />
          </Link>
        </div>
        <Link to="new/budget">
          <ButtonPrimary>New</ButtonPrimary>
        </Link>
        <MoreItem>
          <div className="ellipsis" onClick={handleShowMoreSide}>
            <EllipsisVerticalIcon />
          </div>
          <MoreSide />
        </MoreItem>
      </HeaderRight>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  svg {
    width: 20px;
    fill: ${(props) => props.theme.colors.text_color2};
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .noti {
    a {
      display: flex;
    }
  }
`;

const MoreItem = styled.div`
  position: relative;
  .ellipsis {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }
  }
`;

export default Header;

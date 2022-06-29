import React from 'react';
import styled from 'styled-components';
import SearchInput from '../search/SearchInput';
import { BellIcon, ArrowDownIcon, EllipsisVerticalIcon } from '../icons';
import { Link } from 'react-router-dom';
import MoreSide from '../widgets/MoreSide';
import { useDispatch } from 'react-redux';
import { toggleMoreSide } from '../../features/actionSlice';

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
        <UserInfo>
          <div className="avatar"></div>
          <div className="details">
            <div className="name">Jerry Nwosu</div>
            <div className="email">jerrynwosu@gmail.com</div>
          </div>
        </UserInfo>
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
  /* border-bottom: 1px solid ${(props) => props.theme.colors.border_color1}; */
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  svg {
    width: 20px;
    fill: ${(props) => props.theme.colors.text_color2};
  }
`;

const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .noti {
    a {
      display: flex;
    }
  }
`;

const UserInfo = styled.div`
  font-size: 14px;
  margin: 0 30px;
  color: ${(props) => props.theme.colors.text_color2};
  display: flex;
  line-height: 1.2;

  .name {
    font-weight: 600;
  }

  .email {
    font-size: 12px;
  }

  .avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.input_color1};
    margin-right: 10px;
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

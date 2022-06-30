import React from 'react';
import styled from 'styled-components';
import { EllipsisHorizontalIcon } from '../icons';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <UserInfoWrap>
      <div className="user-info">
        <div className="avatar"></div>
        <div className="details">
          <div className="name">
            {user?.firstName}
            {user?.lastName}
          </div>
          <div className="email">{user?.email}</div>
        </div>
      </div>
      <div className="icon-more">
        <EllipsisHorizontalIcon />
      </div>
    </UserInfoWrap>
  );
};

const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.hover_color1};
  }

  .avatar {
    width: 40px !important;
    height: 40px;
    width: 18px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    margin-right: 10px;
    display: flex;
  }

  .user-info {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .details {
    display: flex;
    flex-direction: column;
    line-height: 1;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text_color2};
  }

  .name {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .email {
    font-size: 12px;
  }

  .icon-more {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    svg {
      width: 18px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }
`;

export default UserInfo;

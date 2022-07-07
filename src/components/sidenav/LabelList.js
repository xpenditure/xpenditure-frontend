import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { EllipsisHorizontalIcon, TagIcon } from '../icons';
import { TabIcon, TabItem, TabName } from './styled';
import { SocketContext } from '../../context/socket';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LabelList = ({ active }) => {
  const socket = useContext(SocketContext);
  const { labels } = useSelector((state) => state.budget);

  return (
    <LabelWrap active={active}>
      {labels === [] && <NoLabel>No Label</NoLabel>}
      {labels.map((label) => (
        <NavLink
          end
          className={({ isActive }) =>
            'nav-link' + (isActive ? ' activated' : '')
          }
          to={`/dashboard/labels/${label._id}`}
          key={label._id}
        >
          <TabItem>
            <TabIcon className="active-icon">
              <TagIcon />
            </TabIcon>
            <TabName>{label.name}</TabName>
          </TabItem>
          <div className="more">
            <EllipsisHorizontalIcon />
          </div>
        </NavLink>
      ))}
    </LabelWrap>
  );
};

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-top: 1px solid ${(props) => props.theme.colors.border_color1};
  border-bottom: 1px solid ${(props) => props.theme.colors.border_color1};
  max-height: ${(props) => (props.active ? '250px' : '0')};
  overflow-y: ${(props) => (props.active ? 'auto' : 'hidden')};
  border-width: ${(props) => (props.active ? '1px' : '0')};
  transition: all 300ms ease-in-out;

  a {
    text-decoration: none;
    position: relative;

    .more {
      margin-right: 20px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: none; // flex to show ellipsis
      justify-content: center;
      align-items: center;

      :hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

const NoLabel = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text_color2};
  overflow: hidden;
`;

export default LabelList;

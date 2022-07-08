import React from 'react';
import styled from 'styled-components';
import { IoCopyOutline } from 'react-icons/io5';

const Empty = ({ name }) => {
  const whichIcon = () => {
    if (name.toLowerCase() === 'budget') return <IoCopyOutline />;
  };

  return (
    <EmptyWrap>
      <div className="icon-empty">{whichIcon()}</div>
      <p>{name} is Empty</p>
    </EmptyWrap>
  );
};

const EmptyWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #888;
  margin-top: 100px;

  .icon-empty {
    display: flex;
    font-size: 200px;
    opacity: 0.1;
  }
`;

export default Empty;

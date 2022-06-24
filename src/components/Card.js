import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SocketContext } from '../context/socket';
import EllipsisVerticalIcon from './icons/EllipsisVerticalIcon';
import Option from './Option';

const Card = ({ budget, setBudget, showEdit }) => {
  const [more, setMore] = useState(false);
  const [activeCard, setActiveCard] = useState(false);
  const [id, setId] = useState('');

  const socket = useContext(SocketContext);

  const handleMoreClick = () => {
    setActiveCard(true);
    setBudget(budget);
    setId(budget._id);
  };

  const closeOption = () => {
    setActiveCard(false);
  };

  const handleDeleteBudget = () => {
    socket.emit('deleteBudget', id);
  };

  const handleColor = (color) => {
    const payload = {
      id,
      color,
    };

    socket.emit('color', payload);
  };

  return (
    <>
      <CardWrap
        active={activeCard}
        onMouseEnter={() => setMore(true)}
        onMouseLeave={() => setMore(false)}
        style={{ background: budget?.color }}
        widthColor={budget.color && true}
      >
        <CardInfo>
          <div className="name">{budget.name}</div>
          <div className="total">${budget.total.toLocaleString()}</div>
        </CardInfo>
        <CardMore visible={more}>
          <div className="more-icon" onClick={handleMoreClick}>
            <EllipsisVerticalIcon />
          </div>
        </CardMore>
      </CardWrap>
      <Option
        visible={activeCard}
        close={closeOption}
        showEdit={showEdit}
        del={handleDeleteBudget}
        handleColor={handleColor}
        sltColor={budget.color}
      />
    </>
  );
};

const CardWrap = styled.div`
  background-color: ${(props) => (props.active ? '#999' : '#e5e5e5')};
  color: ${(props) => (props.widthColor ? '#fff' : '#333')};
  border: 1px solid transparent;
  border-radius: 5px;
  width: 100%;

  svg {
    fill: ${(props) => (props.widthColor ? '#fff' : '#333')};
  }

  :hover {
    border: 1px solid #ccc;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const CardInfo = styled.div`
  padding: 20px;
  .name {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
  }

  .total {
    font-weight: 600;
  }
`;

const CardMore = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};

  .more-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    :hover {
      background-color: #ccc;
    }
  }
  svg {
    width: 16px;
  }
`;

export default Card;

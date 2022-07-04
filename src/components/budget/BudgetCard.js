import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { EllipsisHorizontalIcon } from '../icons';
import BudgetCardOption from './BudgetCardOption';

const BudgetCard = ({ budget }) => {
  const navigate = useNavigate();
  const { layout } = useSelector((state) => state.action);
  const [id, setId] = useState('');

  const handleMoreClick = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    setId(id);
    console.log(id);
  };

  const handleCloseMore = () => {
    setId('');
  };

  return (
    <Link to={`/dashboard/budgets/${budget._id}`}>
      <BudgetCardWrap layout={layout}>
        <CardHead>
          <div className="icon" onClick={(e) => handleMoreClick(e, budget._id)}>
            <EllipsisHorizontalIcon />
          </div>
          {id === budget._id && (
            <BudgetCardOption close={handleCloseMore} labels={budget.labels} />
          )}
        </CardHead>
        <CardInfo>
          <div className="budget-name">{budget.name}</div>
          <div className="budget-total">
            <span className="cur">&#x20A6;</span>
            {budget.total.toLocaleString()}
          </div>
        </CardInfo>
        <CardLabels>
          {budget.labels.map((label) => (
            <div
              className="label"
              key={label._id}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                navigate(`/dashboard/labels/${label._id}`);
              }}
            >
              {label.name}
            </div>
          ))}
        </CardLabels>
      </BudgetCardWrap>
    </Link>
  );
};

const BudgetCardWrap = styled.div`
  background-color: ${(props) => props.theme.colors.card_color1};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: 5px;
  margin-bottom: ${(props) => (props.layout === 'list' ? '20px' : '0')};
  height: 190px;
`;

const CardInfo = styled.div`
  padding: 20px;
  padding-top: 0;

  .budget-name {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .budget-total {
    font-size: 20px;
    opacity: 0.5;
  }

  .cur {
    font-size: 14px;
  }
`;

const CardHead = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: flex-end;
  position: relative;

  .icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }

    svg {
      width: 18px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }
`;

const CardLabels = styled.div`
  display: flex;
  padding: 10px 20px;

  .label {
    font-size: 12px;
    color: ${(props) => props.theme.colors.text_color2};
    margin-right: 3px;
    border: 1px solid ${(props) => props.theme.colors.border_color1};
    padding: 5px 10px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default BudgetCard;

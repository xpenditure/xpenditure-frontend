import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BudgetCardOption from './BudgetCardOption';
import { EllipsisHorizontalIcon } from '../icons';
import { setBudget } from '../../features/budgetSlice';

const BudgetCard = ({ budget }) => {
  const { layout } = useSelector((state) => state.action);
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const reduceWord = () => {
    return budget.name.length > 30
      ? budget.name.slice(0, 30) + '...'
      : budget.name;
  };

  const balanace = () => {
    let funds = budget?.funds;
    let expenses = budget?.expenses;

    return (
      funds.reduce((a, b) => a + b.total, 0) +
      budget.total -
      expenses.reduce((a, b) => a + b.total, 0)
    );
  };

  const checkLayout = () => {
    return layout === 'grid' ? budget.labels.slice(0, 3) : budget.labels;
  };

  return (
    <BudgetCardWrap layout={layout}>
      <CardHead>
        <div
          className="icon"
          onClick={() => {
            dispatch(setBudget(budget));
            setId(budget._id);
          }}
        >
          <EllipsisHorizontalIcon />
        </div>
        {id === budget._id && (
          <BudgetCardOption
            close={() => {
              setId('');
            }}
            budget={budget}
          />
        )}
      </CardHead>
      <CardInfo>
        <Link to={`/dashboard/budgets/${budget._id}`}>
          <div className="budget-name">{reduceWord()}</div>
        </Link>

        <div className="budget-total">
          <span className="cur">$</span>
          {balanace().toLocaleString()}
        </div>
      </CardInfo>
      <CardLabels>
        {checkLayout().map((label) => (
          <Link
            to={`/dashboard/labels/${label._id}`}
            className="label"
            key={label._id}
          >
            {label.name}
          </Link>
        ))}
        {layout === 'grid' && budget.labels.length > 3 ? (
          <div className="label num">+{budget.labels.length - 3}</div>
        ) : (
          ''
        )}
      </CardLabels>
    </BudgetCardWrap>
  );
};

const BudgetCardWrap = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: 5px;
  margin-bottom: ${(props) => (props.layout === 'list' ? '20px' : '0')};
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  padding-top: 0;
  height: 100px;

  .budget-name {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .budget-total {
    font-size: 20px;
    opacity: 0.5;
  }

  a {
    display: inline-flex;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text_color2};

    :hover {
      color: #58a6ff;
    }
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
    cursor: pointer;

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
  flex-wrap: wrap;
  overflow: ellipsis;
  white-space: wrap;
  width: 100%;
  padding: 10px 20px;

  .label {
    text-decoration: none;
    font-size: 10px;
    color: ${(props) => props.theme.colors.text_color2};
    margin-right: 3px;
    border: 1px solid ${(props) => props.theme.colors.border_color1};
    padding: 3px 8px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  .num {
    font-weight: 600;
    cursor: pointer;
  }
`;

export default BudgetCard;

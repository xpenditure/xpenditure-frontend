import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BudgetCard = ({ budget }) => {
  const { layout } = useSelector((state) => state.action);

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
      <CardInfo>
        <Link to={`/dashboard/budgets/${budget._id}`}>
          <div className="budget-name">{budget.name}</div>
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
  padding: 20px;
`;

const CardInfo = styled.div`
  margin-bottom: 20px;
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

const CardLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: ellipsis;
  white-space: wrap;
  width: 100%;

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

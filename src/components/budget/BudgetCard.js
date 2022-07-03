import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EllipsisHorizontalIcon } from '../icons';

const BudgetCard = ({ budget }) => {
  return (
    <Link to={`/dashboard/budgets/${budget._id}`}>
      <BudgetCardWrap>
        <CardHead>
          <div className="icon">
            <EllipsisHorizontalIcon />
          </div>
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
            <div className="label" key={label._id}>
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
      width: 15px;
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

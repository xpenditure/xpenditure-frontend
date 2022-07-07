import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ChartDownIcon,
  ChartUpIcon,
  EllipsisHorizontalIcon,
  ShoppingBagIcon,
  TrashIcon,
} from '../icons';
import More from '../widgets/More';
import { ButtonPrimary, IconLg } from '../../styles/DefaultStyles';
import BudgetCardOption from './BudgetCardOption';

const BudgetData = ({ budget, budgetId }) => {
  const [activeMore, setActiveMore] = useState(false);

  const close = () => {
    setActiveMore(false);
  };

  return (
    <BudgetDataWrap>
      <BalSect>
        <div className="bal">
          <p>Your balance</p>
          <div className="bal-text">
            <span>$</span>
            {budget?.total?.toLocaleString()}
          </div>
        </div>
        <div className="bal-action">
          <ButtonPrimary>Add funds</ButtonPrimary>
          <div className="menu">
            <IconLg className="ellipsis" onClick={() => setActiveMore(true)}>
              <EllipsisHorizontalIcon />
            </IconLg>
            {activeMore && (
              <BudgetCardOption
                close={close}
                labels={budget.labels}
                budgetId={budgetId}
                budget={budget}
              />
            )}
          </div>
        </div>
      </BalSect>
      <SpendSect>
        <div className="spend-info">
          <div className="spend-icon">
            <ChartUpIcon />
          </div>
          <div className="spend-text">
            <p className="spend-name">Total earnings</p>
            <p>$20,894.30</p>
          </div>
        </div>
        <div className="spend-info">
          <div className="spend-icon">
            <ChartDownIcon />
          </div>
          <div className="spend-text">
            <p className="spend-name">Total spendings</p>
            <span>$</span>
            32,000,000
          </div>
        </div>
        <div className="spend-info">
          <div className="spend-icon">
            <ShoppingBagIcon />
          </div>
          <div className="spend-text">
            <p className="spend-name">Spending goal</p>
            <p>$20,894.30</p>
          </div>
        </div>
      </SpendSect>
    </BudgetDataWrap>
  );
};

const BudgetDataWrap = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
`;
const BalSect = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text_color2};
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  .bal {
    margin-right: 50px;
  }

  .bal-action {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bal-text {
    font-size: 30px;
  }

  .menu {
    display: flex;
    position: relative;
    margin-left: 20px;
  }
`;
const SpendSect = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text_color2};
  background-color: ${(props) => props.theme.colors.card_color1};

  .spend-info {
    display: flex;
    align-items: center;
  }

  .spend-icon {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.input_color1};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 20px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }

  .spend-text {
    margin-left: 20px;
  }

  .spend-name {
    font-size: 14px;
    margin-bottom: 5px;
    color: darkgray;
  }
`;

export default BudgetData;

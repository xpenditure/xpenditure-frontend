import React, { useEffect, useState } from 'react';
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
import AddFund from '../widgets/AddFund';

const BudgetData = ({ budget, budgetId, funds, expenses }) => {
  const [activeMore, setActiveMore] = useState(false);
  const [activeFund, setActiveFund] = useState(false);

  const close = () => {
    setActiveMore(false);
  };

  const showAddFund = () => {
    setActiveFund(true);
  };

  const closeAddFund = () => {
    setActiveFund(false);
  };

  const balance = () => {
    return parseFloat(totalEarnings()) - parseFloat(totalExpenses());
  };

  const totalEarnings = () => {
    return funds?.reduce((a, b) => a + b.total, 0) + budget.total;
  };

  const totalExpenses = () => {
    return expenses?.reduce((a, b) => a + b.total, 0) || 0;
  };

  return (
    <>
      <BudgetDataWrap>
        <BalSect>
          <div className="bal">
            <p>Your balance</p>
            <div className="bal-text">
              <span>$</span>
              {balance().toLocaleString()}
            </div>
          </div>
          <div className="bal-action">
            <ButtonPrimary onClick={showAddFund}>Add funds</ButtonPrimary>
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
              <p>${totalEarnings().toLocaleString()}</p>
            </div>
          </div>
          <div className="spend-info">
            <div className="spend-icon">
              <ChartDownIcon />
            </div>
            <div className="spend-text">
              <p className="spend-name">Total expenses</p>
              <span>$</span>
              {totalExpenses() === 0
                ? '0.00'
                : totalExpenses().toLocaleString()}
            </div>
          </div>
          <div className="spend-info">
            <div className="spend-icon">
              <ShoppingBagIcon />
            </div>
            <div className="spend-text">
              <p className="spend-name">Budget goal</p>
              <p>$0.00</p>
            </div>
          </div>
        </SpendSect>
      </BudgetDataWrap>
      {activeFund && <AddFund close={closeAddFund} budgetId={budgetId} />}
    </>
  );
};

const BudgetDataWrap = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
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
  background-color: ${(props) => props.theme.colors.secondary};

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

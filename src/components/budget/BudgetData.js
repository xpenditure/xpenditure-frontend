import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  ChartDownIcon,
  ChartUpIcon,
  EllipsisHorizontalIcon,
  ShoppingBagIcon,
} from '../icons';
import { ButtonPrimary, IconLg } from '../../styles/DefaultStyles';
import BudgetCardOption from './BudgetCardOption';
import AddFund from '../widgets/AddFund';
import { IoAddOutline } from 'react-icons/io5';

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
        <div className="left">
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
                <IconLg
                  className="ellipsis"
                  onClick={() => setActiveMore(true)}
                >
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
            <div className="goal" title="Add Goal">
              <IoAddOutline />
            </div>
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
        </div>
        <div className="right">
          <Summary>
            <div className="style-box"></div>

            <div className="summary box">
              <p className="title">Summary:</p>
              <p>{budget?.summary || <i>No summary</i>}</p>
            </div>

            <div className="labels box">
              <p className="title">Labels:</p>
              <p className="labels">
                {budget?.labels.length > 0 ? (
                  budget.labels.map((label) => (
                    <span key={label._id} className="label">
                      {label.name}
                    </span>
                  ))
                ) : (
                  <i>No label</i>
                )}
              </p>
            </div>
          </Summary>
        </div>
      </BudgetDataWrap>
      {activeFund && <AddFund close={closeAddFund} budgetId={budgetId} />}
    </>
  );
};

const BudgetDataWrap = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  justify-content: space-between;

  .left {
    width: 60%;
  }

  .right {
    width: 35%;
  }
`;
const BalSect = styled.div`
  display: flex;
  flex-direction: row;
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
  padding: 30px 50px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text_color2};
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 10px;
  position: relative;

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
    font-size: 25px;
  }

  .spend-name {
    font-size: 14px;
    margin-bottom: 5px;
    color: darkgray;
  }

  .goal {
    position: absolute;
    right: 50px;
    bottom: -25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    border: 1px solid ${(props) => props.theme.colors.border_color1};
    cursor: pointer;
  }
`;

const Summary = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: 20px;
  padding: 20px;
  position: relative;
  /* z-index: 10; */
  background-color: ${(props) => props.theme.colors.primary};

  .style-box {
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    border: 1px solid inherit;
    position: absolute;
    border-radius: 10px;
    border-top: none;
  }

  .summary {
    margin-bottom: 20px;
  }

  .title {
    font-size: 14px;
    margin-bottom: 5px;
    color: darkgray;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.text_color2};
  }

  .labels {
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
  }
`;

export default BudgetData;

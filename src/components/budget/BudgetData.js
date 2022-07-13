import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IoWalletOutline,
  IoBagCheckOutline,
  IoReceiptOutline,
  IoCardOutline,
  IoChatboxOutline,
  IoBookmarksOutline,
  IoEllipsisHorizontalSharp,
} from 'react-icons/io5';
import { Button, ButtonPrimary, ButtonWrap } from '../../styles/DefaultStyles';
import BudgetCardOption from './BudgetCardOption';
import AddFund from '../widgets/AddFund';
import AddBudgetGoal from '../widgets/AddBudgetGoal';
import More from '../widgets/More';
import LineChart from '../charts/LineChart';
import PieChart from '../charts/PieChart';

const BudgetData = ({ budget, budgetId, funds, expenses }) => {
  const [activeMore, setActiveMore] = useState(false);
  const [activeFund, setActiveFund] = useState(false);
  const [activeGoal, setActiveGoal] = useState(false);
  const [goalMore, setGoalMore] = useState(false);

  const calcBalance = () => {
    return parseFloat(calcIncome()) - parseFloat(calcSpendings());
  };

  const calcIncome = () => {
    return funds?.reduce((a, b) => a + b.total, 0) + budget.total;
  };

  const calcSpendings = () => {
    return expenses?.reduce((a, b) => a + b.total, 0) || '0.00';
  };

  const closeOption = () => {
    setActiveMore(false);
  };

  const closeAddFund = () => {
    setActiveFund(false);
  };

  const closeAddGoal = () => {
    setActiveGoal(false);
  };

  return (
    <>
      <BudgetDataWrap>
        <DataTop>
          <DataCards>
            <div className="data-card balance">
              <div className="card-icon">
                <IoWalletOutline />
              </div>
              <div className="card-details">
                <div className="card-name">Balance</div>
                <div className="card-total">
                  ${calcBalance().toLocaleString()}
                </div>
              </div>
            </div>
            <div className="data-card">
              <div className="card-icon">
                <IoCardOutline />
              </div>
              <div className="card-details">
                <div className="card-name">Income</div>
                <div className="card-total">
                  ${calcIncome().toLocaleString()}
                </div>
              </div>
            </div>
            <div className="data-card">
              <div className="card-icon">
                <IoReceiptOutline />
              </div>
              <div className="card-details">
                <div className="card-name">Spending</div>
                <div className="card-total">
                  ${calcSpendings().toLocaleString()}
                </div>
              </div>
            </div>
            <div className="data-card">
              <div className="card-icon">
                <IoBagCheckOutline />
              </div>
              <div className="card-details">
                <div class="icon goal-icon" onClick={() => setGoalMore(true)}>
                  <IoEllipsisHorizontalSharp />
                  <More visible={goalMore} close={() => setGoalMore(false)}>
                    <div className="link">
                      <p>Edit goal</p>
                      <p>Remove goal</p>
                    </div>
                  </More>
                </div>
                <div className="card-name">Goal</div>
                <div className="card-total">
                  ${budget.goal > 0 ? budget.goal.toLocaleString() : '0.00'}
                </div>
              </div>
            </div>
          </DataCards>
          <DataSummary>
            <div className="sum-top">
              <div className="sum-top-left">
                <div className="icon">
                  <IoChatboxOutline />
                </div>
                <div className="icon">
                  <IoBookmarksOutline />
                </div>
              </div>
              <div className="sum-top-right">
                <div
                  className="icon ellipsis"
                  onClick={() => setActiveMore(true)}
                >
                  <IoEllipsisHorizontalSharp />
                  {activeMore && (
                    <BudgetCardOption
                      close={closeOption}
                      labels={budget.labels}
                      budget={budget}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="sum-bottom">
              <div className="sum-bal">
                <p>Your balance</p>
                <h3>${calcBalance().toLocaleString()}</h3>
              </div>
              <div className="sum-btn">
                {budget.goal <= 0 && (
                  <ButtonWrap>
                    <Button onClick={() => setActiveGoal(true)}>
                      Add goal
                    </Button>
                  </ButtonWrap>
                )}
                <ButtonWrap>
                  <ButtonPrimary onClick={() => setActiveFund(true)}>
                    Top up
                  </ButtonPrimary>
                </ButtonWrap>
              </div>
            </div>
          </DataSummary>
        </DataTop>
        <DataBottom>
          <DataGraph>
            {expenses?.length > 0 && (
              <LineChart funds={funds} expenses={expenses} />
            )}
          </DataGraph>
          <DataChart>
            <PieChart
              income={calcIncome()}
              spendings={calcSpendings()}
              balance={calcBalance()}
            />
          </DataChart>
        </DataBottom>
      </BudgetDataWrap>
      {activeFund && <AddFund close={closeAddFund} budgetId={budgetId} />}
      {activeGoal && <AddBudgetGoal close={closeAddGoal} budget={budget} />}
    </>
  );
};

const BudgetDataWrap = styled.div`
  width: 100%;
  margin-bottom: 50px;

  .icon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: ${(props) => props.theme.colors.text_color2};
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }
  }

  .goal-icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
const DataCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  width: 63%;

  .data-card {
    height: 170px;
    background-color: ${(props) => props.theme.colors.card_color1};
    border-radius: ${(props) => props.theme.reset.border_radius};
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 1px solid ${(props) => props.theme.colors.border_color1};
    position: relative;

    :hover {
      box-shadow: ${(props) => props.theme.colors.shadow1};
    }
  }

  .card-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.hover_color1};
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: ${(props) => props.theme.colors.text_color2};
  }

  .card-details {
    display: flex;
    flex-direction: column;

    .card-name {
      color: ${(props) => props.theme.colors.text_color2};
      font-size: 14px;
      margin-bottom: 8px;
    }

    .card-total {
      font-size: 18px;
      color: ${(props) => props.theme.colors.text_color1};
    }
  }
`;

const DataSummary = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
  padding: 20px;
  height: 170px;

  .ellipsis {
    position: relative;
  }

  .sum-top,
  .sum-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .sum-top-left {
    display: flex;
  }
  .sum-btn {
    display: flex;

    div:last-child {
      margin-left: 20px;
    }
  }
  .sum-bal {
    display: flex;
    flex-direction: column;
    p {
      color: ${(props) => props.theme.colors.text_color2};
      margin-bottom: 10px;
    }

    h3 {
      color: ${(props) => props.theme.colors.text_color1};
      font-size: 25px;
    }
  }
`;

const DataTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: flex-start;
`;
const DataBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DataChart = styled.div`
  width: 30%;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DataGraph = styled.div`
  width: 68%;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
`;

export default BudgetData;

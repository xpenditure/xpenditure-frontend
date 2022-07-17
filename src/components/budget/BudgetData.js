import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IoWalletOutline,
  IoBagCheckOutline,
  IoReceiptOutline,
  IoCardOutline,
  IoEllipsisHorizontalSharp,
  IoAddSharp,
} from 'react-icons/io5';

import AddFund from '../widgets/AddFund';
import AddBudgetGoal from '../widgets/AddBudgetGoal';
import More from '../widgets/More';
import LineChart from '../charts/LineChart';
import PieChart from '../charts/PieChart';
import NoTransaction from '../transaction/NoTransaction';
import BudgetCardOption from './BudgetCardOption';
import { ButtonPrimary } from '../../styles/DefaultStyles';

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

  return (
    <>
      <BudgetDataWrap>
        <DataTop>
          <DataCards>
            <div className="data-card balance">
              <ButtonPrimary
                onClick={() => setActiveFund(true)}
                className="top-up"
              >
                <span>Top up</span>
                <i>
                  <IoAddSharp />
                </i>
              </ButtonPrimary>
              <div class="icon card-more-icon">
                <IoEllipsisHorizontalSharp
                  onClick={() => setActiveMore(true)}
                />
                {activeMore && (
                  <BudgetCardOption
                    budget={budget}
                    close={() => setActiveMore(false)}
                  />
                )}
              </div>
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
            <div className="data-card income">
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
            <div className="data-card spending">
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
            <div className="data-card goal">
              {budget.goal === 0 && (
                <button
                  className="add-goal"
                  onClick={() => setActiveGoal(true)}
                >
                  <IoAddSharp />
                </button>
              )}
              <div className="card-icon">
                <IoBagCheckOutline />
              </div>
              <div className="card-details">
                <div
                  class="icon card-more-icon"
                  onClick={() => setGoalMore(true)}
                >
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
        </DataTop>
        <DataBottom>
          <DataGraph>
            {expenses?.length > 0 ? (
              <LineChart funds={funds} expenses={expenses} />
            ) : (
              <NoTransaction />
            )}
          </DataGraph>
          <DataChart>
            {expenses?.length > 0 ? (
              <PieChart
                income={calcIncome()}
                spendings={calcSpendings()}
                balance={calcBalance()}
              />
            ) : (
              <NoTransaction />
            )}
          </DataChart>
        </DataBottom>
      </BudgetDataWrap>
      {activeFund && (
        <AddFund close={() => setActiveFund(false)} budgetId={budgetId} />
      )}
      {activeGoal && (
        <AddBudgetGoal close={() => setActiveGoal(false)} budget={budget} />
      )}
    </>
  );
};

const BudgetDataWrap = styled.div`
  width: 100%;
  margin-bottom: 50px;

  .top-up {
    position: absolute;
    right: 20px;
    bottom: 20px;

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      margin-left: 5px;
    }
  }

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

  .card-more-icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .add-goal {
    display: flex;
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.btn_color_primary};
    border-radius: 50%;
    border: none;
    outline: none;
    font-size: 30px;
    color: ${(props) => props.theme.colors.text_color2};
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
const DataCards = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1.5fr 1fr;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .balance,
    .goal,
    .income,
    .spending {
      width: 100%;
    }
  }

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

const DataTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: flex-start;
`;
const DataBottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const DataChart = styled.div`
  width: 30%;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const DataGraph = styled.div`
  width: 68%;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};

  @media (max-width: 1000px) {
    display: none;
    width: 100%;
    margin-bottom: 30px;
  }
`;

export default BudgetData;

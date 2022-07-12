import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IoWalletOutline,
  IoBagCheckOutline,
  IoReceiptOutline,
  IoCardOutline,
  IoChatboxOutline,
  IoBookmarksOutline,
  IoEllipsisHorizontalOutline,
} from 'react-icons/io5';
import { ButtonPrimary, ButtonWrap } from '../../styles/DefaultStyles';
import BudgetCardOption from './BudgetCardOption';

const BudgetData = ({ budget, budgetId, funds, expenses }) => {
  const [activeMore, setActiveMore] = useState(false);
  const [activeFund, setActiveFund] = useState(false);
  const [activeGoal, setActiveGoal] = useState(false);

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
                <p>Balance</p>
                <h3>${calcBalance().toLocaleString()}</h3>
              </div>
            </div>
            <div className="data-card">
              <div className="card-icon">
                <IoCardOutline />
              </div>
              <div className="card-details">
                <p>Income</p>
                <h3>${calcIncome().toLocaleString()}</h3>
              </div>
            </div>
            <div className="data-card">
              <div className="card-icon">
                <IoReceiptOutline />
              </div>
              <div className="card-details">
                <p>Spending</p>
                <h3>${calcSpendings().toLocaleString()}</h3>
              </div>
            </div>
            <div className="data-card">
              <div className="card-icon">
                <IoBagCheckOutline />
              </div>
              <div className="card-details">
                <p>Goal</p>
                <h3>$0.00</h3>
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
                  <IoEllipsisHorizontalOutline />
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
              <ButtonWrap>
                <ButtonPrimary>Top up</ButtonPrimary>
              </ButtonWrap>
            </div>
          </DataSummary>
        </DataTop>
        <DataBottom>
          <DataGraph></DataGraph>
          <DataChart></DataChart>
        </DataBottom>
      </BudgetDataWrap>
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
    p {
      color: ${(props) => props.theme.colors.text_color2};
      font-size: 12px;
      margin-bottom: 8px;
    }

    h3 {
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
`;
const DataBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DataChart = styled.div`
  width: 30%;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
`;
const DataGraph = styled.div`
  width: 68%;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
  height: 350px;
`;

export default BudgetData;

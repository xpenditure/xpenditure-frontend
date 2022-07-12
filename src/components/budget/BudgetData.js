import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IoWalletOutline,
  IoBagCheckOutline,
  IoReceiptOutline,
  IoCardOutline,
} from 'react-icons/io5';

const BudgetData = ({ budget, budgetId, funds, expenses }) => {
  const [activeMore, setActiveMore] = useState(false);
  const [activeFund, setActiveFund] = useState(false);
  const [activeGoal, setActiveGoal] = useState(false);

  return (
    <>
      <BudgetDataWrap>
        <DataTop>
          <DataCards>
            <div className="data-card">
              <div className="card-icon">
                <IoWalletOutline />
              </div>
              <div className="card-details">
                <p>Balance</p>
                <h3>$209,900.00</h3>
              </div>
            </div>
            <div className="data-card">
              <div className="card-icon">
                <IoCardOutline />
              </div>
              <div className="card-details">
                <p>Income</p>
                <h3>$409,900.00</h3>
              </div>
            </div>
            <div className="data-card">
              <div className="card-icon">
                <IoReceiptOutline />
              </div>
              <div className="card-details">
                <p>Spending</p>
                <h3>$200,000.00</h3>
              </div>
            </div>
            <div className="data-card">
              <div className="card-icon">
                <IoBagCheckOutline />
              </div>
              <div className="card-details">
                <p>Goal</p>
                <h3>$980,900.00</h3>
              </div>
            </div>
          </DataCards>
          <DataSummary>
            <div className="sum-top"></div>
            <div className="sum-bottom"></div>
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
  border: 1px solid blue;
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
  border: 1px solid blue;
`;
const DataGraph = styled.div`
  width: 68%;
  border: 1px solid yellow;
  height: 350px;
`;

export default BudgetData;

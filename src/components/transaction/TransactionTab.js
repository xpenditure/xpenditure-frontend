import React from 'react';
import styled from 'styled-components';
import { IoCardOutline, IoCashOutline } from 'react-icons/io5';

const TransactionTab = ({ activeTab, setActiveTab }) => {
  return (
    <TabWrap>
      <div
        className={activeTab === 'expenses' ? 'active tab' : 'tab'}
        onClick={() => setActiveTab('expenses')}
      >
        <i>
          <IoCashOutline />
        </i>
        Expenses
      </div>
      <div
        className={activeTab === 'funds' ? 'active tab' : 'tab'}
        onClick={() => setActiveTab('funds')}
      >
        <i>
          <IoCardOutline />
        </i>
        Funds
      </div>
    </TabWrap>
  );
};

const TabWrap = styled.div`
  display: flex;
  margin-bottom: 10px;

  .active::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: orangered;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${(props) => props.theme.reset.border_radius};
    color: ${(props) => props.theme.colors.text_color2};
    padding: 5px 10px;
    cursor: pointer;
    position: relative;
    transition: all 300ms;
    font-size: 14px;

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
      font-size: 22px;
    }
  }
`;

export default TransactionTab;

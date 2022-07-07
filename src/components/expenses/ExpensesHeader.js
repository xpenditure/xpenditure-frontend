import React, { useState } from 'react';
import { ButtonPrimary } from '../../styles/DefaultStyles';
import AddExpenses from '../widgets/AddExpenses';
import styled from 'styled-components';

const ExpensesHeader = ({ budgetId }) => {
  const [active, setActive] = useState(false);

  const close = () => {
    setActive(false);
  };

  return (
    <>
      <ExpensesHeaderWrap>
        <div className="title">Transactions</div>
        <Inner>
          <div className="ehleft"></div>
          <div className="ehright">
            <ButtonPrimary onClick={() => setActive(true)}>
              New expenses
            </ButtonPrimary>
          </div>
        </Inner>
      </ExpensesHeaderWrap>
      {active && <AddExpenses close={close} budgetId={budgetId} />}
    </>
  );
};

const ExpensesHeaderWrap = styled.div`
  .title {
    font-size: 20px;
    color: ${(props) => props.theme.colors.text_color2};
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ExpensesHeader;

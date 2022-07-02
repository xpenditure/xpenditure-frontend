import React from 'react';
import styled from 'styled-components';
import BudgetCard from './BudgetCard';

const BudgetList = ({ budgets }) => {
  return (
    <BudgetsWrap>
      {budgets.map((budget) => (
        <BudgetCard key={budget._id} budget={budget} />
      ))}
    </BudgetsWrap>
  );
};

const BudgetsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text_color2};
  }
`;

export default BudgetList;

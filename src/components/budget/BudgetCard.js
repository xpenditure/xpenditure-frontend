import React from 'react';
import styled from 'styled-components';

const BudgetCard = ({ budget }) => {
  return (
    <BudgetCardWrap>
      <div>{budget.name}</div>
    </BudgetCardWrap>
  );
};

const BudgetCardWrap = styled.div`
  background-color: ${(props) => props.theme.colors.card_color1};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  padding: 20px;
  border-radius: 5px;
`;

export default BudgetCard;

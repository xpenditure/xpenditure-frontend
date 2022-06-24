import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/DefaultStyles';
import Card from './Card';

const BudgetList = ({ budgets, setBudget, showEdit }) => {
  return (
    <BudgetListWrap>
      <Container>
        <BudgetListInner>
          {budgets.map((budget) => (
            <Card
              budget={budget}
              key={budget._id}
              setBudget={setBudget}
              showEdit={showEdit}
            />
          ))}
        </BudgetListInner>
      </Container>
    </BudgetListWrap>
  );
};

const BudgetListWrap = styled.div`
  margin-top: 100px;
`;

const BudgetListInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;

export default BudgetList;

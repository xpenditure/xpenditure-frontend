import React from 'react';
import styled from 'styled-components';
import BudgetCard from './BudgetCard';
import { useSelector } from 'react-redux';

const BudgetList = ({ budgets }) => {
  const { layout } = useSelector((state) => state.action);

  return (
    <BudgetsWrap layout={layout}>
      {budgets.map((budget) => (
        <BudgetCard layout={layout} key={budget._id} budget={budget} />
      ))}
    </BudgetsWrap>
  );
};

const BudgetsWrap = styled.div`
  display: ${(props) => props.layout};
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  width: ${(props) => (props.layout === 'list' ? '600px' : 'auto')};
  margin: ${(props) => (props.layout === 'list' ? 'auto' : '0')};
`;

export default BudgetList;

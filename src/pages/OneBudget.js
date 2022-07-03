import React from 'react';
import { useParams } from 'react-router-dom';

const OneBudget = () => {
  const { budgetId } = useParams();
  return <div>{budgetId}</div>;
};

export default OneBudget;

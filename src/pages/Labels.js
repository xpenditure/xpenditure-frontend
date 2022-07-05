import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BudgetList from '../components/budget/BudgetList';
import { useSelector } from 'react-redux';
import { IconLg } from '../styles/DefaultStyles';
import { EditIcon, TrashIcon } from '../components/icons';
import styled from 'styled-components';

const Labels = () => {
  const { labelId } = useParams();
  const [filteredBudgets, setFilteredBudgets] = useState([]);
  const [labelName, setLabelName] = useState('');

  const { budgets } = useSelector((state) => state.budget);

  const filterById = () => {
    let newBudget = [];
    budgets.filter((budget) => {
      budget.labels.map((label) => {
        if (label._id === labelId) {
          setLabelName(label.name);
          newBudget.push(budget);
        }
      });
    });
    setFilteredBudgets(newBudget);
  };

  useEffect(() => {
    filterById();
  }, [budgets, labelId]);

  return (
    <LabelsWrap>
      <div className="header">
        <div className="left">
          <h2>{labelName}</h2>
        </div>
        <div className="right">
          <IconLg>
            <EditIcon />
          </IconLg>
          <IconLg>
            <TrashIcon />
          </IconLg>
        </div>
      </div>
      <BudgetList budgets={filteredBudgets} />
    </LabelsWrap>
  );
};

const LabelsWrap = styled.div`
  .header {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.text_color2};
  }

  .left,
  .right {
    display: flex;
  }

  .left {
  }

  .right {
  }
`;

export default Labels;

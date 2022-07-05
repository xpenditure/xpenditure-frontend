import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import BudgetList from '../components/budget/BudgetList';
import { useDispatch, useSelector } from 'react-redux';
import { IconLg } from '../styles/DefaultStyles';
import { EditIcon, TrashIcon } from '../components/icons';
import styled from 'styled-components';
import { setLabel } from '../features/budgetSlice';

const Labels = () => {
  const { labelId } = useParams();
  const [filteredBudgets, setFilteredBudgets] = useState([]);
  const [labelName, setLabelName] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const { budgets } = useSelector((state) => state.budget);

  const filterById = () => {
    let newBudget = [];
    budgets.filter((budget) => {
      budget.labels.map((label) => {
        if (label._id === labelId) {
          setLabelName(label.name);
          dispatch(setLabel(label));
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
          <Link
            to={`/dashboard/edit/labels/${labelId}`}
            state={{ background: location }}
          >
            <IconLg>
              <EditIcon />
            </IconLg>
          </Link>
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
`;

export default Labels;

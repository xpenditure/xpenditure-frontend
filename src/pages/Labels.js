import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import BudgetList from '../components/budget/BudgetList';
import { useDispatch, useSelector } from 'react-redux';
import { IconLg } from '../styles/DefaultStyles';
import { EditIcon, TrashIcon } from '../components/icons';
import styled from 'styled-components';
import { setLabel } from '../features/budgetSlice';
import { toggleDelLabelModal } from '../features/actionSlice';
import DeleteLabel from '../components/widgets/DeleteLabel';

const Labels = () => {
  const { labelId } = useParams();
  const [filteredBudgets, setFilteredBudgets] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();

  const { budgets, label, labels } = useSelector((state) => state.budget);

  const filterById = () => {
    let newBudget = [];
    budgets.filter((budget) => {
      budget.labels.map((label) => {
        if (label._id === labelId) {
          newBudget.push(budget);
        }
      });
    });
    setFilteredBudgets(newBudget);
  };

  useEffect(() => {
    filterById();
  }, [budgets, labelId]);

  useEffect(() => {
    labels.map((lb) => {
      if (lb._id === labelId) dispatch(setLabel(lb));
    });
  }, [labels, labelId]);

  const handleShowDel = () => {
    dispatch(toggleDelLabelModal(true));
  };

  return (
    <>
      <LabelsWrap>
        <div className="header">
          <div className="left">
            <h2>{label?.name}</h2>
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
            <IconLg onClick={handleShowDel}>
              <TrashIcon />
            </IconLg>
          </div>
        </div>
        <BudgetList budgets={filteredBudgets} />
      </LabelsWrap>
      <DeleteLabel />
    </>
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

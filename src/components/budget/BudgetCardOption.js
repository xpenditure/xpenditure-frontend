import React from 'react';
import More from '../widgets/More';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  toggleAddLabelModal,
  toggleDelBudgetModal,
} from '../../features/actionSlice';
import { setBudget, setBudgetLabels } from '../../features/budgetSlice';
import { ArchiveIcon, EditIcon, LabelIcon, TrashIcon } from '../icons';
import { Link, useLocation } from 'react-router-dom';

const BudgetCardOption = ({ close, labels, budgetId, budget }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLabelAction = () => {
    dispatch(toggleAddLabelModal(true));
    dispatch(setBudgetLabels(labels));
    close();
  };

  const handleEditAction = () => {
    dispatch(setBudgetLabels(labels));
    dispatch(setBudget(budget));
    close();
  };

  const handleDeleteBudget = () => {
    dispatch(setBudget(budget));
    dispatch(toggleDelBudgetModal(true));
    close();
  };

  return (
    <More visible={true} close={close}>
      <Wrap onClick={(e) => e.preventDefault()}>
        <div className="link">
          <p onClick={handleDeleteBudget}>
            <i>
              <TrashIcon />
            </i>
            Delete budget
          </p>
          <p onClick={() => handleLabelAction()}>
            <i>
              <LabelIcon />
            </i>
            {labels.length > 0 ? 'Change labels' : 'Add label'}
          </p>
          <p>
            <i>
              <ArchiveIcon />
            </i>
            Archive
          </p>
          <Link
            to={`/dashboard/edit/budgets/${budgetId}`}
            state={{ background: location }}
            onClick={() => handleEditAction()}
          >
            <i>
              <EditIcon />
            </i>
            Edit budget
          </Link>
        </div>
      </Wrap>
    </More>
  );
};

const Wrap = styled.div``;

export default BudgetCardOption;

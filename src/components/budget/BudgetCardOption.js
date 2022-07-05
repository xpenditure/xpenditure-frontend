import React from 'react';
import More from '../widgets/More';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleAddLabelModal } from '../../features/actionSlice';
import { setBudgetLabels } from '../../features/budgetSlice';

const BudgetCardOption = ({ close, labels, budgetId }) => {
  const dispatch = useDispatch();

  const handleLabelAction = () => {
    dispatch(toggleAddLabelModal(true));
    dispatch(setBudgetLabels(labels));
    close();
  };

  return (
    <More visible={true} close={close}>
      <Wrap onClick={(e) => e.preventDefault()}>
        <div className="link">
          <p>Delete budget</p>
          <p onClick={() => handleLabelAction()}>
            {labels.length > 0 ? 'Change labels' : 'Add label'}
          </p>
        </div>
      </Wrap>
    </More>
  );
};

const Wrap = styled.div``;

export default BudgetCardOption;

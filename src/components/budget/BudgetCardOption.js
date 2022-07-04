import React from 'react';
import More from '../widgets/More';
import styled from 'styled-components';

const BudgetCardOption = ({ close, labels }) => {
  return (
    <More visible={true} close={close}>
      <Wrap onClick={(e) => e.preventDefault()}>
        <div className="link">
          <p>Delete budget</p>
          <p>{labels.length > 0 ? 'Change labels' : 'Add label'}</p>
        </div>
      </Wrap>
    </More>
  );
};

const Wrap = styled.div``;

export default BudgetCardOption;

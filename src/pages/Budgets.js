import React, { useState } from 'react';
import BudgetList from '../components/budget/BudgetList';
import { Link, useLocation } from 'react-router-dom';
import { ButtonPrimary } from '../styles/DefaultStyles';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import More from '../components/widgets/More';
import { CaretDownIcon } from '../components/icons';

const Budgets = () => {
  const location = useLocation();
  const { budgets } = useSelector((state) => state.budget);
  const [active, setActive] = useState(false);

  const close = () => {
    setActive(false);
  };

  return (
    <BudgetsWrap>
      <div className="header">
        <div className="create-new">
          <ButtonPrimary onClick={() => setActive(true)}>
            New
            <div className="icon">
              <CaretDownIcon />
            </div>
          </ButtonPrimary>
          <More visible={active} close={close}>
            <div className="link">
              <Link
                to="new/budget"
                onClick={close}
                state={{ background: location }}
              >
                New budget
              </Link>

              <Link
                to="new/label"
                onClick={close}
                state={{ background: location }}
              >
                New label
              </Link>
            </div>
          </More>
        </div>
      </div>
      <BudgetList budgets={budgets} />
    </BudgetsWrap>
  );
};

const BudgetsWrap = styled.div`
  .header {
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-end;
  }

  .create-new {
    position: relative;
  }
`;

export default Budgets;

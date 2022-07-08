import React, { useState } from 'react';
import styled from 'styled-components';
import More from '../widgets/More';
import { CaretDownIcon } from '../icons';
import { Link, useLocation } from 'react-router-dom';
import { ButtonPrimary } from '../../styles/DefaultStyles';

const CreateBtn = () => {
  const [active, setActive] = useState(false);

  const location = useLocation();

  const close = () => {
    setActive(false);
  };

  return (
    <CreateWrap>
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
    </CreateWrap>
  );
};

const CreateWrap = styled.div`
  margin-right: 20px;
  .create-new {
    position: relative;
  }
`;

export default CreateBtn;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Alert = ({ data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (data && data.message) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  }, [data]);

  return (
    <AlertWrap visible={visible}>
      <div>{data?.message}</div>
    </AlertWrap>
  );
};

const AlertWrap = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  bottom: 20px;
  right: 20px;
  max-width: 400px;
  padding: 20px;
  border-radius: ${(props) => props.theme.reset.border_radius};
  box-shadow: ${(props) => props.theme.colors.shadow1};
  margin-right: ${(props) => (props.visible ? '0' : '-400px')};
  transition: all 300ms linear;
`;

export default Alert;

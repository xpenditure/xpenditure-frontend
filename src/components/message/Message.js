import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Message = ({ msg }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (msg) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  }, [msg]);

  return (
    <MsgWrap visible={visible}>
      <p>{msg}</p>
    </MsgWrap>
  );
};

const MsgWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

export default Message;

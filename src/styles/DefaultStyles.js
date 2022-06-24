import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const TransparentOverlay = styled(Overlay)`
  background-color: transparent;
`;

export const FormWrap = styled.div`
  form {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  label {
    font-size: 14px;
    color: #666;
    margin-bottom: 3px;
  }

  input,
  textarea {
    background-color: #f1f1f1;
    border: 1px solid #999;
    font-weight: 600;
    font-size: 14px;
    outline: none;
    border-radius: 3px;
    color: #555;
    overflow-y: auto;
    padding: 8px 15px;
  }

  input {
    height: 35px;
  }

  textarea {
    height: 100px;
    resize: none;
  }
`;

export const Heading = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 0 20px;
  height: 40px;
  font-weight: 600;
  cursor: pointer;
`;

export const DarkButton = styled(Button)`
  background-color: #222;
  color: #fff;
`;

export const ButtonWrap = styled.div`
  button:last-child {
    margin-left: 20px;
  }
`;

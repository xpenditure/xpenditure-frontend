import styled from 'styled-components';

export const FormWrap = styled.div`
  form {
    display: flex;
    flex-direction: column;
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
  margin-bottom: 10px;

  label {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 3px;
    color: ${(props) => props.theme.colors.text_color2};
  }

  input,
  textarea {
    border: 1px solid ${(props) => props.theme.colors.border_color1};
    border-radius: ${(props) => props.theme.reset.border_radius};
    outline: none;
    padding: 5px 12px;
    line-height: 20px;
    vertical-align: middle;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text_color1};
    background-color: ${(props) => props.theme.colors.input_color1};

    :focus {
      border-color: #58a6ff;
      outline: #58a6ff;
    }
  }

  textarea {
    min-height: 100px;
    max-height: 200px;
    resize: vertical;
  }

  p {
    font-size: 12px;
    margin-top: 5px;
    color: ${(props) => props.theme.colors.text_color2};
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
  }

  p {
    font-size: 14px;
  }
`;

export const Line = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.border_color1};
  height: 1px;
`;

export const AddWrap = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const AddNav = styled.div`
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border_color1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const AddMain = styled.div`
  padding: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 5px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 14px;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  border: 1px solid;
  color: ${(props) => props.theme.colors.text_color_default};
  line-height: 20px;
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${(props) => props.theme.colors.btn_color_primary};
  border-color: ${(props) => props.theme.colors.btn_primary_border};

  :hover {
    background-color: ${(props) => props.theme.colors.btn_color_primary_hover};
  }
`;
export const ButtonDark = styled(Button)``;

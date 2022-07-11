import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
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
  select,
  textarea {
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.border_color1};
    border-radius: ${(props) => props.theme.reset.border_radius};
    outline: none;
    padding: 5px 12px;
    line-height: 20px;
    vertical-align: middle;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text_color2};
    background-color: ${(props) => props.theme.colors.input_color1};

    :focus {
      border-color: #58a6ff;
      outline: #58a6ff;
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=')
      98% / 4% no-repeat ${(props) => props.theme.colors.input_color1};
    color: ${(props) => props.theme.colors.text_color2};
  }

  textarea {
    min-height: 70px;
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
  width: ${(props) => (props.width ? +props.width + 'px' : '500px')};
  max-width: 100%;
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
  font-weight: 400;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 14px;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  border: 1px solid ${(props) => props.theme.colors.btn_border_color_default};
  color: ${(props) => props.theme.colors.btn_text_color};
  line-height: 20px;
  width: ${(props) => (props.fill ? '100%' : 'auto')};
  background-color: ${(props) => props.theme.colors.btn_color_default};
  transition: all 300ms;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
      fill: ${(props) => props.theme.colors.btn_text_color};
    }
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${(props) => props.theme.colors.btn_color_primary};
  border-color: ${(props) => props.theme.colors.btn_primary_border};
  color: #fff;

  :hover {
    background-color: ${(props) => props.theme.colors.btn_color_primary_hover};
  }
`;
export const ButtonDark = styled(Button)``;
export const ButtonDanger = styled(Button)`
  color: ${(props) => props.theme.colors.danger_color1};

  :hover {
    border-color: ${(props) => props.theme.colors.danger_border_color};
    background-color: ${(props) => props.theme.colors.danger_color1};
    color: #fff;
  }
`;

export const LabelList = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;

  .active {
    border-color: ${(props) => props.theme.colors.btn_color_primary};
    background-color: ${(props) => props.theme.colors.btn_color_primary};
  }
`;
export const Label = styled.div`
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.colors.border_color1};
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text_color2};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.input_color1};

  :hover {
    border-color: ${(props) => props.theme.colors.btn_color_primary};
  }
`;

export const IconLg = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.hover_color1};
  }

  svg {
    width: 20px;
    fill: ${(props) => props.theme.colors.text_color2};
  }
`;

export const IconSm = styled(IconLg)`
  svg {
    width: 16px;
  }
`;

export const DelInfo = styled.div`
  color: ${(props) => props.theme.colors.text_color2};
  p {
    font-size: 12px;
    margin-bottom: 5px;
    span {
      font-weight: bolder;
    }
  }
`;

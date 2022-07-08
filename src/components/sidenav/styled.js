import styled from 'styled-components';

export const TabList = styled.div`
  display: flex;
  flex-direction: column;

  a.activated {
    position: relative;
    background-color: ${(props) =>
      props.active ? props.theme.colors.hover_color1 : ''};

    ::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 60%;
      background-color: ${(props) => props.theme.colors.btn_color_primary};
      border-radius: 40px;
    }

    .active-icon {
      background-color: ${(props) =>
        !props.active ? props.theme.colors.hover_color1 : ''};
    }
  }

  a,
  .custom {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};

      .more-icon {
        visibility: visible;
      }
    }
  }

  svg {
    fill: ${(props) => props.theme.colors.text_color2};
    width: 20px;
  }
`;
export const TabItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text_color2};
  flex: 1;
  position: relative;
  padding: 5px 0;
`;

export const TabIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0 10px;
`;
export const TabName = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

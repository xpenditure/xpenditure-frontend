import styled from 'styled-components';

export const TabList = styled.div`
  display: flex;
  flex-direction: column;

  .activated {
    position: relative;

    ::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 60%;
      background-color: ${(props) => props.theme.colors.btn_color_primary};
      border-radius: 40px;
      margin-left: 5px;
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
    width: 18px;
  }
`;
export const TabItem = styled.div`
  padding: 0 20px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text_color2};
  flex: 1;
  position: relative;
`;

export const TabIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TabName = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;

export const OLS = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  .tabitem {
    display: flex;
    align-items: center;
  }

  .icon {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .more-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    visibility: hidden;

    :hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    svg {
      width: 18px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text_color_default};
}

::-webkit-scrollbar {
  height: 16px;
  overflow: visible;
  width: 16px;
}

::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  background-clip: padding-box;
  border: solid transparent;
  border-width: 1px 1px 1px 6px;
  min-height: 28px;
  padding: 100px 0 0;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07);
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07);
}

::-webkit-scrollbar-corner {
  background: transparent;
}

::-webkit-scrollbar-track {
  background-clip: padding-box;
  border: solid transparent;
  border-width: 0 0 0 4px;
}

.btn-disabled {
  opacity: .5;
  cursor: not-allowed !important;
  pointer-events: none;
}

.danger {
  color: #ff9191 !important;
}

`;

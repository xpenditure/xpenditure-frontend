import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.4
}

`;

export default GlobalStyles;

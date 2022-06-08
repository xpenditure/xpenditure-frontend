import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './ThemeConfig';

export default ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  const body = <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}></div>;
  }

  return body;
};

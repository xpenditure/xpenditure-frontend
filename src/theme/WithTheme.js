import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './schema';

const WithTheme = ({ children }) => {
  const { mode } = useSelector((state) => state.action);

  const renderThemeMode = () => {
    if (mode === 'light') {
      return light;
    }

    if (mode === 'dark') {
      return dark;
    }
  };

  return <ThemeProvider theme={renderThemeMode()}>{children}</ThemeProvider>;
};

export default WithTheme;

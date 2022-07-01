import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const WithTheme = ({ children }) => {
  const { mode } = useSelector((state) => state.action);
  const { color } = useSelector((state) => state.user.user);

  const light = {
    name: 'Light',
    colors: {
      primary: '#fff',
      secondary: '#',
      card_color1: '#f6f8fa',
      text_color_default: '#222',
      btn_color_primary: '#468737',
      btn_color_primary_hover: '#2ea043',
      shadow1:
        'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
    },
    reset: {
      border_radius: '6px',
    },
  };

  const dark = {
    name: 'Dark',
    colors: {
      input_color1: '#010409',
      primary: '#0d1117',
      secondary: '#161b22',
      card_color1: '#21262d',
      border_color1: '#30363d',
      text_color1: '#f0f6fc',
      text_color2: '#c9d1d9',
      text_color_default: '#fff',
      hover_color1: '#b1bac41f',
      btn_color_primary: color,
      btn_color_primary_hover: color + 'cla',
      btn_primary_border: '#f0f6fc1a',
      shadow1: '0 8px 24px #010409',
    },
    reset: {
      border_radius: '6px',
    },
  };

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

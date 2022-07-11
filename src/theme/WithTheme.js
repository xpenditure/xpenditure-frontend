import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getFromLS } from '../utils/storage';

const WithTheme = ({ children }) => {
  const { color, background } = useSelector((state) => state.user.user);

  const stColor = getFromLS('accent-color') || '#468737';
  const stBg = getFromLS('accent-bg') || 'dim';

  const accentColor = color || stColor;
  const mode = background || stBg;

  const light = {
    name: 'Light',
    colors: {
      input_color1: '#eee',
      primary: '#fff',
      secondary: '#e5e5e5',
      card_color1: '#f6f8fa',
      text_color1: '#444',
      text_color2: '#444',
      border_color1: '#ddd',
      text_color_default: '#222',
      btn_text_color: '#fff',
      btn_color_primary: accentColor,
      btn_color_primary_hover: accentColor + 'cla',
      hover_color1: '#4444441f',
      auth_bg_color: '#fff',
      shadow1:
        'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
    },
    reset: {
      border_radius: '6px',
    },
  };

  const dim = {
    name: 'Dim',
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
      btn_color_primary: accentColor,
      btn_text_color: '#c9d1d9',
      btn_color_primary_hover: accentColor + 'cla',
      btn_primary_border: '#f0f6fc1a',
      shadow1: '0 8px 24px #010409',
      auth_bg_color: '#161b22',
      danger_color1: '#da3633',
      btn_color_default: '#21262d',
      btn_border_color_default: 'rgba(240,246,252,0.1)',
      danger_border_color: '#f85949',
    },
    reset: {
      border_radius: '6px',
    },
  };

  const amoled = {
    name: 'Amoled',
    colors: {
      input_color1: '#111',
      primary: '#000',
      secondary: '#000',
      card_color1: '#000',
      border_color1: '#30363d',
      text_color1: '#f0f6fc',
      text_color2: '#c9d1d9',
      text_color_default: '#fff',
      hover_color1: '#b1bac41f',
      btn_color_primary: accentColor,
      btn_color_default: '#000',
      btn_text_color: '#fff',
      btn_border_color_default: 'rgba(240,246,252,0.2)',
      btn_color_primary_hover: accentColor + 'cla',
      btn_primary_border: '#f0f6fc1a',
      shadow1: '0 8px 24px #f0f6fc1a',
      auth_bg_color: '#000',
      danger_border_color: '#f85949',
      danger_color1: '#da3633',
    },
    reset: {
      border_radius: '6px',
    },
  };

  const renderThemeMode = () => {
    if (mode === 'light') {
      return light;
    }

    if (mode === 'dim') {
      return dim;
    }

    if (mode === 'amoled') {
      return amoled;
    }

    return light;
  };

  return <ThemeProvider theme={renderThemeMode()}>{children}</ThemeProvider>;
};

export default WithTheme;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { socket, SocketContext } from './context/socket';
import WithTheme from './theme/WithTheme';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { getTokenFromStorage, getUserProfileAsync } from './features/userSlice';
import { getThemeMode } from './features/actionSlice';
import { BrowserRouter as Router } from 'react-router-dom';

store.dispatch(getTokenFromStorage());
store.dispatch(getThemeMode());
store.dispatch(getUserProfileAsync());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <WithTheme>
          <GlobalStyles />
          <Router>
            <App />
          </Router>
        </WithTheme>
      </SocketContext.Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

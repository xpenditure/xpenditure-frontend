import { Provider } from 'react-redux';
import { store } from '../app/store';
import GlobalStyles from '../styles/GlabalStyles';
import ThemeProvider from '../styles/theme/ThemeProvider';
import { getUserInfoFromStorage } from '../features/userSlice';

store.dispatch(getUserInfoFromStorage());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

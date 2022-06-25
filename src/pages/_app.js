import { socket, SocketContext } from '../context/socketContext';
import GlobalStyles from '../style/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import WithTheme from '../theme/WithTheme';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <SocketContext.Provider value={socket}>
          <WithTheme>
            <GlobalStyles />
            <Component {...pageProps} />
          </WithTheme>
        </SocketContext.Provider>
      </Provider>
    </div>
  );
}

export default MyApp;

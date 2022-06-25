import { socket, SocketContext } from '../context/socketContext';
import GlobalStyles from '../style/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from '../app/store';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <SocketContext.Provider value={socket}>
          <GlobalStyles />
          <Component {...pageProps} />
        </SocketContext.Provider>
      </Provider>
    </div>
  );
}

export default MyApp;

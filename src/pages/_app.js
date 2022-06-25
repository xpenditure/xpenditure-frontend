import { socket, SocketContext } from '../context/socketContext';
import GlobalStyles from '../style/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SocketContext.Provider value={socket}>
        <GlobalStyles />
        <Component {...pageProps} />
      </SocketContext.Provider>
    </div>
  );
}

export default MyApp;

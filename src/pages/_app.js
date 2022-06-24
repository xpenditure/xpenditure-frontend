import GlobalStyles from '../styles/GlobalStyles';
import { socket, SocketContext } from '../context/socket';

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

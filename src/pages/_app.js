import GlobalStyles from '../styles/GlobalStyles';
import { socket, SocketContext } from '../context/socket';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SocketContext.Provider value={socket}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </SocketContext.Provider>
    </div>
  );
}

export default MyApp;

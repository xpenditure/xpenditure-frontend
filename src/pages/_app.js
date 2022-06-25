import { socket, SocketContext } from '../context/socketContext';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SocketContext.Provider value={socket}>
        <Component {...pageProps} />
      </SocketContext.Provider>
    </div>
  );
}

export default MyApp;

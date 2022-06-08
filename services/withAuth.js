import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    // check whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const Router = useRouter();

      const token = localStorage.getItem('token');

      // If there is no access token we redirect to "/" page.
      if (!token) {
        Router.replace('/');
        return null;
      }

      // If ther is token we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
    }

    // If we are on a server, return null
    return null;
  };
};

export default withAuth;

import { useRouter } from 'next/router';

const protectedRoute = (WrappedComponent) => {
  return (props) => {
    // check whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const Router = useRouter();

      const token = localStorage.getItem('token');

      // If there is access token we redirect to "/dashboard" page.
      if (token) {
        Router.replace('/dashboard');
        return null;
      }

      // If there is token we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
    }

    // If we are on a server, return null
    return null;
  };
};

export default protectedRoute;

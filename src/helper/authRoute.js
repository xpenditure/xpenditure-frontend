import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ auth, children }) => {
  return auth ? <Navigate to="/dashboard" replace /> : children;
};

export const ProtectedRoute = ({ auth, children }) => {
  return auth ? children : <Navigate to="/auth?tab=login" replace />;
};

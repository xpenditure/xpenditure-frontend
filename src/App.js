import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import { ProtectedRoute, PublicRoute } from './helper/authRoute';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';

function App() {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoute auth={isAuth}>
              <Auth />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute auth={isAuth}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

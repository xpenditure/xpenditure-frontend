import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import { ProtectedRoute, PublicRoute } from './helper/authRoute';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import Home from './pages/Home';

function App() {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <PublicRoute auth={isAuth}>
              <Auth />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute auth={isAuth}>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

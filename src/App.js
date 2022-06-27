import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import { ProtectedRoute, PublicRoute } from './helper/authRoute';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Budgets from './pages/Budgets';
import Trash from './pages/Trash';
import Archive from './pages/Archive';

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
        >
          <Route index element={<Budgets />} />
          <Route path="trash" element={<Trash />} />
          <Route path="archive" element={<Archive />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

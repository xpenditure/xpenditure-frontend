import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import { ProtectedRoute, PublicRoute } from './helper/authRoute';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Budgets from './pages/Budgets';
import Trash from './pages/Trash';
import Archive from './pages/Archive';
import Settings from './components/settings/Settings';
import AddLabel from './components/widgets/AddLabel';
import NotFound from './pages/NotFound';

function App() {
  const { isAuth } = useSelector((state) => state.user);
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<NotFound />} />
        </Route>
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
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/new/label" element={<AddLabel />} />
        </Routes>
      )}
    </>
  );
}

export default App;

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import { ProtectedRoute, PublicRoute } from './helper/authRoute';
import Dashboard from './pages/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import Budgets from './pages/Budgets';
import Archive from './pages/Archive';
import Settings from './components/settings/Settings';
import NewLabel from './components/widgets/NewLabel';
import NewBudget from './components/widgets/NewBudget';
import Labels from './pages/Labels';
import NotFound from './pages/NotFound';
import OneBudget from './pages/OneBudget';
import { useEffect, useContext } from 'react';
import { addBudgets, addLabels } from './features/budgetSlice';
import { SocketContext } from './context/socket';
import EditBudget from './components/widgets/EditBudget';
import EditLabel from './components/widgets/EditLabel';
import Notifications from './pages/Notifications';
import { setUserData } from './features/userSlice';
import Search from './components/search/Search';

function App() {
  const { isAuth } = useSelector((state) => state.user);
  const { labels } = useSelector((state) => state.budget);
  const location = useLocation();
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const background = location.state && location.state.background;

  useEffect(() => {
    // budgets
    socket.emit('fetchBudgets');
    socket.on('fetchBudgets', (data) => {
      console.log('budgets', data);
      dispatch(addBudgets(data));
    });

    // labels
    socket.emit('fetchLabels');
    socket.on('fetchLabels', (data) => {
      console.log('labels', data);
      dispatch(addLabels(data));
    });

    // user profile
    socket.emit('fetchUserProfile');
    socket.on('fetchUserProfile', (data) => {
      console.log('profile', data);
      dispatch(setUserData(data));
    });
  }, []);

  useEffect(() => {
    // When label is updated, we need to fetch budgets
    // with the newly populated labels from the update
    socket.emit('fetchBudgets');
    socket.on('fetchBudgets', (data) => {
      dispatch(addBudgets(data));
    });
  }, [labels]);

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
          <Route path="notifications" element={<Notifications />} />
          <Route path="archive" element={<Archive />} />
          <Route path="labels/:labelId" element={<Labels />} />
          <Route path="budgets/:budgetId" element={<OneBudget />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/dashboard/search" element={<Search />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/new/label" element={<NewLabel />} />
          <Route path="/dashboard/new/budget" element={<NewBudget />} />
          <Route
            path="/dashboard/edit/budgets/:budgetId"
            element={<EditBudget />}
          />
          <Route
            path="/dashboard/edit/labels/:labelId"
            element={<EditLabel />}
          />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      )}
    </>
  );
}

export default App;

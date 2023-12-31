import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux'; // import the useSelector hook
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
// //
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';

import RegisterPage from './pages/registerPage';
import AddEntreprisePage from './pages/Entreprise/AddEntreprisePage';
import ViewVenture from './pages/Entreprise/ViewVenture';

export default function Router() {
  const { user } = useSelector((state) => state.auth);

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: user ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'add-entreprise', element: <AddEntreprisePage /> },
        { path: 'view-venture', element: <ViewVenture /> },
        
        
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

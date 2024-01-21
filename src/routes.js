import { Navigate, useRoutes } from 'react-router-dom';
// import { useSelector } from 'react-redux'; // import the useSelector hook
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
import PlanPage from './pages/plan/PlanPage';
import Entreprise from './pages/Entreprise/Entreprise';
import UserProfile from './pages/UserProfile';
import AddPlanPage from './pages/plan/AddPlanPage';
import ViewPlan from './pages/plan/ViewPlan';
import MesProduits from './pages/Produit/MesProduits';
import MesCommandes from './pages/Commande/MesCommandes';

export default function Router() {
  // const { user } = useSelector((state) => state.auth);

  const routes = useRoutes([
    {
      path: '/dashboard',
      // element: user ? <DashboardLayout /> : <Navigate to="/login" />,
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'profile', element: <UserProfile /> },
        { path: 'add-entreprise', element: <AddEntreprisePage /> },
        { path: 'add-businessPlan', element: <AddPlanPage /> },
        { path: 'view-venture', element: <ViewVenture /> },
        { path: 'view-plan', element: <ViewPlan /> },
        { path: 'plan', element: <PlanPage /> },
        { path: 'entreprise', element: <Entreprise /> },
        { path: 'produits', element: <MesProduits /> },
        { path: 'commandes', element: <MesCommandes /> },
        
        
        
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

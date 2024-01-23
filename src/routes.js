import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux'; // import the useSelector hook

// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

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
import MesClients from './pages/Client/MesClients';
import Rapport from './pages/Rapport/Rappor';
import Evaluation from './pages/Evaluation/Evaluation';

export default function Router() {
  const { user } = useSelector((state) => state.auth);

  const getRoutesBasedOnRole = (role) => {
    switch (role) {
      case 'user':
        return [
          { element: <Navigate to="/dashboard/app" />, index: true },
          { path: 'app', element: <DashboardAppPage /> },
          { path: 'profile', element: <UserProfile /> },
          { path: 'add-entreprise', element: <AddEntreprisePage /> },
          { path: 'add-businessPlan', element: <AddPlanPage /> },
          { path: 'view-venture', element: <ViewVenture /> },
          { path: 'view-plan', element: <ViewPlan /> },
          { path: 'plan', element: <PlanPage /> },
          { path: 'entreprise', element: <Entreprise /> },
        ];
      case 'fournisseur':
        return [
          { element: <Navigate to="/dashboard/app" />, index: true },
          { path: 'produits', element: <MesProduits /> },
          { path: 'commandes', element: <MesCommandes /> },
          { path: 'clients', element: <MesClients /> },
          { path: 'rapport', element: <Rapport /> },
        ];
      case 'coach':
        return [
          { element: <Navigate to="/dashboard/app" />, index: true },
          { path: 'evaluation', element: <Evaluation /> },
          { path: 'produits', element: <MesProduits /> },
          { path: 'commandes', element: <MesCommandes /> },
          { path: 'clients', element: <MesClients /> },
          { path: 'rapport', element: <Rapport /> },
          { path: 'view-venture', element: <ViewVenture /> },
          { path: 'view-plan', element: <ViewPlan /> },
          { path: 'plan', element: <PlanPage /> },
          { path: 'entreprise', element: <Entreprise /> },
        ];
      default:
        return [
          { path: 'app', element: <DashboardAppPage /> },
          { path: 'view-plan', element: <ViewPlan /> },
        ];
    }
  };
  
  

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: getRoutesBasedOnRole(user?.user?.role),
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

// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Accueil',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Plans d’Affaires',
    path: '/dashboard/plan',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Entreprise',
    path: '/dashboard/entreprise',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Evaluation',
    path: '/dashboard/patient',
    icon: icon('ic_analytics'),
  },
  
];

export default navConfig;

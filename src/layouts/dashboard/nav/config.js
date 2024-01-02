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
    title: 'Profile',
    path: '/dashboard/doctor',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Rapport',
    path: '/dashboard/patient',
    icon: icon('ic_analytics'),
  },
  
];

export default navConfig;

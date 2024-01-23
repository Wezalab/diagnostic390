import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';

import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {

  const { user } = useSelector((state) => state.auth);
  
  let data2 = data.filter((val) => val.title === "Accueil");

  if (user?.user?.user?.role === "USER") {
    data2 = data.filter((val) => val.title === "Accueil" || val.title === "Mes plans d’affaires" || val.title ==="Entreprise");
  }else if (user?.user?.user?.role === "PME") {
    data2 = data.filter((val) => val.title === "Accueil" || val.title === "Mes plans d’affaires" || val.title ==="Entreprise");
  }else if (user?.user?.user?.role === "PSDE") {
    data2 = data.filter((val) => val.title === "Accueil" || val.title === "Mes produits/services" || val.title ==="Mes commandes"  || val.title ==="Mes clients"  || val.title ==="Rapports" || val.title ==="Evaluation");
  }else if (user?.user?.user?.role === "FEMME") {
    data2 = data.filter((val) => val.title === "Accueil" || val.title === "Mes plans d’affaires");
  }else {
    data2 = data.filter((val) => val.title === "Accueil");
  }

  console.log("data2", data2);
  console.log("data", data);

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data2.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}

      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}

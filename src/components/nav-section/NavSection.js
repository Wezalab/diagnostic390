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


  if (user?.user?.role === "USER") {
    data2 = data.filter((val) => val.title === "Accueil" && val.title === "plan" && val.title ==="entreprise");
  }

  if (user?.user?.role === "fournisseir") {
    data2 = data.filter((val) => val.title === "Accueil" && val.title === "produits" && val.title ==="commandes"  && val.title ==="clients"  && val.title ==="rapport");
  }

  if (user?.user?.role === "coach") {
    data2 = data.filter((val) => val.title === "evaluation" );
  }


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

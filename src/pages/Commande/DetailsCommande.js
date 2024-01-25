import { Helmet } from 'react-helmet-async';
import React, { useRef, useState } from 'react'

// @mui
import {
  Container, Box, Typography, Link, Card, Divider, Button, ButtonGroup,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import { useLocation } from 'react-router-dom';
import Iconify from '../../components/iconify';

const options = ["En attente", "Traitement", "Terminé", "En pause", "Annulé", "Remboursé", "Echec et poubelle"];
// const options2 = ['pending', 'processing', 'on-hold', 'completed', 'cancelled', 'refunded', 'failed and trash'];


export default function DetailsCommande() {
  const location = useLocation();
  const { commandeObject, customers } = location.state || {};

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [commande, setCommande] = useState(commandeObject && JSON.parse(commandeObject));

  // eslint-disable-next-line no-unused-vars
  const selectedUser = customers.find((cus) => cus.id === commande.customer_id);

  console.log(commande);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title> TRANSFORME | Details de la commande </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }} >
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Link href="/dashboard/commandes" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} variant="subtitle2" underline="hover">
                <Iconify icon={'ion:arrow-back-sharp'} sx={{ mr: 2 }} />
              </Link>
              <div>
                <Typography variant="h6">Commande # N°{commande.number}</Typography>
              </div>
              <Button sx={{ marginLeft: 1 }} color="error" variant="outlined" size="small">{options[selectedIndex]}</Button>

            </Box>
            <Typography sx={{ marginLeft: 5, color: "#aaa" }} variant="caption">{commande.date_created}</Typography>
          </Box>

          <Box>

            <>
              <ButtonGroup color="error" variant='outlined' size="small" ref={anchorRef} aria-label="split button">
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                sx={{
                  zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              // disabled={index === 2}
                              selected={index === selectedIndex}
                              onClick={(event) => handleMenuItemClick(event, index)}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>

            <Button sx={{ marginLeft: 1 }} color="info" variant="contained" startIcon={<LocalPrintshopIcon />} size="small">Bon de commande</Button>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card sx={{ padding: 4 }} >
              <Typography variant="h6">Details</Typography>
              <Box>
                {
                  commande.line_items.map((prod, key) =>
                    <div key={key} >
                      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <img style={{ width: 70, border: '1px solid #EEE', borderRadius: 5, cursor: 'pointer', margin: 8 }} alt={prod?.image?.id} src={prod?.image?.src} />
                          <Box>
                            <Typography variant="subtitle2">{prod.name}</Typography>
                            <Typography variant="caption">{commande.date_created}</Typography>
                          </Box>
                        </Box>
                        <Typography variant="body2">X{prod.quantity}</Typography>
                        <Typography variant="subtitle1">{prod.price} $</Typography>
                      </Box>

                      <Divider />

                    </div>
                  )}
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 2 }} >
                  <Typography variant="subtitle1" sx={{ marginLeft: '70%' }}>Sous total : </Typography>
                  <Typography variant="body1">{commande.total}$</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }} >
                  <Typography sx={{ color: '#a21', marginLeft: '70%' }} variant="subtitle1">Taxe : </Typography>
                  <Typography sx={{ color: '#a21' }} variant="body1">0</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }} >
                  <Typography sx={{ marginLeft: '70%' }} variant="subtitle1">TOTAL : </Typography>
                  <Typography variant="subtitle1">{commande.total}</Typography>
                </Box>
              </Box>
            </Card>

          </Grid>
          <Grid item xs={4}>
            <Card sx={{ padding: 4 }}>
              <Typography variant="h6">Information du client</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                <img style={{ width: 70, border: '1px solid #EEE', borderRadius: 5, cursor: 'pointer', margin: 8 }} alt={selectedUser.avatar_url} src={selectedUser.avatar_url} />
                <Box sx={{ display: 'flex', flexDirection: "column" }}>
                  <Typography variant="subtitle2">{selectedUser.username} {selectedUser?.first_name}</Typography>
                  <Typography variant="caption">{selectedUser?.email}</Typography>
                  <Typography variant="caption">{commande.customer_ip_address}</Typography>
                </Box>
              </Box>
              <Divider />
              <Box sx={{ display: 'flex', flexDirection: "column", marginBottom: 2, marginTop: 2 }}>
                <Typography variant="h6">Expédition</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                  <Typography variant="caption">Expédier par : </Typography>
                  <Typography variant="caption">DHL</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                  <Typography variant="caption">Mode : </Typography>
                  <Typography variant="caption">Standard</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                  <Typography variant="caption">Numéro de suivis : </Typography>
                  <Typography variant="caption">XX91234NSD</Typography>
                </Box>

              </Box>

              <Divider />
              <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2, marginTop: 2 }}>
                <Typography variant="h6">Livraison</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                  <Typography sx={{ marginRight: 1 }} variant="caption">Addresse: </Typography>
                  <Typography variant="caption">{commande.shipping.address_1}, {commande.shipping.address_2}
                    {commande.shipping.city}, {commande.shipping.country}</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                  <Typography variant="caption">Contact: </Typography>
                  <Typography variant="caption">+243 00000000</Typography>
                </Box>

              </Box>

              <Divider />
              <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2, marginTop: 2 }}>
                <Typography variant="h6">Paiement</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                  <Typography variant="caption">Contact: </Typography>
                  <Typography variant="caption">+243 00000000</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", }}>
                  <Typography variant="caption">Mode de payment: </Typography>
                  <Typography variant="caption">COD</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

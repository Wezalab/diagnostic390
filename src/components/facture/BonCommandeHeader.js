import React from "react";

import PropTypes from 'prop-types';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


const BonCommandeHeader = ({ selectedUser, commande, selectedPsd, selectedUser2}) =>

  <Box sx={{marginBottom: 2, display:'none', displayPrint:'block'}} >
    <Typography variant="h4">Bon de commande N# {commande?.number}</Typography>
    <Grid container spacing={4} marginTop={3} marginBottom={2}>
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }} >
        <Typography variant="subtitle1">Emis par:</Typography>
        <Typography variant="caption">{selectedUser?.username} {selectedUser?.first_name}  {selectedUser?.last_name} </Typography>
        <Typography variant="caption">{selectedUser?.billing?.address_1} {selectedUser?.billing?.address_2}</Typography>
        <Typography variant="caption">{selectedUser.email}</Typography>
        <Typography variant="caption">{selectedUser?.billing?.phone}</Typography>
        <Typography variant="caption">{selectedUser2?.mobile}</Typography>
        {/* <Typography variant="caption">site web</Typography> */}
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }} >
        <Typography variant="subtitle1">Destinateur:</Typography>
        <Typography variant="caption">{commande?.store?.shop_name} {commande?.store?.name}</Typography>
        <Typography variant="caption">{commande?.store?.address?.street_1}, {commande?.store?.address?.street_2},
        {commande?.store?.address?.city}, {commande?.store?.address?.country}</Typography>
        <Typography variant="caption">{selectedPsd?.email}</Typography>
        <Typography variant="caption">{selectedPsd?.mobile}</Typography>
        {/* <Typography variant="caption">site web</Typography> */}
      </Grid>
    </Grid>

    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
      <Typography variant="subtitle2">Date de la commande: </Typography>
      <Typography sx={{ marginLeft: 1 }} variant="caption"> {commande.date_created}</Typography>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
      <Typography variant="subtitle2">Modalité de paiement: </Typography>
      <Typography sx={{ marginLeft: 1 }} variant="caption">30 jours </Typography>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
      <Typography variant="subtitle2">Mode de paiement: </Typography>
      <Typography sx={{ marginLeft: 1 }} variant="caption">{commande.payment_method_title?commande.payment_method_title:`Chèque` }</Typography>
    </Box>
  </Box>

BonCommandeHeader.propTypes = {
  commande: PropTypes.object,
  selectedUser: PropTypes.object,
  selectedPsd: PropTypes.object,
  selectedUser2: PropTypes.object,
};

export default BonCommandeHeader;

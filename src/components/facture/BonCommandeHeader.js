import React from "react";

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const BonCommandeHeader = () =>

  <Box sx={{marginBottom: 2, display:'none', displayPrint:'block'}} >
    <Typography variant="h4">Bon de commande</Typography>
    <Grid container spacing={4} marginTop={3} marginBottom={2}>
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }} >
        <Typography variant="subtitle1">Emis par:</Typography>
        <Typography variant="caption">Nom</Typography>
        <Typography variant="caption">Address</Typography>
        <Typography variant="caption">email</Typography>
        <Typography variant="caption">telephone</Typography>
        <Typography variant="caption">site web</Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }} >
        <Typography variant="subtitle1">Destinateur:</Typography>
        <Typography variant="caption">Nom</Typography>
        <Typography variant="caption">Address</Typography>
        <Typography variant="caption">email</Typography>
        <Typography variant="caption">telephone</Typography>
        <Typography variant="caption">site web</Typography>
      </Grid>
    </Grid>

    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
      <Typography variant="subtitle2">Date de la commande: </Typography>
      <Typography sx={{ marginLeft: 1 }} variant="caption"> le 25 janv 2024</Typography>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
      <Typography variant="subtitle2">Modalité de paiement: </Typography>
      <Typography sx={{ marginLeft: 1 }} variant="caption">30 jours </Typography>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
      <Typography variant="subtitle2">Mode de paiement: </Typography>
      <Typography sx={{ marginLeft: 1 }} variant="caption">Chèque</Typography>
    </Box>
  </Box>


export default BonCommandeHeader;

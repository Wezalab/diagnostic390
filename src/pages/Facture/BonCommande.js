import React, { forwardRef } from "react";
import PropTypes from 'prop-types';

import { Box, Divider, Typography } from '@mui/material';
import BonCommandeHeader from "../../components/facture/BonCommandeHeader";

const BonCommande = forwardRef(({commande, selectedUser }, ref) => 

  <Box ref={ref} sx={{ padding: 4}}  >
    <Typography  displayPrint="none" variant="h6">Details</Typography>
    <Box>
      <BonCommandeHeader  commande={commande} selectedUser={selectedUser}  />
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
  </Box>
)

BonCommande.propTypes = {
  commande: PropTypes.object,
  selectedUser: PropTypes.object,
};

export default BonCommande;

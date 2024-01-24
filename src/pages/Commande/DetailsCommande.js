import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'

// @mui
import {
  Container, Box, Typography, Link, Paper,
} from '@mui/material';

import { useLocation, useNavigate } from 'react-router-dom';
import Iconify from '../../components/iconify';


export default function DetailsCommande() {
  const location = useLocation();
  const navigate = useNavigate();
  const { commandeObject } = location.state || {};

  // eslint-disable-next-line no-unused-vars
  const [commande, setCommande] = useState(commandeObject && JSON.parse(commandeObject));

  console.log(commande);


  return (
    <>
      <Helmet>
        <title> TRANSFORME | Details d'une commande </title>
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
            </Box>
            <Typography sx={{marginLeft: 5, color: "#aaa"}} variant="caption">Le 25 janv 2924{commande.number}</Typography>
          </Box>
        </Box>

      </Container>
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react'

// @mui
import {
  Container, Box, Typography, Link, Card, Divider,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { useLocation } from 'react-router-dom';
import Iconify from '../../components/iconify';


export default function DetailsCommande() {
  const location = useLocation();
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
            <Typography sx={{ marginLeft: 5, color: "#aaa" }} variant="caption">Le 25 janv 2924{commande.number}</Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card sx={{ padding: 4 }} >
              <Typography variant="h6">Details</Typography>
              <Box>
                {
                  commande.line_items.map((prod, key) => 
                     <div key={key} ><Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <img style={{ width: 70, border: '1px solid #EEE', borderRadius: 5, cursor: 'pointer', margin:8  }} alt={prod?.image?.id} src={prod?.image?.src} />
                        <Box>
                          <Typography variant="subtitle2">{prod.name}</Typography>
                          <Typography variant="caption">Le 25 janv 2924{commande.number}</Typography>
                        </Box>
                      </Box>

                      <Typography variant="body2">X{prod.quantity}</Typography>
                      <Typography variant="subtitle1">{prod.price} $</Typography>
                    </Box>
                      <Divider />
                    </div>

                  )
                }
              </Box>
            </Card>

          </Grid>
          <Grid item xs={4}>
            <Card>
              <Typography variant="caption">Le 25 janv 2924{commande.number}</Typography>

            </Card>
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'

// @mui
import {
  Container, Box, Typography, Link, Grid, //  CardMedia, Paper, Rating, Divider, Button, ImageList, ImageListItem,
} from '@mui/material';

import { useLocation } from 'react-router-dom';
import Iconify from '../../components/iconify';


export default function AddProduct() {
  // const location = useLocation();
  // const { productObject } = location.state || {};

  // eslint-disable-next-line no-unused-vars
  // const [product, setProduct] = useState(productObject && JSON.parse(productObject));

  useEffect(() => {
  }, []);

  return (
    <>
      <Helmet>
        <title> TRANSFORME | Ajouter un produits </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
           
            <Link href="/dashboard/produits" style={{ cursor: 'pointer', display:'flex', alignItems:'center' }} variant="subtitle2" underline="hover">
              <Iconify icon={'ion:arrow-back-sharp'} sx={{ mr: 2 }} />
            <Typography variant="h6">Retour</Typography>

            </Link>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Link href="#" style={{ cursor: 'pointer', display:'flex', alignItems:'center' }} variant="subtitle2" underline="hover">
              <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
              <Typography variant="h6">Modifier</Typography>

            </Link>
          </Box>
        </Box>



        <Grid container spacing={4}>
          <Grid item xs={7}>
            <Typography>ok</Typography>

          </Grid>
          <Grid item xs={5}>
          <Typography>ok</Typography>
           

          </Grid>
        </Grid>
       

      </Container>

    </>
  );
}

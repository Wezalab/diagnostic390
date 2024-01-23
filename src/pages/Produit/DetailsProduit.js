import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'

// @mui
import {
  Container, Box, Typography, Link, Grid, CardMedia, Paper, Rating, Divider, Button
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useLocation, useNavigate } from 'react-router-dom';
import useWooCommerceAPI from '../../hooks/useWooCommerceAPI';
import Iconify from '../../components/iconify';
import Label from '../../components/label';



export default function DetailsProduit() {
  const navigate = useNavigate();
  const location = useLocation();
  const { productObject } = location.state || {};

  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState(productObject && JSON.parse(productObject));
  const [value, setValue] = useState(2);
  const [dispo, setDispo] = useState(0);  
  const [stock, setStock] = useState(1);

  useEffect(() => {
    setDispo(product?.stock_quantity)
  }, []);

  const handleIncrement = () => {
    if (stock < (dispo)) {
    setStock(prevStock => prevStock + 1);
    }
  };

  const handleDecrement = () => {
    if (stock > 1) {
      setStock(prevStock => prevStock - 1);
    }
  };

  return (
    <>
      <Helmet>
        <title> TRANSFORME | Mes Produits </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Iconify icon={'ion:arrow-back-sharp'} sx={{ mr: 2 }} />
            <Link href="#" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
              Retour
            </Link>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
            <Link href="#" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
              Modifier
            </Link>
          </Box>
        </Box>



        <Grid container spacing={4}>
          <Grid item xs={7}>
            <Paper>
              <CardMedia
                component="img"
                image={product.images[0]?.src}
                alt="Prod"
              />
            </Paper>


          </Grid>
          <Grid item xs={5}>
            {/* eslint-disable camelcase  */}

            <Typography paddingBottom={2} variant="h6"><Label color={(product.stock_status === 'outofstock' && 'error') || 'success'}>
              {product.stock_status === 'outofstock' ? "En rupture de stock" : "En stock"}</Label> </Typography>
            <Typography variant='h5'>{product.name}</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography variant='h5'>{product.price} $</Typography>
            <Typography color="grey" variant='caption'>{product?.short_description}</Typography>

            <Divider sx={{ marginTop: 3 }} />

            <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: 3 }}>
              <Typography>Quantité</Typography>
              <Box sx={{display:'flex', flexDirection:'column'}}> 
                  <Box sx={{ border: '1px #bbb solid', borderRadius: 5, display: 'inline-flex', alignItems: 'center' }}>
                    <Button variant="text" onClick={handleDecrement}>-</Button>
                    <Typography variant="caption" sx={{ paddingLeft: 1, paddingRight: 1 }}>{stock}</Typography>
                    <Button variant="text" onClick={handleIncrement}>+</Button>
                  </Box>
                <Typography sx={{marginTop: 1, alignSelf:'flex-end' }} variant="caption">Stock disponible: {dispo-stock}</Typography>
              </Box>
            </Box>


            <Divider sx={{ marginTop: 3 }} />


          </Grid>

        </Grid>

      </Container>

    </>
  );
}

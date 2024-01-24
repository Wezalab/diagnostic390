import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'

// @mui
import {
  Container, Box, Typography, Link, Grid, CardMedia, Paper, Rating, Divider, Button, ImageList, ImageListItem,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useLocation, useNavigate } from 'react-router-dom';
import Iconify from '../../components/iconify';
import Label from '../../components/label';


export default function DetailsProduit() {
  const location = useLocation();
  const navigate = useNavigate();
  const { productObject } = location.state || {};

  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState(productObject && JSON.parse(productObject));
  const [value, setValue] = useState(2);
  const [dispo, setDispo] = useState(0);
  const [stock, setStock] = useState(0);

  console.log(product);


  useEffect(() => {
    setDispo(product?.stock_quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <title> TRANSFORME | Details d'un produit </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>

            <Link href="/dashboard/produits" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} variant="subtitle2" underline="hover">
              <Iconify icon={'ion:arrow-back-sharp'} sx={{ mr: 2 }} />
              <Typography variant="h6">Retour</Typography>

            </Link>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Link onClick={() => {
              console.log(product);
              const params = { productObject };
              navigate('/dashboard/add-produit', { state: params });
            }} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} variant="subtitle2" underline="hover">
              <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
              <Typography variant="h6">Modifier</Typography>
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

            <ImageList sx={{ width: '100%', paddingTop: 2 }} cols={10} >
              {product.images.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.name}
                    style={{ border: '1px solid #ddd', borderRadius: 5, cursor: 'pointer' }}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>


          </Grid>
          <Grid item xs={5}>
            {/* eslint-disable camelcase  */}

            <Typography paddingBottom={2} variant="h6"><Label color={(product.stock_status === 'outofstock' && 'error') || 'success'}>
              {product.stock_status === 'outofstock' ? "En rupture de stock" : "En stock"}</Label> </Typography>
            <Typography variant='h5'>{product.name}</Typography>
            <Typography sx={{width: '100%', display:'block'}} variant='caption'>{product?.categories?.map(item => item.name)?.join(', ')}</Typography>
            
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography variant='h5'>{product.price} $</Typography>
            <Typography color="grey" variant='caption'>{product?.short_description?.split('<p>')[1]}</Typography>

            <Divider sx={{ marginTop: 3 }} />

            <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: 3 }}>
              <Typography>Quantité</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ border: '1px #bbb solid', borderRadius: 5, display: 'inline-flex', alignItems: 'center' }}>
                  <Button variant="text" onClick={handleDecrement}>-</Button>
                  <Typography variant="caption" sx={{ paddingLeft: 1, paddingRight: 1 }}>{stock}</Typography>
                  <Button variant="text" onClick={handleIncrement}>+</Button>
                </Box>
                <Typography sx={{ marginTop: 1, alignSelf: 'flex-end' }} variant="caption">Stock disponible: {dispo - stock}</Typography>
              </Box>
            </Box>


            <Divider sx={{ marginTop: 3 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
              <Button sx={{ backgroundColor: "#0063cc" }} size="large" variant="contained" startIcon={<AddShoppingCartIcon />}>
                Ajouter au panier
              </Button>
              <Button size="large" variant="contained" >
                Acheter maintenant
              </Button>
            </Box>

          </Grid>
        </Grid>
        <Paper sx={{ padding: 4, marginTop: 3 }}>
          <Typography sx={{ marginBottom: 3 }} variant='h5'>Description</Typography>
          <Typography variant='caption'>{product.description?.split('<p>')[1]}</Typography>
        </Paper>
      </Container>
    </>
  );
}

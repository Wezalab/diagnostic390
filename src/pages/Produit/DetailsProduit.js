import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'
import { filter } from 'lodash';

// @mui
import {
  Container, Box, Typography, Link
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useNavigate } from 'react-router-dom';
import useWooCommerceAPI from '../../hooks/useWooCommerceAPI';
import Iconify from '../../components/iconify';


export default function DetailsProduit() {
  const navigate = useNavigate();

  const {
    products,
    loading,
    fetchProducts
    // error,
  } = useWooCommerceAPI();


  useEffect(() => {
    // store.dispatch(fetchBusinessPlans());
    fetchProducts()
  }, []);



  return (
    <>
      <Helmet>
        <title> TRANSFORME | Mes Produits </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
            <Box  sx={{display:'flex', flexDirection:'row'}}>
            <Iconify icon={'ion:arrow-back-sharp'} sx={{ mr: 2 }} /> 
            <Link href="#" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
              Retour
            </Link>
          </Box>
          

         <Box  sx={{display:'flex', flexDirection:'row'}}>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} /> 
            <Link href="#" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
          Modifier
          </Link>
         </Box>
        </Box>

      </Container>
    
    </>
  );
}

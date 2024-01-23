import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react'

// @mui
import {
  Container, Box, Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { store } from '../../redux/Store';
import { fetchBusinessPlans } from '../../redux/businessPlanReducer';



export default function MesProduits() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { businessPlanList } = useSelector((state) => state.businessPlan);


  const myBusinessPlan = businessPlanList.filter((obj) => obj.owner && obj.owner._id === user?.user?.user?.userId);
  // const myBusinessPlan = businessPlanList
  console.log(myBusinessPlan);

  useEffect(() => {
    store.dispatch(fetchBusinessPlans());
  }, []);


  return (
    <>
      <Helmet>
        <title> TRANSFORME | Mes Produits </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
          <Typography variant="h4" sx={{ mb: 1 }}>
            Mes Produits / Services
          </Typography>

         <LoadingButton sx={{ textTransform: "inherit" }} size="large" variant="contained"
            onClick={() => navigate('/dashboard/add-entreprise', { replace: true })}>
              Ajouter un produit / Service
            </LoadingButton>
        </Box>

       

        

      </Container>

    </>
  );
}

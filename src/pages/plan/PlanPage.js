import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react'

// @mui
import {
  Container, Box, CircularProgress, Typography, Button, Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { store } from '../../redux/Store';
import { fetchBusinessPlans } from '../../redux/businessPlanReducer';
import AppWidgetBusinessPlan from '../../sections/@dashboard/businessPlan/AppWidgetBusinessPlan';


export default function PlanPage() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { businessPlanList, isLoadingBusinessPlan } = useSelector((state) => state.businessPlan);


  const myBusinessPlan = businessPlanList.filter((obj) => obj.owner && obj.owner._id === user?.user?.user?.userId);
  // const myBusinessPlan = businessPlanList
  console.log(myBusinessPlan);

  useEffect(() => {
    store.dispatch(fetchBusinessPlans());
  }, []);


  return (
    <>
      <Helmet>
        <title> TRANSFORME | Business360 </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
          <Typography variant="h4" sx={{ mb: 1 }}>
            Plan d’Affaires
          </Typography>

          {/* {
            user ? <LoadingButton sx={{ textTransform: "inherit" }} size="large" variant="contained"
            onClick={() => navigate('/dashboard/add-entreprise', { replace: true })}>
              Ajouter un plan d’Affaires
            </LoadingButton> : null
          } */}

        </Box>

        {

          isLoadingBusinessPlan ?
            <Box container spacing={3} sx={{ display: 'flex', flexDirection: 'column', }}>
              <CircularProgress sx={{ alignSelf: 'center' }} /> </Box> :

            <Grid container spacing={1} sx={{ display: 'flex', flexDirection: 'row', }}>

              {
                myBusinessPlan.length !== 0 && myBusinessPlan.map((value, key) =>
                (
                  <Grid key={key} item xs={6}>
                    <AppWidgetBusinessPlan myBusinessPlans={value} />
                  </Grid>
                )
                )
              }
              {
                myBusinessPlan.length === 0 && <Box
                  display="flex"
                  width='100%'
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                // minHeight="50vh"
                >

                  <img src='../../../assets/company.gif' alt="Success Gif" style={{ width: '30%', marginBottom: 2, alignSelf: 'center' }} />

                  <Typography variant="h5" gutterBottom>
                    Vous n'avez enregistré aucun plan d’affaires !
                  </Typography>
                  {
                    user ? <>
                      <Typography>Pour enregistrer votre plan d’affaires, cliquez sur le bouton en bas et commencez
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/dashboard/add-businessPlan', { replace: true })}
                        sx={{ marginTop: 2 }}
                      >
                        Enregistrer votre plan d’affaires
                      </Button></> :
                      <>
                        <Typography>Pour enregistrer votre plan d’affaires, veuillez vous identifier
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => navigate('/login', { replace: true })}
                          sx={{ marginTop: 2 }}
                        >
                          Se connecter
                        </Button>
                      </>
                  }
                </Box>
              }

            </Grid>
        }

      </Container>

    </>
  );
}

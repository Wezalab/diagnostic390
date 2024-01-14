import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
// @mui
import { Grid, Container, Typography, Box, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { AppWidgetEntreprise } from '../sections/@dashboard/entreprise';

import { store } from '../redux/Store';
import { fetchEntreprises } from '../redux/entrepriseReducer';

export default function DashboardAppPage() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { entrepriseList, isLoadingEntreprise } = useSelector((state) => state.entreprise);

  // const myEntreprises = entrepriseList.filter((obj) => obj.owner && obj.owner._id === user.user.user.userId);
  const myEntreprises = entrepriseList
  console.log(myEntreprises);

  useEffect(() => {
    store.dispatch(fetchEntreprises());
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard | Business360 </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 1 }}>
        Concours de plans d’affaires - COPA
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Bienvenue {user? user?.user?.user?.name: ""}
        </Typography>

        {
          isLoadingEntreprise ? 
          <Box container spacing={3} sx={{ display: 'flex', flexDirection: 'column', }}>
          <CircularProgress sx={{alignSelf:'center'}} /> </Box> :

            <Grid container spacing={1} sx={{ display: 'flex', flexDirection: 'row', }}>

              {
                myEntreprises && myEntreprises.map((value, key) =>
                (
                  <Grid key={key} item xs={6}>
                    <AppWidgetEntreprise myEntreprises={value} />
                  </Grid>
                )
                )
              }
              {
                myEntreprises.length === 0 && <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  width='100%'
                >

                  <img src='../../../assets/company.gif' alt="Success Gif" style={{ width: '30%', marginBottom: 2, alignSelf: 'center' }} />

                  <Typography variant="h5" gutterBottom>
                    Vous n'avez enregistré aucune entreprise!
                  </Typography>
                  <Typography>Pour enregistrer votre entreprise, cliquez sur le bouton en bas et commencez

                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/dashboard/add-entreprise', { replace: true })}
                    sx={{ marginTop: 2 }}
                  >
                    Enregistrer votre entreprise
                  </Button>
                </Box>
              }

            </Grid>
          }
      </Container>
    </>
  );
}

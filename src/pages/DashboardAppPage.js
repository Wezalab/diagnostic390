import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
// @mui
import { Grid, Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { AppWidgetEntreprise } from '../sections/@dashboard/entreprise';

import { store } from '../redux/Store';
import { fetchEntreprises } from '../redux/entrepriseReducer';

function countItems(doctorsArray) {
  return doctorsArray.length
}

export default function DashboardAppPage() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { entrepriseList } = useSelector((state) => state.entreprise);

  const myEntreprises = entrepriseList.filter((obj) => obj.owner && obj.owner._id === user.user.user.userId);
  console.log(myEntreprises);

  useEffect(() => {
    // Fetch doctor and patient lists when component mounts
    store.dispatch(fetchEntreprises());
  }, [store.dispatch]);

  return (
    <>
      <Helmet>
        <title> Dashboard | Diagnostic360 </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 1 }}>
          Mon Tableau de board
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Bienvenue {user.user.user.name}
        </Typography>
        {

        }

        <Grid container spacing={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

          {
            myEntreprises && myEntreprises.map((value, key) => {
              return (
                <Grid key={key} item xs={12} sm={6}>
                  <AppWidgetEntreprise  myEntreprises={value} title="Entreprise" total={countItems(entrepriseList)} icon={'ant-design:user-outlined'} />
                </Grid>
              )
            })
          }
          {
            myEntreprises.length===0 && <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"
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

        {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Doctors" total={countItems(doctorList)} icon={'ant-design:user-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Patients" total={countItems(patientList)} color="error" icon={'ant-design:user-outlined'} />
          </Grid>

        </Grid> */}

      </Container>
    </>
  );
}

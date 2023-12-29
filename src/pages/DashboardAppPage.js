import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
// @mui
import { Grid, Container, Typography } from '@mui/material';
import { AppWidgetEntreprise } from '../sections/@dashboard/entreprise';

import { store } from '../redux/Store';
import { fetchEntreprises } from '../redux/entrepriseReducer';

function countItems(doctorsArray) {
  return doctorsArray.length
}

export default function DashboardAppPage() {

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
        <title> Dashboard | We care </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 1 }}>
          Mon Tableau de board
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 3 }}>
          Bienvenue {user.user.user.name}
        </Typography>
        {

        }

        <Grid container spacing={3}>

          {
            myEntreprises && myEntreprises.map((value, key) => {
              return (
                <Grid key={key} item xs={12} sm={6}>
                  <AppWidgetEntreprise  myEntreprises={value} title="Entreprise" total={countItems(entrepriseList)} icon={'ant-design:user-outlined'} />
                </Grid>
              )
            })
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

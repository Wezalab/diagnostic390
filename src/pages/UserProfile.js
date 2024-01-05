import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
// @mui
import { Grid, Container, Typography, Box, Button, CircularProgress } from '@mui/material';

import { store } from '../redux/Store';
import { fetchEntreprises } from '../redux/entrepriseReducer';

export default function UserProfile() {
  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    store.dispatch(fetchEntreprises());
  }, []);

  return (
    <>
      <Helmet>
        <title> Profile | Business360 </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 1 }}>
        Profile
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Bienvenue {user? user?.user?.user?.name: ""}
        </Typography>

        
      </Container>
    </>
  );
}

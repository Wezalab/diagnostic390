import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
// @mui
import { Container, Typography, Box, CardMedia } from '@mui/material';

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
          Bienvenue {user ? user?.user?.user?.name : ""}
        </Typography>
        <Box sx={{position:'relative'}}>
          <CardMedia
            component="img"
            height="194"
            image='../../../assets/bg.jpeg'
            alt="Paella dish"
            sx={{opacity:0.3 }}
          />
          <Box sx={{display: 'flex', flexDirection:'row', position: "absolute", bottom: 50, left:"5%",
          alignItems:'center' }}>
            <img src={user.user.user.profile_picture} alt="profile" style={{
              height: 80,
              
              boxShadow: (theme) => theme.customShadows.z20,
              border: (theme) => `solid 1px ${theme.palette.grey[500_8]}`,
              // border: '1px black solid',
              borderRadius:50,
              

            }} />
            <Box flex={1}>
            <Typography sx={{ mx: 1 }} variant='h5'>
           {user ? user?.user?.user?.name : ""}
        </Typography>
        <Typography sx={{ mx: 1 }}>
           {user ? user?.user?.user?.email : ""}
        </Typography>
            </Box>
            

          </Box>
        </Box>

      </Container>
    </>
  );
}

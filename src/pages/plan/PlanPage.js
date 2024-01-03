import { Helmet } from 'react-helmet-async';
import React, {useEffect} from 'react'

// @mui
import {
  Container, Box, CircularProgress, Typography, Button, Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';


import { useSelector } from 'react-redux';
import { AppWidgetEntreprise } from '../../sections/@dashboard/entreprise';
import { store } from '../../redux/Store';
import { fetchEntreprises } from '../../redux/entrepriseReducer';


export default function PlanPage() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { entrepriseList, isLoadingEntreprise } = useSelector((state) => state.entreprise);

  // const myEntreprises = entrepriseList.filter((obj) => obj.owner && obj.owner._id === user.user.user.userId);
  const myEntreprises = entrepriseList
  console.log(myEntreprises);

  useEffect(() => {
    store.dispatch(fetchEntreprises());
  }, []);

  const handleClick = ()=> {

  }
  
  return (
    <>
      <Helmet>
        <title> TRANSFORME | Business360 </title>
      </Helmet>

      <Container >
        <Box  sx={{ display:'flex', flexDirection:'row', justifyContent:"space-between", marginBottom:5  }} >
          <Typography variant="h4" sx={{ mb: 1 }}>
          Plan d’Affaires
          </Typography>
          
          {
            user?<LoadingButton size="large" variant="contained" onClick={handleClick}>
            Ajouter un plan d’Affaires
          </LoadingButton>: null
          }
          
        </Box>
    
        

        {

          isLoadingEntreprise ? 
          <Box container spacing={3} sx={{ display: 'flex', flexDirection: 'column', }}>
          <CircularProgress sx={{alignSelf:'center'}} /> </Box> :

            <Grid container spacing={1} sx={{ display: 'flex', flexDirection: 'row', }}>

              {/* {
                myEntreprises && myEntreprises.map((value, key) =>
                (
                  <Grid key={key} item xs={6}>
                    <AppWidgetEntreprise myEntreprises={value} />
                  </Grid>
                )
                )
              } */}
              {
                myEntreprises.length !== 0 && <Box
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
                    user? <>
                    <Typography>Pour enregistrer votre plan d’affaires, cliquez sur le bouton en bas et commencez
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/dashboard/add-entreprise', { replace: true })}
                    sx={{ marginTop: 2 }}
                  >
                    Enregistrer votre plan d’affaires
                  </Button></>:
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

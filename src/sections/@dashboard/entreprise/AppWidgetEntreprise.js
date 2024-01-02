// @mui
import PropTypes from 'prop-types';
import {  styled } from '@mui/material/styles';
import {  Box, Button, Card, CardActions, CardContent, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// utils
// components
import Iconify from '../../../components/iconify';

AppWidgetEntreprise.propTypes = {
  myEntreprises: PropTypes.object.isRequired,
};


const ButtonColor = '#ff1d8e';
const ButtonColorEdit = '#fff';

const StyledCard = styled(Card)({
  display: 'inline-block',
  boxSizing: 'border-box',
  boxShadow: '2px 2px 25px 0px rgba(0, 0, 0, 0.3)',
  borderRadius: '3px',
  margin: '1em 1.5%',
  animation: 'scl 0.5s ease-in-out',
  transformOrigin: 'left center',
  backgroundColor: '#fff',
  '&:hover': {
    boxShadow: '7px 7px 15px 2px rgba(0, 0, 0, 0.5)',
    transition: 'box-shadow 0.3s ease-in',
  },
});

const StyledCardTitle = styled('div')({
  marginTop: '-2.5em',
  paddingBottom: '0.5em',
  paddingLeft: '0.5em',
  color: '#fff',
  fontSize: '2em',
});

const StyledCardImage = styled('img')({
  width: '100%',
  height: '162px',
});

const StyledCardDesc = styled('div')({
  overflow: 'hidden',
  textAlign: 'justify',
  color: 'GrayText'
});

const StyledCardActionReadMore = styled(Button)({
  margin: '1em 0 1em 1em',
  height: '3em',
  width: '8em',
  background: ButtonColor,
  border: 'none',
  fontWeight: 'light',
  color: '#fff',
  position: 'relative',
  overflow: 'hidden',
  outline: 'none',
  borderRadius: '2px',
  '&:hover': {
    background: `rgba(${parseInt(ButtonColor.slice(-6, -4), 16)}, ${parseInt(
      ButtonColor.slice(-4, -2),
      16
    )}, ${parseInt(ButtonColor.slice(-2), 16)}, 0.8)`,
    transition: 'all 0.1s ease-in',
  },
});


const StyledCardActionEdit = styled(Button)({
  margin: '1em 0 1em 1em',
  height: '3em',
  width: '8em',
  background: ButtonColorEdit,
  border: '4px solid #000',
  fontWeight: 'light',
  color: '#000',
  position: 'relative',
  overflow: 'hidden',
  // outline: 'none',
  borderRadius: '2px',
  '&:hover': {
    background: `rgba(${parseInt(ButtonColorEdit.slice(-6, -4), 16)}, ${parseInt(
      ButtonColorEdit.slice(-4, -2),
      16
    )}, ${parseInt(ButtonColorEdit.slice(-2), 16)}, 0.8)`,
    transition: 'all 0.1s ease-in',
  },
});

export default function AppWidgetEntreprise({ myEntreprises}) {
  console.log(myEntreprises);
  const navigate = useNavigate();

  const cardsData = [
    {
      imageUrl: 'https://getmdl.io/assets/demos/welcome_card.jpg',
    }
  ];

  return (

    <Container>
      <CssBaseline />
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <StyledCard key={index}>
            <StyledCardImage src={card.imageUrl} alt="Card" sx={{ zIndex: 10 }} />
            <CardContent sx={{ borderBottomWidth: '80%', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', }}>
              <StyledCardTitle>
                <Card sx={{ width: "fit-content" }}>
                  <Typography sx={{ p: 1 }} variant="h6">{myEntreprises.company_name}</Typography>
                </Card>
              </StyledCardTitle>
              <StyledCardDesc>{myEntreprises.mini_bio}</StyledCardDesc>
              <Box sx={{display:'flex', flexDirection:'row'}}>
              <Iconify icon='mdi:location' width={20} height={20} />
                <Typography variant="body2">{myEntreprises.full_address}</Typography>
              </Box>
              <Grid container spacing={2} mt={1} justifyContent="space-between" >
                <Grid item xs={12} sm={3}>
                  <Typography variant="h4">60%</Typography>
                  <Typography variant="body2">Identité de l'Entreprise</Typography>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Typography variant="h4">N/A</Typography>
                  <Typography variant="body2">Opportunité du Marché</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="h4">N/A</Typography>
                  <Typography variant="body2">Équipe et Leadership</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="h4">N/A</Typography>
                  <Typography variant="body2">Viabilité Financière</Typography>
                </Grid>

              </Grid>

            </CardContent>
            <CardActions>
            
              <StyledCardActionReadMore onClick={()=>  navigate('/dashboard/view-venture', { replace: true }) }>
                visualiser
              </StyledCardActionReadMore>

              <StyledCardActionEdit onClick={()=>  navigate('/dashboard/view-venture', { replace: true }) }>
                Modifier
              </StyledCardActionEdit>
            </CardActions>
          </StyledCard>
        ))}
      </Grid>
    </Container>
  );
}

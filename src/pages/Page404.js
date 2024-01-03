import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found | Business360</title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
          Désolé, page introuvable!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
          Désolé, nous n’avons pas trouvé la page que vous recherchez. Peut-être avez-vous mal saisi l'URL? Assurez-vous de vérifier votre orthographe.
          </Typography>

          <Box
            component="img"
            src="/assets/logo.png"
            sx={{  mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Aller à l'accueil
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}

import { Helmet } from 'react-helmet-async';

// @mui
import {
  Card,
  Stack,
 
  Container,
  Typography,
} from '@mui/material';
// components
import Scrollbar from '../../components/scrollbar';
// sections


export default function AddEntreprisePage() {

  return (
    <>
      <Helmet>
        <title> TRANSFORME | Diagnostic360 </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Enregistrer votre entreprise
          </Typography>
        </Stack>

        <Card>

          <Scrollbar>
          <Typography variant="h4" gutterBottom>
            Enregistrer votre entreprise
          </Typography>
          </Scrollbar>

        </Card>
      </Container>

    </>
  );
}

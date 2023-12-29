import { Helmet } from 'react-helmet-async';

// @mui
import {
  Alert,
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
// components
// import Scrollbar from '../../components/scrollbar';
// sections


export default function AddEntreprisePage() {
  const defaultDate = '2000-02-02';

  return (
    <>
      <Helmet>
        <title> TRANSFORME | Diagnostic360 </title>
      </Helmet>

      <Container >
        {/* sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} */}

        <Box sx={{ width: '80%', alignItems: 'center' }} >
          <Alert severity="warning">Êtes-vous sûr de vouloir ajouter un nouveau profil d'entreprise?
            Si vous souhaitez apporter des modifications à votre profil existant, veuillez accéder à votre profil d'entreprise et modifier les détails.</Alert>
          <Typography variant="h4" sx={{ my: 3 }}>
            Enregistrer votre entreprise
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
          // alignItems="center"
          // justifyContent="center"
          // minHeight="100vh"
          >
            <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', }}>


              <Typography variant="h6" gutterBottom>Avec un profil d'entreprise, vous pouvez:
              </Typography>
              <Typography>
                Postulez pour beneficier des opportunités de programme TRANSFORME

              </Typography>

              <Typography variant="caption" sx={{ mt: 3 }}>
                Créer un profil d'entreprise est simple et ne prend que 5 minutes.
                Fournissez des informations de base sur votre entreprise et
                enrichissez le profil avec des informations supplémentaires après la publication de la page.
                Prenez un moment pour consulter nos directives pour vous assurer que votre entreprise correspond bien.
              </Typography>

            </Paper>

            <Typography variant="h4" sx={{ my: 3 }}>
            Details
          </Typography>
          <Stack spacing={3}>

          <TextField
          required
          id="outlined-required"
          label="Nom de l'Entreprise"
          defaultValue="Nom de l'Entreprise"
          placeholder="Nom de l'Entreprise"
        />

<TextField
          id="outlined-required"
          label="Description de l'Entreprise"
          defaultValue="Description de l'Entreprise"
          placeholder="Description de l'Entreprise"
          multiline
        />


<TextField
      shrink
      id="outlined-required"
      label="Date de création de l'Entreprise"
      placeholder="2/2/2000"
      type="date"
      defaultValue={defaultDate}
    />
<TextField
          id="outlined-required"
          label="Mission de l'Entreprise"
          defaultValue="Mission de l'Entreprise"
          placeholder="Mission de l'Entreprise"
          multiline
        />
        <TextField
          id="outlined-required"
          label="Valeur de l'Entreprise"
          defaultValue="Valeur de l'Entreprise"
          placeholder="Valeur de l'Entreprise"
          multiline
        />
        
        <TextField
          id="outlined-required"
          label="Addresse de l'Entreprise"
          defaultValue="Addresse de l'Entreprise"
          placeholder="Addresse de l'Entreprise"
        />

<FormGroup>
<FormLabel component="legend">Assign responsibility</FormLabel>

      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>

{/* 

"company_name": "Weza Lab",
  "description": "Weza Lab Description3",
  "founding_date": "2020-01-01",
  "mission": "Project Mission3",
  "valeur": "Project Value",
  "objectifs": "Project Objectives",
  "smart_ip": "Smart IP",
  "objectif_social": "Social Objective",
  "phone": "0991234567",
  "full_address": "Goma, Himbi, Route bravo 33",
  "secteur": "AGRO-TRANSFORMATION",
  "type_of_customers": ["B2B", "B2B2B", "B2G"],
  "customer_base": ["URBAN-BASED-CUSTOMERS"],
  "pitch_text": "Project Pitch Text",
  "pitch_deck_url": "https://wezalab.com/pitch_deck.pdf",
  "website": "https://wezalab.com", */}

          </Stack>
          </Box>

        </Box>
      </Container>

    </>
  );
}

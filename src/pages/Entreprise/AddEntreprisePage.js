import { Helmet } from 'react-helmet-async';

// @mui
import {
  Alert,
  Autocomplete,
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
// components
// import Scrollbar from '../../components/scrollbar';
// sections

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function AddEntreprisePage() {
  const defaultDate = '2000-02-02';

  const options = sectors.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });


  return (
    <>
      <Helmet>
        <title> TRANSFORME | Diagnostic360 </title>
      </Helmet>

      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
        {/* sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} */}

        <Box sx={{ width: '70%'}} >
          <Alert severity="warning">Êtes-vous sûr de vouloir ajouter un nouveau profil d'entreprise?
            Si vous souhaitez apporter des modifications à votre profil existant, veuillez accéder à votre profil d'entreprise et modifier les détails.</Alert>
          <Typography variant="h4" sx={{ my: 3 }}>
            Enregistrer votre entreprise
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
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
            <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', }}>
            <Stack spacing={3}>

              <TextField
                required
                id="outlined-required"
                label="Nom de l'Entreprise"
                placeholder="Nom de l'Entreprise"
              />

              <TextField
                id="outlined-required"
                label="Description de l'Entreprise"
                placeholder="Description de l'Entreprise"
                multiline
              />


              <TextField
                shrink
                id="outlined-required"
                label="Date de création de l'Entreprise"
                placeholder="2/2/2000"
                defaultValue={defaultDate}
                type="date"
              />
              <TextField
                id="outlined-required"
                label="Mission de l'Entreprise"
                placeholder="Mission de l'Entreprise"
                multiline
              />
              <TextField
                id="outlined-required"
                label="Valeur de l'Entreprise"
                placeholder="Valeur de l'Entreprise"
                multiline
              />

              <TextField
                id="outlined-required"
                label="Addresse de l'Entreprise"
                placeholder="Addresse de l'Entreprise"
              />

              <FormGroup>
                <FormLabel component="legend">Secteur d'activité</FormLabel>

                <FormControlLabel control={<Checkbox defaultChecked />} label="AGRO-TRANSFORMATION" />
                <FormControlLabel control={<Checkbox />} label="SERVICE" />
                <FormControlLabel control={<Checkbox />} label="AUTRE" />
              </FormGroup>

              <FormControl>
                <FormLabel id="radio-buttons">A quel stage etes-vous?</FormLabel>
                <RadioGroup
                  aria-labelledby="radio-buttons"
                  defaultValue="Idée/Concept"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Idée/Concept" control={<Radio />} label="Idée/Concept" />
                  <FormControlLabel value="Startup" control={<Radio />} label="Startup" />
                  <FormControlLabel value="Stade de croissance" control={<Radio />} label="Stade de croissance" />
                  <FormControlLabel value="Stade de maturité" control={<Radio />} label="Stade de maturité" />
                </RadioGroup>
              </FormControl>

              <FormGroup>
                <FormLabel component="legend">Quel type de clients servez-vous ?</FormLabel>
                <FormControlLabel control={<Checkbox defaultChecked />} label="B2B" />
                <FormControlLabel control={<Checkbox />} label="B2C" />
                <FormControlLabel control={<Checkbox />} label="B2G" />
              </FormGroup>

              <FormGroup>
                <FormLabel component="legend">Où sont basés vos clients ?</FormLabel>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Clientèle urbaine" />
                <FormControlLabel control={<Checkbox />} label=" Clientèle rurale" />
              </FormGroup>

              <Autocomplete
                multiple
                limitTags={2}
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                id="checkboxes-tags-demo"
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Quel sont vos secteurs d'activité?" placeholder="Ajouter un secteur" />
                )}
            />






              {/* 
["", "", "S",""]
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
            </Paper>
          </Box>

        </Box>
      </Container>

    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const sectors = [
  {title: "Agro-industrie"},
  {title: "Produits chimiques agricoles"},
  {title: "Élevage d'animaux"},
  {title: "Agriculture"},
  {title: "Machines agricoles"},
  {title: "Aquaculture"},
  {title: "Services aux entreprises"},
  {title: "Services de comptabilité"},
  {title: "Consultation et développement commercial"},
  {title: "Services diversifiés"},
  {title: "Logiciels d'entreprise"},
  {title: "Ressources humaines et recrutement"},
  {title: "Services juridiques"},
  {title: "Marketing et relations publiques"},
  {title: "Technologie propre et énergie"},
  {title: "Biocarburants"},
  {title: "Biomasse"},
  {title: "Technologie propre"},
  {title: "Services environnementaux"},
  {title: "Protection des ressources naturelles"},
  {title: "Transport vert et moteurs électriques"},
  {title: "Énergie hydraulique"},
  {title: "Énergies renouvelables"},
  {title: "Énergie solaire"},
  {title: "Services publics"},
  {title: "Services publics d'électricité"},
  {title: "Services publics de gaz naturel"},
  {title: "Gestion des déchets et recyclage"},
  {title: "Énergie éolienne"},
  {title: "Construction et fabrication"},
  {title: "Construction"},
  {title: "Fabrication"},
  {title: "Impression 3D"},
  {title: "Automobile"},
  {title: "Production de vêtements et textiles"},
  {title: "Matériel informatique"},
  {title: "Électronique"},
  {title: "Production alimentaire"},
  {title: "Mobilier"},
  {title: "Emballage"},
  {title: "Immobilier"},
  {title: "Création, médias et divertissement"},
  {title: "Animation"},
  {title: "Arts"},
  {title: "Mode"},
  {title: "Production cinématographique"},
  {title: "Conception graphique"},
  {title: "Production médiatique"},
  {title: "Musique"},
  {title: "Photographie"},
  {title: "Production vidéo"},
  {title: "Éducation"},
  {title: "Produits éducatifs"},
  {title: "Services éducatifs"},
  {title: "Services financiers"},
  {title: "Banque"},
  {title: "Assurance"},
  {title: "Gestion d'investissements"},
  {title: "Transfert d'argent"},
  {title: "Santé"},
  {title: "Biotechnologie et recherche médicale"},
  {title: "Fournisseurs et services de santé"},
  {title: "Équipements médicaux et fournitures"},
  {title: "Produits pharmaceutiques"},
  {title: "Santé sexuelle et reproductive"},
  {title: "Adtech"},
  {title: "Agritech"},
  {title: "Intelligence artificielle"},
  {title: "Big data"},
  {title: "Blockchain"},
  {title: "Solutions cloud"},
  {title: "Jeux informatiques"},
  {title: "Logiciels informatiques"},
  {title: "Connectivité"},
  {title: "Commerce électronique"},
  {title: "Formation en ligne"},
  {title: "Jeux électroniques"},
  {title: "Technologies éducatives"},
  {title: "Technologies financières"},
  {title: "Technologies de la santé"},
  {title: "Technologies de l'information"},
  {title: "Internet"},
  {title: "Internet des objets (IoT)"},
  {title: "Apprentissage automatique"},
  {title: "Mobile"},
  {title: "Nanotechnologie"},
  {title: "Nouveaux médias"},
  {title: "Analyse en ligne"},
  {title: "Traitement des paiements en ligne"},
  {title: "Informatique quantique"},
  {title: "Solutions pour les villes intelligentes"},
  {title: "Logiciel en tant que service (SaaS)"},
  {title: "Télécommunications"},
  {title: "Véhicules aériens sans pilote (drones)"},
  {title: "Réalité virtuelle"},
  {title: "Loisirs et voyages"},
  {title: "Événements"},
  {title: "Hospitalité"},
  {title: "Sports et bien-être"},
  {title: "Tourisme"},
  {title: "Commerce de détail et de gros"},
  {title: "Biens de consommation durables"},
  {title: "Automobiles"},
  {title: "Mobilier"},
  {title: "Appareils ménagers"},
  {title: "Biens de luxe et bijoux"},
  {title: "Biens de consommation non durables"},
  {title: "Vêtements et textiles"},
  {title: "Médicaments et cosmétiques"},
  {title: "Aliments et boissons"},
  {title: "Importation et exportation"},
  {title: "Vente au détail"},
  {title: "Vente au détail spécialisée"},
  {title: "Vente en gros"},
  {title: "Transport et logistique"},
  {title: "Logistique"},
  {title: "Transport personnel"},
  {title: "Poste et express"},
  {title: "Transport public"},
  {title: "Eau, assainissement et hygiène"},
  {title: "Systèmes communautaires d'eau"},
  {title: "Hygiène"},
  {title: "Assainissement"},
  {title: "Stockage de l'eau"},
  {title: "Traitement de l'eau"},
  {title: "Services publics d'eau"}, 
];

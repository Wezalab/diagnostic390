/* eslint no-unneeded-ternary: "error" */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, alpha, useTheme } from '@mui/material/styles';

import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  CircularProgress,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
  Container,
  Grid,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  OutlinedInput,
  Chip,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { createEntreprise } from '../../../redux/entrepriseReducer';
import { register } from '../../../redux/registerAction';

import Iconify from '../../../components/iconify';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Infrastructures et Aménagements',
  'Agriculture',
  'Elevage',
  'Ressources naturelles renouvelables',
  'Tourisme et hôtellerie',
  'Secteur industriel',
  'Gestion des produits et déchets divers',
  'Secteur minier',
  'Hydrocarbures et énergie fossile',
];

function getStyles(name, secteurName, theme) {
  return {
    fontWeight:
      secteurName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const defaultDate = '2000-01-01';

  const { registeredUser, errorRegister, isLoadingRegister } = useSelector((state) => state.register);
  const { user } = useSelector((state) => state.auth);
  const { isLoadingCreateEntreprise, errorCreateEntreprise } = useSelector((state) => state.entreprise);


  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sex, setSex] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [sexError, setSexError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Categorie
  const [catSelector, setCatSelector] = useState(0);
  const [catError, setCatError] = useState("");

  // Add entreprise
  const [entrepriseName, setEntrepriseName] = useState('');
  const [miniBio, setMiniBio] = useState('');
  const [entrepriseDescription, setEntrepriseDescription] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [entrepriseMission, setEntrepriseMission] = useState('');
  const [entrepriseVision, setEntrepriseVision] = useState('');
  const [entrepriseValue, setEntrepriseValue] = useState('');
  const [entrepriseAddress, setEntrepriseAddress] = useState('');
  const [secteurActivite, setSecteurActivite] = useState([]);
  const [entrepriseStage, setEntrepriseStage] = useState('');
  const [typeOfClients, setTypeOfClients] = useState([]);
  const [clientLocation, setClientLocation] = useState([]);
  const [sectorsOfActivity, setSectorsOfActivity] = useState([]);

  // Error
  const [entrepriseError, setEntrepriseError] = useState('');
  const [miniBioError, setMiniBioError] = useState('');

  const StyledIcon = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));


  const [steps, setSteps] = useState(['Catégorie', 'Profile', 'Entreprise']);

  // stepper
  const [activeStep, setActiveStep] = useState(0);

  // Autocomplete

  const handleChangeList = (event) => {
    const {
      target: { value },
    } = event;
    setSectorsOfActivity(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  // Stepper
  const handleNext = () => {

    // if(catSelector===3 || catSelector===4){
    //   setSteps([...steps.filter((val, key)=> val !== 'Entreprise')])
    //   setCatError("");
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);

    // }
    // else 
    if (catSelector === 0) {
      setCatError("Veillez selectionner une categorie");
    } else {
      setCatError("");
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("ok", name, nameError);
    try {
      // Validate and set error messages
      if (!name.trim()) {
        setNameError('Le nom ne peut pas être vide');
      } else {
        setNameError('');
      }

      if (!phone.trim()) {
        setPhoneError('Le téléphone ne peut pas être vide');
      } else {
        setPhoneError('');
      }

      if (!email.trim()) {
        setEmailError('L\'e-mail ne peut pas être vide');
      } else {
        setEmailError('');
      }

      if (!password.trim()) {
        setPasswordError('Le mot de passe ne peut pas être vide');
      } else {
        setPasswordError('');
      }

      if (!confirmPassword.trim()) {
        setConfirmPasswordError('Veuillez confirmer le mot de passe');
      } else if (confirmPassword !== password) {
        setConfirmPasswordError('Les mots de passe ne correspondent pas');
      } else {
        setConfirmPasswordError('');
      }

      if (!sex.trim()) {
        setSexError('Le mot de passe ne peut pas être vide');
      } else {
        setSexError("");
      }

      // If there are no errors, proceed with registration
      // if (!nameError && !emailError && !passwordError && !confirmPasswordError && !phoneError && !sexError) {
      if (name && email && password && confirmPassword && phone && sex) {
        // Dispatch registration action here
        console.log("registeredUser", await registeredUser);
        console.log(name, password, phone, confirmPassword, sex, email);
        const role = catSelector == 1? 'user':catSelector ==2? 'pme': catSelector==3?'femme': 'psde';

        dispatch(register(name, email, phone, sex, password, role))
          .then((data) => {
            console.log("data", data);
          })
          .catch((error) => {
            console.error('Registration error:', error);
            
          });
        console.log();
        console.log("registeredUser2", await registeredUser);


      }
    } catch (e) {
      console.log("errorRegister", errorRegister);
      console.log(e);
    }
  };

  const handleClickEntreprise = (e) => {
    e.preventDefault();
    try {
      // Validate and set error messages
      if (!entrepriseName.trim()) {
        setEntrepriseError("Le nom de l'entreprise ne peut pas être vide");
      } else {
        setEntrepriseError('');
      }

      if (!miniBio.trim()) {
        setMiniBioError("Le details de l'entreprise ne peut pas être vide");
      } else {
        setMiniBioError('');
      }

      if (!entrepriseName.trim() || !miniBio.trim()) {
        return
      }

      console.log("entrepriseError", entrepriseError);

      // If there are no errors, proceed with registration
      if (!entrepriseError && !miniBioError) {

        const newValue = {
          "company_name": entrepriseName,
          "mini_bio": miniBio,
          "project_description": entrepriseDescription,
          "founding_date": creationDate,
          "project_mission": entrepriseMission,
          "project_vision": entrepriseVision,
          "valeur": entrepriseValue,
          "stage": entrepriseStage,
          // "objectifs": "Project Objectives",
          // "smart_ip": "Smart IP",
          // "objectif_social": "Social Objective",
          // "phone": "0991234567",
          "full_address": entrepriseAddress,
          "secteur": secteurActivite,
          "type_of_customers": typeOfClients,
          "customer_base": clientLocation,
          // "pitch_text": "Project Pitch Text",
          // "pitch_deck_url": "https://wezalab.com/pitch_deck.pdf",
          // "website": "https://wezalab.com",
          "owner": user.user.user.userId, // Replace with an actual user ID from the list
          "secteur_activite_details": sectorsOfActivity.map((item) => item.title)
        }
        // console.log("newvalue", newValue);

        dispatch(createEntreprise(newValue))
          .then((data) => {
            console.log("data", errorCreateEntreprise, data);

            if (!errorCreateEntreprise) {
              navigate('/dashboard', { replace: true });
            }
          })
          .catch((error) => {
            console.error('Registration error:', error);
          });
      }
    } catch (error) {
      console.log("errorRegister", error);
      console.log(error);
    }
  }

  return (
    <Container sx={{ width: '100%' }} >

      <Box>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};

            // if (isStepSkipped(index)) {
            //   stepProps.completed = false;
            // }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            // minHeight="100vh"
            mt={4}
            >
              <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <img src='../../../assets/verified.gif' alt="Success Gif" style={{ width: '15%', marginBottom: 2, alignSelf: 'center' }} />

                <Typography variant="h5" gutterBottom>Compte créé avec succès!
                </Typography>
                <Typography>Un email a été envoyé à votre adresse pour confirmation.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={()=> {
                      navigate('/login', { replace: true });
                  }}
                  sx={{ marginTop: 2 }}
                >
                  Se connecter
                </Button>
              </Paper>
            </Box>

          </>
        ) : (
          <>
            {
              activeStep === 0 ?
                <>
                  <Typography variant="button" sx={{ display: 'block', textAlign: 'center', paddingTop: 2 }}>Selectionner une categorie</Typography>

                  <Grid container spacing={2} mt={1} mb={2} justifyContent="space-between" >

                    <Grid item xs={12} sm={3} sx={{ cursor: 'pointer', opacity: catSelector === 1 ? 1 : 0.5 }}>
                      <Card
                        onClick={() => {
                          setCatSelector(1);
                          setSteps(['Catégorie', 'Profile', 'Entreprise'])
                        }}
                        sx={{
                          py: 5,
                          boxShadow: catSelector === 1 ? 0 : 5,
                          border: catSelector === 1 ? '1px solid red' : '0 solid red',
                          textAlign: 'center',
                          color: (theme) => theme.palette.primary.darker,
                          bgcolor: (theme) => theme.palette.primary.lighter,
                        }}

                      >
                        <StyledIcon
                          sx={{
                            color: (theme) => theme.palette.primary.dark,
                            backgroundImage: (theme) =>
                              `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
                                theme.palette.primary.dark,
                                0.24
                              )} 100%)`,
                          }}
                        >
                          <Iconify icon="eva:search-fill" sx={{ color: '#000', width: 24, height: 24 }} />

                        </StyledIcon>
                        <Typography variant="body2">Jeune entrepreneur</Typography>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={3} sx={{ cursor: 'pointer', opacity: catSelector === 2 ? 1 : 0.5 }}>
                      <Card
                        onClick={() => {
                          setCatSelector(2)
                          setSteps(['Catégorie', 'Profile', 'Entreprise'])
                        }}
                        sx={{
                          py: 5,
                          textAlign: 'center',
                          boxShadow: catSelector === 2 ? 0 : 5,
                          border: catSelector === 2 ? '1px solid red' : '0 solid red',
                          color: (theme) => theme.palette.error.darker,
                          bgcolor: (theme) => theme.palette.error.lighter,
                        }}

                      >
                        <StyledIcon
                          sx={{
                            color: (theme) => theme.palette.error.dark,
                            backgroundImage: (theme) =>
                              `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
                                theme.palette.error.dark,
                                0.24
                              )} 100%)`,
                          }}
                        >
                          <Iconify icon="eva:search-fill" sx={{ color: '#000', width: 24, height: 24 }} />

                        </StyledIcon>
                        <Typography variant="body2">une PME etablie</Typography>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={3} sx={{
                      cursor: 'pointer', opacity: catSelector === 3 ? 1 : 0.5,


                    }}>
                      <Card
                        onClick={() => {
                          setCatSelector(3);
                          setSteps([...steps.filter((val) => val !== 'Entreprise')])
                        }}
                        sx={{
                          py: 5,
                          boxShadow: catSelector === 3 ? 0 : 5,
                          border: catSelector === 3 ? '1px solid red' : '0 solid red',
                          textAlign: 'center',
                          color: (theme) => theme.palette.success.darker,
                          bgcolor: (theme) => theme.palette.success.lighter,
                        }}

                      >
                        <StyledIcon
                          sx={{
                            color: (theme) => theme.palette.success.dark,
                            backgroundImage: (theme) =>
                              `linear-gradient(135deg, ${alpha(theme.palette.success.dark, 0)} 0%, ${alpha(
                                theme.palette.success.dark,
                                0.24
                              )} 100%)`,
                          }}
                        >
                          <Iconify icon="eva:search-fill" sx={{ color: '#000', width: 24, height: 24 }} />

                        </StyledIcon>
                        <Typography variant="body2">Femme entrepreneure</Typography>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={3} sx={{ cursor: 'pointer', opacity: catSelector === 4 ? 1 : 0.5 }}>
                      <Card
                        onClick={() => {
                          setCatSelector(4);
                          setSteps([...steps.filter((val) => val !== 'Entreprise')])
                        }}
                        sx={{
                          py: 5,
                          boxShadow: catSelector === 4 ? 0 : 5,
                          border: catSelector === 4 ? '1px solid red' : '0 solid red',
                          textAlign: 'center',
                          color: (theme) => theme.palette.warning.darker,
                          bgcolor: (theme) => theme.palette.warning.lighter,
                        }}

                      >
                        <StyledIcon
                          sx={{
                            color: (theme) => theme.palette.warning.dark,
                            backgroundImage: (theme) =>
                              `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
                                theme.palette.warning.dark,
                                0.24
                              )} 100%)`,
                          }}
                        >
                          <Iconify icon="eva:search-fill" sx={{ color: '#000', width: 24, height: 24 }} />

                        </StyledIcon>
                        <Typography variant="body2">PSDE (Prestataire)</Typography>
                      </Card>
                    </Grid>
                  </Grid>
                  <Typography variant="button" color="red" sx={{ display: 'block', textAlign: 'center' }}>{catError}</Typography>
                </>
                :
                activeStep === 1 ?

                  <Box sx={{ mt: 2, mb: 1 }} >
                    {
                      registeredUser && <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                      // minHeight="100vh"
                      >
                        <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                          <img src='../../../assets/verified.gif' alt="Success Gif" style={{ width: '15%', marginBottom: 2, alignSelf: 'center' }} />

                          <Typography variant="h5" gutterBottom>Compte créé avec succès!
                          </Typography>
                          <Typography>Un email a été envoyé à votre adresse pour confirmation.
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            sx={{ marginTop: 2 }}
                          >
                            Continuer
                          </Button>
                        </Paper>
                      </Box>
                    }
                    {

                      !registeredUser &&

                      <Box>

                        <Stack spacing={3}>
                          {errorRegister && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{errorRegister}</Typography>}
                          {isLoadingRegister && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>}

                          <TextField name="name" label="Nom complet" value={name} onChange={(e) => setName(e.target.value)} error={!!nameError} helperText={nameError} />
                          <TextField type="email" name="email" label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} error={!!emailError} helperText={emailError} />
                          <TextField type="tel" name="phone" label="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} error={!!phoneError} helperText={phoneError} />
                          <FormControl fullWidth error={!!sexError}>
                            <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={sex}
                              label="Sexe"
                              onChange={handleChange}
                            >
                              <MenuItem value="M">Masculin</MenuItem>
                              <MenuItem value="F">Féminin</MenuItem>
                              <MenuItem value="AUTRE">Autre</MenuItem>
                            </Select>
                            {!!sexError && <FormHelperText>Le sexe ne peut pas être vide</FormHelperText>}
                          </FormControl>
                          <TextField
                            name="password"
                            label="Mot de passe"
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!passwordError}
                            helperText={passwordError}
                            defaultValue="AUTRE"
                          />

                          <TextField
                            name="confirmPassword"
                            label="Confirmer le mot de passe"
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={!!confirmPasswordError}
                            helperText={confirmPasswordError}
                          />
                        </Stack>

                        <LoadingButton loading={isLoadingRegister} disabled={isLoadingRegister} sx={{ my: 2 }} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                          S'enregistrer
                        </LoadingButton>
                        {/* {errorRegister && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{errorRegister}</Typography>} */}


                        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                          <Typography variant="body" sx={{}}>Avez-vous un compte?</Typography>
                          <Link href="/login" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
                            Se connecter
                          </Link>
                        </Stack> */}

                      </Box>}
                  </Box>

                  : activeStep === 2 ?

                    // ADD ENTREPRISE
                    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

                      <Box mt={3} >


                        <Box
                          display="flex"
                          flexDirection="column"
                        >
                          <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', }}>
                            <Typography variant="h6" >
                              Enregistrer votre entreprise
                            </Typography>
                            <Typography variant="caption" sx={{ mb: 2 }}>
                              Créer un profil d'entreprise est simple et ne prend que 5 minutes.
                              Fournissez des informations de base sur votre entreprise et
                              enrichissez le profil avec des informations supplémentaires après la publication de la page.
                            </Typography>

                            <Stack spacing={3}>

                              <TextField
                                required
                                id="outlined-required"
                                label="Nom de l'Entreprise"
                                placeholder="Nom de l'Entreprise"
                                value={entrepriseName}
                                onChange={(e) => setEntrepriseName(e.target.value)}
                                error={!!entrepriseError} helperText={entrepriseError}
                              />

                              <TextField
                                required
                                id="outlined-required"
                                label="Detail simple de l'Entreprise"
                                placeholder="Detail simple de l'Entreprise"
                                value={miniBio}
                                onChange={(e) => setMiniBio(e.target.value)}
                                error={!!miniBioError} helperText={miniBioError}
                              />

                              <TextField
                                id="outlined-required"
                                label="Description de l'Entreprise"
                                placeholder="Description de l'Entreprise"
                                multiline
                                value={entrepriseDescription}
                                onChange={(e) => setEntrepriseDescription(e.target.value)}
                              />

                              <TextField
                                // shrink
                                id="outlined-required"
                                label="Date de création de l'Entreprise"
                                placeholder="2/2/2000"
                                // defaultValue={defaultDate}
                                type="date"
                                value={creationDate ? creationDate : defaultDate}
                                onChange={(e) => setCreationDate(e.target.value)}
                              />

                              <TextField
                                id="outlined-required"
                                label="Mission de l'Entreprise"
                                placeholder="Mission de l'Entreprise"
                                multiline
                                value={entrepriseMission}
                                onChange={(e) => setEntrepriseMission(e.target.value)}
                              />

                              <TextField
                                id="outlined-required"
                                label="Vision de l'Entreprise"
                                placeholder="Vision de l'Entreprise"
                                multiline
                                value={entrepriseVision}
                                onChange={(e) => setEntrepriseVision(e.target.value)}
                              />

                              <TextField
                                id="outlined-required"
                                label="Valeur de l'entreprise"
                                placeholder="Valeur de l'Entreprise"
                                multiline
                                value={entrepriseValue}
                                onChange={(e) => setEntrepriseValue(e.target.value)}
                              />

                              <TextField
                                id="outlined-required"
                                label="Addresse de l'entreprise"
                                placeholder="Addresse de l'Entreprise"
                                value={entrepriseAddress}
                                onChange={(e) => setEntrepriseAddress(e.target.value)}
                              />

                              <FormGroup>
                                <FormLabel component="legend">Secteur d'activité</FormLabel>
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="AGRO-TRANSFORMATION"
                                  onChange={() => setSecteurActivite([...secteurActivite, 'AGRO-TRANSFORMATION'])}
                                />
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="SERVICE"
                                  onChange={() => setSecteurActivite([...secteurActivite, 'SERVICE'])}
                                />
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="AUTRE"
                                  onChange={() => setSecteurActivite([...secteurActivite, 'AUTRE'])}
                                />
                              </FormGroup>

                              <FormControl>
                                <FormLabel id="radio-buttons">A quel stage etes-vous?</FormLabel>
                                <RadioGroup
                                  aria-labelledby="radio-buttons"
                                  name="radio-buttons-group"
                                  value={entrepriseStage}
                                  onChange={(e) => setEntrepriseStage(e.target.value)}
                                >
                                  <FormControlLabel value="Idée/Concept" control={<Radio />} label="Idée/Concept" />
                                  <FormControlLabel value="Startup" control={<Radio />} label="Startup" />
                                  <FormControlLabel
                                    value="Stade de croissance"
                                    control={<Radio />}
                                    label="Stade de croissance"
                                  />
                                  <FormControlLabel
                                    value="Stade de maturité"
                                    control={<Radio />}
                                    label="Stade de maturité"
                                  />
                                </RadioGroup>
                              </FormControl>

                              <FormGroup>
                                <FormLabel component="legend">Quel type de clients servez-vous ?</FormLabel>
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="B2B"
                                  onChange={() => setTypeOfClients([...typeOfClients, 'B2B'])}
                                />
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="B2C"
                                  onChange={() => setTypeOfClients([...typeOfClients, 'B2C'])}
                                />
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="B2B2B"
                                  onChange={() => setTypeOfClients([...typeOfClients, 'B2B2B'])}
                                />

                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="B2B2C"
                                  onChange={() => setTypeOfClients([...typeOfClients, 'B2B2C'])}
                                />

                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="C2C"
                                  onChange={() => setTypeOfClients([...typeOfClients, 'C2C'])}
                                />
                              </FormGroup>

                              <FormGroup>
                                <FormLabel component="legend">Où sont basés vos clients ?</FormLabel>
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="Clientèle Urbaine"
                                  onChange={() => setClientLocation([...clientLocation, 'Clientèle Urbaine'])}
                                />
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label=" Clientèle Rurale"
                                  onChange={() => setClientLocation([...clientLocation, 'Clientèle Rurale'])}
                                />
                              </FormGroup>

                              <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Quels sont vos secteurs d'activité?</InputLabel>
                                <Select
                                  labelId="demo-multiple-chip-label"
                                  id="demo-multiple-chip"
                                  multiple
                                  sx={{ width: "100%" }}
                                  value={sectorsOfActivity}
                                  onChange={handleChangeList}
                                  input={<OutlinedInput id="select-multiple-chip" label="Quels sont vos secteurs d'activité?" />}
                                  renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                      {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                      ))}
                                    </Box>
                                  )}
                                  MenuProps={MenuProps}
                                >
                                  {names.map((name) => (
                                    <MenuItem
                                      key={name}
                                      value={name}
                                      style={getStyles(name, sectorsOfActivity, theme)}
                                    >
                                      {name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>

                              {/* <Autocomplete
                                multiple
                                limitTags={2}
                                // options={optionsSector}
                                options={optionsSector.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                groupBy={(option) => option.firstLetter}
                                id="checkboxes-tags-demo"
                                disableCloseOnSelect
                                value={sectorsOfActivity}
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
                                onChange={(e, value) => setSectorsOfActivity(value)}
                                renderInput={(params) => (
                                  <TextField {...params} label="Quel sont vos secteurs d'activité?" placeholder="Ajouter un secteur" />
                                )}
                              /> */}

                              {errorCreateEntreprise && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{errorCreateEntreprise}</Typography>}

                              <LoadingButton loading={isLoadingCreateEntreprise} disabled={isLoadingCreateEntreprise} fullWidth size="large" type="submit" variant="contained" onClick={handleClickEntreprise}>
                                Publier et visualiser
                              </LoadingButton>
                            </Stack>
                          </Paper>
                        </Box>

                      </Box>
                    </Container>


                    : null
            }

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                variant="outlined"
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Retour
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              <Button onClick={handleNext} variant="outlined" disabled={ activeStep && !registeredUser}  >
                {activeStep === steps.length - 1 ? 'Fin' : 'Suivant'}
              </Button>
            </Box>

            <Link href="/dashboard/app" style={{ display:'block', cursor: 'pointer', textAlign:"center", color: 'red' }} variant="subtitle2" underline="hover">
          Retour à l'accueil
      </Link>
          </>
        )}
      </Box>
    </Container>
  );
}

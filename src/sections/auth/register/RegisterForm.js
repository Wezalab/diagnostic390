import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import { register } from '../../../redux/registerAction';

import Iconify from '../../../components/iconify';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registeredUser, errorRegister, isLoadingRegister } = useSelector((state) => state.register);

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

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
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
      if (!nameError && !emailError && !passwordError && !confirmPasswordError && !phoneError && !sexError) {

        // Dispatch registration action here
        console.log("registeredUser", await registeredUser);
        console.log(name, password, phone, confirmPassword, sex, email);
        // name, email, mobile, sex, password
        // if (name && email && password && confirmPassword && phone && sex) {
        //   await dispatch(register(name, email, phone, sex, password));
        //   await dispatch(login(email,password));
        // }

        dispatch(register(name, email, phone, sex, password))
          .then(() => {
            // Dispatch login action after successful registration
            // dispatch(login(email, password));
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

  return (
    <>
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
              onClick={() => navigate('/login', { replace: true })
              }
              sx={{ marginTop: 2 }}
            >
              Connectez-vous maintenant
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

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <Typography variant="body" sx={{}}>Avez-vous un compte?</Typography>
            <Link href="/login" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
              Se connecter
            </Link>
          </Stack>

        </Box>
      }
    </>
  );
}

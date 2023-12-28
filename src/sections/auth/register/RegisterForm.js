import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography, CircularProgress, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Iconify from '../../../components/iconify';
import { login } from '../../../redux/loginAction';

import { store } from '../../../redux/Store';

import { fetchDoctors } from '../../../redux/doctorsReducer';
import { fetchPatients } from '../../../redux/patientsReducer';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const { error, isLoading } = useSelector((state) => state.auth);


  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    // store.dispatch(fetchDoctors());
    // store.dispatch(fetchPatients());

    // dispatch(login(email, password));
  };

  return (
    <>
      <Stack spacing={3}>
        {error && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{error}</Typography>}
        {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>}

        <TextField name="name" label="Nom complet" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField name="email" label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} />

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
        />
      </Stack>

      <LoadingButton sx={{ my: 2 }} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        S'enregistrer
      </LoadingButton>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Typography variant="body" sx={{}}>Avez-vous un compte?</Typography>
        <Link href="/login" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
          Se connecter
        </Link>
      </Stack>

    </>
  );
}

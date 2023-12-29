import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Link, Stack, IconButton, InputAdornment, TextField, Typography, CircularProgress, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Iconify from '../../../components/iconify';

export default function RegisterForm() {

  const { error, isLoading } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [sex, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Stack spacing={3}>
        {error && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{error}</Typography>}
        {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>}

        <TextField name="name" label="Nom complet" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField name="email" label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sex}
            label="Sexe"
            onChange={handleChange}
          >
            <MenuItem value="M">Masculin</MenuItem>
            <MenuItem value="F">Feminin</MenuItem>
            <MenuItem value="AUTRE">Autre</MenuItem>
          </Select>
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
        />

        <TextField
          name="password"
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

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useWooCommerceAPI from '../../../hooks/useWooCommerceAPI';


import Iconify from '../../../components/iconify';
import { login } from '../../../redux/loginAction';

import { store } from '../../../redux/Store';
import { fetchEntreprises } from '../../../redux/entrepriseReducer';

export default function LoginForm() {
  const dispatch = useDispatch();

  const { error, isLoading } = useSelector((state) => state.auth);

  const {
    customers,
    // loading,
    // error,
  } = useWooCommerceAPI();

  const [localError, setLocalError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      // Check if email or password is empty
      // Set an error message
      setLocalError("L'e-mail ou le mot de passe ne peut pas être vide")

      return;
    }

    console.log("customers", customers);
   
    setLocalError('')
    store.dispatch(fetchEntreprises());

    dispatch(login(email, password));
  };

  return (
    <>
      <Stack spacing={3}>
       
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

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link href="/resetPassword" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
          Mot de passe oublié?
        </Link>
      </Stack>

      {error && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{error}</Typography>}
      {localError && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{localError}</Typography>}

      <LoadingButton loading={isLoading} disabled={isLoading} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Se connecter
      </LoadingButton>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Typography variant="body" sx={{}}>Voulez-vous créer un compte?</Typography>

        <Link href="/register" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
          Créer un compte
        </Link>
      </Stack>
      <Link href="/dashboard/app" style={{ cursor: 'pointer', textAlign: "center", color: 'red' }} variant="subtitle2" underline="hover">
        Retour à l'accueil
      </Link>

    </>
  );
}

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import querystring from 'querystring';

import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography, CircularProgress, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// import axios from 'axios';

import Iconify from '../../../components/iconify';
import { login } from '../../../redux/loginAction';

import { store } from '../../../redux/Store';
import { fetchEntreprises } from '../../../redux/entrepriseReducer';

export default function LoginForm() {
  const dispatch = useDispatch();

  const { error, isLoading } = useSelector((state) => state.auth);
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

    // const storeUrl = 'https://central-achat.alphanewgroup.com/';
    // const endpoint = 'wc-auth/v1/authorize';

    // const params = {
    //   app_name: 'My App Name',
    //   scope: 'read_write',
    //   user_id: 123,
    //   return_url: 'https://diagnostic360.netlify.app/dashboard/app',
    //   callback_url: 'https://diagnostic360.netlify.app/dashboard/app',
    // };

    // const queryString = querystring.stringify(params);

    // const url = `${storeUrl}${endpoint}?${queryString}`.toString();


    // // Example of JSON posted with the API Keys
    // const apiKeys = {
    //   key_id: "1",
    //   user_id: "123",
    //   consumer_key: 'ck_72a265661d99bbcf4b37a5ac44a7780e54f948b5',
    //   consumer_secret: 'cs_3b10064f35856f8d2ebf27e2ac8522c9480ee4e9',
    //   key_permissions: 'read_write'
    // };

    // // Using Axios to send the API keys
    // axios.post(url, apiKeys)
    //   .then(response => {
    //     console.log('API Response:', response.data);

    //     return response.data
    //   })
    //   .catch(error => {
    //     console.error('Error making API request:', error.message);
    //   });

    // console.log("take ==> ", {
    //   storeUrl, endpoint, queryString, apiKeys
    // });

    // const response = await axios.post(`https://diagnostic-swyu.onrender.com/auth/central-achat`, {
    //   url, apiKeys
    // });

    // console.log(response.data);


    setLocalError('')
    store.dispatch(fetchEntreprises());

    dispatch(login(email, password));
  };

  return (
    <>
      <Stack spacing={3}>
        {error && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{error}</Typography>}
        {localError && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{localError}</Typography>}
        {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>}
       
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
        <Link href="#" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
          Mot de passe oublié?
        </Link>
      </Stack>

      <LoadingButton loading={isLoading} disabled={isLoading} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Se connecter
      </LoadingButton>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Typography variant="body" sx={{}}>Voulez-vous Créer un compte?</Typography>

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

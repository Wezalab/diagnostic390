import { useState } from 'react';
import {  useSelector } from 'react-redux';

import { Link, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useWooCommerceAPI from '../../../hooks/useWooCommerceAPI';

export default function ResetPasswordForm() {

  const { error, isLoading } = useSelector((state) => state.auth);

  const {
    customers,
    // loading,
    // error,
  } = useWooCommerceAPI();

  const [localError, setLocalError] = useState("");
  const [email, setEmail] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    if (!email) {
      // Check if email is empty
      // Set an error message
      setLocalError("L'e-mail  ne peut pas être vide");

      return;
    }

    console.log("customers", customers);
   
    setLocalError('')
    // store.dispatch(fetchEntreprises());

    // dispatch(login(email, password));
  };

  return (
    <>
    <SvgIcon component="svg" fill="none" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
        {/* SVG path */}
      </SvgIcon>
      <Stack alignItems="center">
        <Typography variant="body2" sx={{textAlign:'center', paddingBottom:2}} >
        Veuillez saisir l'adresse e-mail associée à votre compte et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </Typography>
      </Stack>
      <Stack spacing={3} mb={2}>
        <TextField name="email" label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Stack>

      {error && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{error}</Typography>}
      {localError && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{localError}</Typography>}

      <LoadingButton sx={{ textTransform:'none'}} loading={isLoading} disabled={isLoading} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Recuper le mots de passe
      </LoadingButton>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>

        <Link href="/login" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
          Se connecter
        </Link>
        <Link href="/register" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
          Créer un compte
        </Link>
      </Stack>
      

    </>
  );
}

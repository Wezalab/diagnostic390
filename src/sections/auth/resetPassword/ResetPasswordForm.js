import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Grid, Link, Stack, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from "@material-ui/core/styles";

import Iconify from '../../../components/iconify';

import useWooCommerceAPI from '../../../hooks/useWooCommerceAPI';


const useStyles = makeStyles(() => ({
  codeInput: {
    '& input': {
      textAlign: 'center',
      padding: '10px 0', // Adjust padding as needed
      border: '1px solid #ced4da', // Add border
      borderRadius: '4px', // Add border radius
    },
  },
}));


// const { userId } = req.params;
//     const { newPassword, confirmPassword } = req.body;

//     /reset-password-no-token/:userId/
export default function ResetPasswordForm() {

  const classes = useStyles();

  const { error, isLoading } = useSelector((state) => state.auth);

  const {
    customers,
    // loading,
    // error,
  } = useWooCommerceAPI();

  const [localError, setLocalError] = useState("");
  const [email, setEmail] = useState('');


  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {

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


      // If there are no errors, proceed with registration
      if (password && confirmPassword) {
        // Dispatch registration action here
        console.log(password, confirmPassword);


        // dispatch(register(name, email, phone, sex, password, role))
        //   .then((data) => {
        //     console.log("data", data);
        //     setLatestCreatedUser(data.userId);
        //     seErrorSaveUser('')
        //   })
        //   .catch((error) => {
        //     seErrorSaveUser(`Erreur: ${error}`);

        //     console.error('Registration error:', error);
        //   });

        //   postCustomer({ "first_name": name, name, email, password })
        //   .then((data) => {

        //     // If successfully create a user to woocommerce
        //     if (data === "Création réussie") {
        //       setErrorWooCommerce('');
        //       seErrorSaveUser('')
        //     }
        //     else {
        //       setErrorWooCommerce(data)
        //     }

        //   })
        //   .catch((e) => {
        //     seErrorSaveUser(`Erreur ${e?.message}`);

        //     console.error('Error creating customer:', e.message);
        //   });

        console.log();
      }
    } catch (e) {
      console.log("errorRegister", e);
      console.log(e);
    }
  };

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

  const otp = () =>
    <>
      <Grid item container xs={12} spacing={3}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Grid item xs={2} key={index}>
            <TextField
              fullWidth
              id={`code-${index}`}
              label=""
              variant="outlined"
              placeholder="-"
              inputProps={{ maxLength: 1 }}
              className={classes.codeInput}
            />
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} textAlign="center" sx={{my: 3}}>
        <Typography variant="body2">
          Vous n'avez pas eu de code ? <Link href="#">Renvoyer le code</Link>

        </Typography>
      </Grid>

      <LoadingButton sx={{ textTransform: 'none' }} loading={isLoading} disabled={isLoading} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Verifier
      </LoadingButton>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>

      <Link href="/resetPassword" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
        Retour
      </Link>
      <Link href="/dashboard/app" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
        Annuler
      </Link>
    </Stack>
    </>

  const passwords = () =>  <Stack spacing={3}>
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
    <LoadingButton sx={{ textTransform: 'none' }} loading={isLoading} disabled={isLoading} fullWidth size="large" type="submit" variant="contained" onClick={handleChangePassword}>
     Changer le mots de passe
    </LoadingButton>
    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>


<Link href="/dashboard/app" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
  Annuler
</Link>
</Stack>
  </Stack>

  const resetPassword = () => <Stack spacing={3}>
    <Stack alignItems="center">
      <Typography variant="body2" sx={{ textAlign: 'center', paddingBottom: 2 }} >
        Veuillez saisir l'adresse e-mail associée à votre compte et nous vous enverrons un code pour réinitialiser votre mot de passe.
      </Typography>
    </Stack>
    <Stack spacing={3} mb={2}>
      <TextField name="email" label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </Stack>

    {error && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{error}</Typography>}
    {localError && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{localError}</Typography>}

    <LoadingButton sx={{ textTransform: 'none' }} loading={isLoading} disabled={isLoading} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
      Envoyer le code
    </LoadingButton>

    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>

      <Link href="/login" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
        Se connecter
      </Link>
      <Link href="/register" style={{ cursor: 'pointer' }} variant="subtitle2" underline="hover">
        Créer un compte
      </Link>
    </Stack></Stack>


  return (
    <>

      {
        resetPassword()
      }
      {
        otp()
      }
      {
        passwords()
      }

    </>
  );
}

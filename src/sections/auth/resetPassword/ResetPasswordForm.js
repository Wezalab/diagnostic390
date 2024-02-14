import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Link, Stack, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from "@material-ui/core/styles";
import { store } from '../../../redux/Store';

import { fetchUsers, sendResetPassword, sendResetPasswordEmail } from '../../../redux/listUserReducer';
import { login } from '../../../redux/loginAction';


import Iconify from '../../../components/iconify';
import { GenerateOTPCode } from '../../../constants/GenerateOTPCode';

// import useWooCommerceAPI from '../../../hooks/useWooCommerceAPI';

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

export default function ResetPasswordForm() {
  const dispatch = useDispatch();
  const classes = useStyles();

    //  react-hooks/exhaustive-deps
    useEffect(() => {
      store.dispatch(fetchUsers());
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const {userList, errorOTP, isLoadingSendOTP, isLoadingSendChangePassword, errorChangePassword } = useSelector((state) => state.listUser);
  const { isLoading } = useSelector((state) => state.auth);
  
  // const {
  //   customers,
  //   // loading,
  //   // error,
  // } = useWooCommerceAPI();

  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState('');

  // OTP Features
  const [emailSent, setEmailSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [verificationCode, setVerificationCode] = useState(Array(6).fill(''));
  const [verificationCodeError, setVerificationError] = useState("");


  const handleChange = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);
  };

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

        const user = userList.find((val)=> val.email === email);
        console.log("user", user._id);

        await dispatch(sendResetPassword({"userId":user._id, newPassword: password, confirmPassword }))
        .then(async (data) => {
          console.log("data000", data);
          if (data?.payload?.message === "Mot de passe réinitialisé avec succès") {
            // setEmailSent(true);
            await dispatch(login(email, password));
          }
        })
        .catch((error) => {
          console.error('Send code:', error);
        });




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

  const handleVerifyCode = async (e) => {
    e.preventDefault();

    console.log(email);
    console.log(otpCode);
    const code = verificationCode.join('');
    console.log(code); // Do whatever you want with the code
    if (otpCode !== code) {
      setVerificationError("Le code n'est pas valide")
    }else{
      setVerificationError('');
      setOtpCode('');
    }
  }

  const handleSendCode = async (e) => {
    e.preventDefault();

    if (!email) {
      // Check if email is empty
      // Set an error message
      setEmailError("L'e-mail ne peut pas être vide!");

      return;
    }

    setEmailError('')

    console.log((email, { "code": otpCode }));
    const code = GenerateOTPCode()
    setOtpCode(code);


    await dispatch(sendResetPasswordEmail({ email, code }))
      .then(async (data) => {

        if (data?.payload?.message === "E-mail de réinitialisation envoyé avec succès") {
          setEmailSent(true);
        }
      })
      .catch((error) => {
        console.error('Send code:', error);
      });

  };

  const otp = () =>
    <>
      <Typography variant="body2" sx={{ textAlign: 'center', paddingBottom: 2 }} >
        Veuillez saisir le code reçu dans votre email.
      </Typography>
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
              value={verificationCode[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              error={!!verificationCodeError}
            />
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} textAlign="center" sx={{ my: 3 }}>
        <Typography variant="body2">
          Vous n'avez pas eu de code ? <Link sx={{cursor:"pointer"}} onClick={()=> {
            setEmailSent(false);
            setOtpCode('');
            setVerificationError('')

            } }>Renvoyer le code</Link>

        </Typography>
      </Grid>

      {verificationCodeError && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{verificationCodeError}</Typography>}

      <LoadingButton sx={{ textTransform: 'none' }} fullWidth size="large" type="submit" variant="contained" onClick={handleVerifyCode}>
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

  const passwords = () => <Stack spacing={3}>
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

    {errorChangePassword && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{errorChangePassword}</Typography>}
    <LoadingButton sx={{ textTransform: 'none' }} loading={isLoadingSendChangePassword || isLoading} disabled={isLoadingSendChangePassword || isLoading} fullWidth size="large" type="submit" variant="contained" onClick={handleChangePassword}>
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
      <TextField name="email" error={!!emailError} label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </Stack>

    {errorOTP && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{errorOTP}</Typography>}
    {emailError && <Typography variant="body" sx={{ textAlign: 'center', color: 'red', mb: 3 }}>{emailError}</Typography>}

    <LoadingButton sx={{ textTransform: 'none' }} loading={isLoadingSendOTP} disabled={isLoadingSendOTP} fullWidth size="large" type="submit" variant="contained" onClick={handleSendCode}>
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
        !emailSent ?
          resetPassword() :

          otpCode ? otp() : passwords()

      }


    </>
  );
}

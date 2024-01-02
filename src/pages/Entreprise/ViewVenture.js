/* eslint no-unneeded-ternary: "error" */

import { Helmet } from 'react-helmet-async';

// @mui
import {
  Container, Typography
} from '@mui/material';
// components
// import Scrollbar from '../../components/scrollbar';
// sections


export default function ViewVenture() {
  
  return (
    <>
      <Helmet>
        <title> TRANSFORME | View Venture </title>
      </Helmet>

      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

        <Typography>Ok</Typography>

      </Container>

    </>
  );
}

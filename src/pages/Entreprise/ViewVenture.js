import { Helmet } from 'react-helmet-async';

// @mui
import {
  Container, Typography, Card, IconButton, CardActions, CardContent, CardHeader,
  CardMedia, Breadcrumbs, Link, Tab, Box, useTheme, Tabs, AppBar
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useLocation } from "react-router-dom";

import { useState } from 'react';
import PropTypes from 'prop-types';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ViewVenture() {

  const location = useLocation();
  const myEntreprise = location.state;
  console.log("myEntreprise", myEntreprise);

  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Helmet>
        <title> TRANSFORME | View Venture </title>
      </Helmet>

      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

      <Breadcrumbs aria-label="breadcrumb" sx={{ alignSelf:'flex-start', marginBottom: 2 }}  >
        <Link underline="hover" color="inherit" href="/">
          Dashboard
        </Link>
        <Typography color="text.primary">Application</Typography>
      </Breadcrumbs>
        <Card >
          <CardHeader
            avatar={
              // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              //   R
              // </Avatar>
              <Box>
              <img src='../../../assets/empty.jpg' alt="profile" style={{ width: 100}} />
              
              <Typography variant="caption" >Changer la photo</Typography>
              </Box>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={myEntreprise.company_name}
            subheader={myEntreprise.mini_bio}
            
          />
          {/* <CardMedia
            component="img"
            height="194"
            image="../../../assets/empty.jpg"
            alt="Paella dish"
          /> */}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
             {myEntreprise.project_description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>

            <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Identité de l'entreprise" {...a11yProps(0)} />
                  <Tab label="Business model" {...a11yProps(1)} />
                  <Tab label="Culture d'entreprise" {...a11yProps(2)} />
                  <Tab label="Business PLAN & Prévision financière" {...a11yProps(3)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                Identité de l'entreprise
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  Business model
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  Culture d'entreprise
                </TabPanel>

                <TabPanel value={value} index={3} dir={theme.direction}>
                  Business PLAN & Prévision financière
                </TabPanel>
              </SwipeableViews>
            </Box>
          </CardActions>
        </Card>
      </Container>

    </>
  );
}

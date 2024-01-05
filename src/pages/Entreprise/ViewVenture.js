import { Helmet } from 'react-helmet-async';

// @mui
import {
  Container, Typography, Card, IconButton, CardActions, CardContent, CardHeader,
  CardMedia, Breadcrumbs, Link, Tab, Box, useTheme, Tabs, AppBar, Button, TextField
} from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import SwipeableViews from 'react-swipeable-views';
import { useLocation } from "react-router-dom";

import { useState } from 'react';
import PropTypes from 'prop-types';
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

  const [ openCompanyname, setOpenCompanyname ] = useState(false);
  const [ openMinibio, setOpenMinibio ] = useState(false);
  const [ openProjectdescription, setOpenProjectdescription ] = useState(false);
  const [ openFoundingdate, setOpenFoundingdate ] = useState(false);
  const [ openEntrepriseMission, setOpenEntrepriseMission ] = useState(false);
  const [ openValeur, setOpenValeur ] = useState(false);
  const [ openfulladdress, setOpenfulladdress ] = useState(false);
  const [ openSecteur, setOpenSecteur ] = useState(false);
  const [ openStage, setOpenStage ] = useState(false);
  const [ opentypeOfClients, setOpenTypeOfClients ] = useState(false);
  const [ openclientLocation, setOpenclientLocation ] = useState(false);
  const [ openSecteuractivitedetails, setOpenSecteuractivitedetails ] = useState(false);

  const [editing, setEditing] = useState(false);
  const [newStage, setNewStage] = useState(myEntreprise.stage); // Assuming myEntreprise is available

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setNewStage(myEntreprise.stage); // Reset to original value
  };

  const handleSaveClick = () => {
    // Perform the save logic with the newStage value
    setEditing(false);
  };

  const handleClickCompanyname = () => {
   setOpenCompanyname(!openCompanyname);
  }
  const handleClickMinibio = () => {
   setOpenMinibio(!openMinibio);
  }
  const handleClickProjectdescription = () => {
   setOpenProjectdescription(!openProjectdescription);
  }
  const handleClickFoundingdate = () => {
   setOpenFoundingdate(!openFoundingdate);
  }
  const handleClickEntrepriseMission = () => {
   setOpenEntrepriseMission(!openEntrepriseMission);
  }
  const handleClickValeur = () => {
   setOpenValeur(!openValeur);
  }
  const handleClickfulladdress = () => {
   setOpenfulladdress(!openfulladdress);
  }
  const handleClicksecteur = () => {
   setOpenSecteur(!openSecteur);
  }
  const handleClickStage = () => {
    setOpenStage(!openStage);
  };
  const handleClicktypeOfClients = () => {
   setOpenTypeOfClients(!opentypeOfClients);
  }
  const handleClickclientLocation = () => {
   setOpenclientLocation(!openclientLocation);
  }
  const handleClicksecteuractivitedetails = () => {
   setOpenSecteuractivitedetails(!openSecteuractivitedetails);
  }


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

        <Breadcrumbs aria-label="breadcrumb" sx={{ alignSelf: 'flex-start', marginBottom: 2 }}  >
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
                <img src='../../../assets/empty.jpg' alt="profile" style={{ width: 100 }} />

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
          <CardMedia
            component="img"
            height="194"
            image="../../../assets/empty.jpg"
            alt="Paella dish"
          />
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
                  <Tab label="Equipe" {...a11yProps(1)} />
                  <Tab label="Finances" {...a11yProps(1)} />
                  <Tab label="Business model" {...a11yProps(1)} />
                  {/* <Tab label="Culture d'entreprise" {...a11yProps(2)} /> */}
                  <Tab label="Business Plan " {...a11yProps(3)} />
                  <Tab label="Prévisions financières" {...a11yProps(3)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Box sx={{ display: 'flex', }} >
                    <List
                      sx={{ width: '100%', bgcolor: 'background.paper' }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                    // subheader={
                    //   <ListSubheader component="div" id="nested-list-subheader">
                    //     Nested List Items
                    //   </ListSubheader>
                    // }
                    >

                      <ListItemButton>
                        <ListItemText primary="Nom de l'Entreprise" secondary={myEntreprise.company_name} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openCompanyname ? <ExpandLess onClick={handleClickCompanyname} /> : <ExpandMore onClick={handleClickCompanyname} />}
                      </ListItemButton>
                      <Collapse in={openCompanyname} timeout="auto" unmountOnExit sx={{padding: 2, background:'aliceblue'}} >
                        <Typography sx={{color:"red"}}>Coaching score!</Typography>
                      </Collapse>

                      <ListItemButton>
                        <ListItemText primary="Detail simple de l'Entreprise" secondary={myEntreprise.mini_bio} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openMinibio ? <ExpandLess onClick={handleClickMinibio} /> : <ExpandMore onClick={handleClickMinibio} />}
                      </ListItemButton>
                      <Collapse in={openMinibio} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>

                      <ListItemButton>
                        <ListItemText primary="Description de l'Entreprise" secondary={myEntreprise.project_description} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openProjectdescription ? <ExpandLess onClick={handleClickProjectdescription} /> : <ExpandMore onClick={handleClickProjectdescription} />}
                      </ListItemButton>
                      <Collapse in={openProjectdescription} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>

                      <ListItemButton>
                        <ListItemText primary="Date de création de l'Entreprise" secondary={myEntreprise.founding_date} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openFoundingdate ? <ExpandLess onClick={handleClickFoundingdate} /> : <ExpandMore onClick={handleClickFoundingdate} />}
                      </ListItemButton>
                      <Collapse in={openFoundingdate} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>


                      <ListItemButton>
                        <ListItemText primary="Mission de l'Entreprise" secondary={myEntreprise.entrepriseMission} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openEntrepriseMission ? <ExpandLess onClick={handleClickEntrepriseMission} /> : <ExpandMore onClick={handleClickEntrepriseMission} />}
                      </ListItemButton>
                      <Collapse in={openEntrepriseMission} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>

                      <ListItemButton>
                        <ListItemText primary="Valeur de l'entreprise" secondary={myEntreprise.valeur} />
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openValeur ? <ExpandLess onClick={handleClickValeur} /> : <ExpandMore onClick={handleClickValeur} />}
                      </ListItemButton>
                      <Collapse in={openValeur} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>


                      <ListItemButton>
                        <ListItemText primary="Addresse de l'entreprise" secondary={myEntreprise.full_address} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openfulladdress ? <ExpandLess onClick={handleClickfulladdress} /> : <ExpandMore onClick={handleClickfulladdress} />}
                      </ListItemButton>
                      <Collapse in={openfulladdress} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>


                      <ListItemButton>
                        <ListItemText primary="Secteur d'activité" secondary={myEntreprise.secteur} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openSecteur ? <ExpandLess onClick={handleClicksecteur} /> : <ExpandMore onClick={handleClicksecteur} />}
                      </ListItemButton>
                      <Collapse in={openSecteur} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>


                      {/* <ListItemButton>
                        <ListItemText primary="A quel stage etes-vous?" secondary={myEntreprise.stage} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openStage ? <ExpandLess onClick={handleClickStage} /> : <ExpandMore onClick={handleClickStage} />}
                      </ListItemButton> */}

<ListItemButton>
      {editing ? (
        <>
          <TextField
            label="New Stage"
            value={newStage}
            onChange={(e) => setNewStage(e.target.value)}
          />
          <Button onClick={handleSaveClick}>Save</Button>
          <Button onClick={handleCancelClick}>Cancel</Button>
        </>
      ) : (
        <>
          <ListItemText primary="A quel stage etes-vous?" secondary={myEntreprise.stage} />
          <ListItemIcon>
            {openStage ? (
              <CloseIcon onClick={handleClickStage} />
            ) : (
              <EditIcon onClick={handleEditClick} />
            )}
          </ListItemIcon>
          {openStage ? <ExpandLess onClick={handleClickStage} /> : <ExpandMore onClick={handleClickStage} />}
        </>
      )}
    </ListItemButton>


                      <Collapse in={openStage} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>


                      <ListItemButton>
                        <ListItemText primary="Quel type de clients servez-vous ?" secondary={myEntreprise.typeOfClients} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {opentypeOfClients ? <ExpandLess onClick={handleClicktypeOfClients} /> : <ExpandMore onClick={handleClicktypeOfClients} />}
                      </ListItemButton>
                      <Collapse in={opentypeOfClients} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>

                      <ListItemButton>
                        <ListItemText primary="Où sont basés vos clients ?" secondary={myEntreprise.clientLocation} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openclientLocation ? <ExpandLess onClick={handleClickclientLocation} /> : <ExpandMore onClick={handleClickclientLocation} />}
                      </ListItemButton>
                      <Collapse in={openclientLocation} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>

                      <ListItemButton>
                        <ListItemText primary="Quel sont vos secteurs d'activité?" secondary={myEntreprise.secteur_activite_details} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openSecteuractivitedetails ? <ExpandLess onClick={handleClicksecteuractivitedetails} /> : <ExpandMore onClick={handleClicksecteuractivitedetails} />}
                      </ListItemButton>
                      <Collapse in={openSecteuractivitedetails} timeout="auto" unmountOnExit sx={{padding: 2}}>
                        <Typography sx={{color:"red"}}>Coaching score</Typography>
                      </Collapse>
                    </List>
                  </Box>
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

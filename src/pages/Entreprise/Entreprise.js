/* eslint-disable no-unused-vars */


import { Helmet } from 'react-helmet-async';

// @mui
import {
  Container, Typography, Card, IconButton, CardActions, CardContent, CardHeader,
  CardMedia, Breadcrumbs, Link, Tab, Box, useTheme, Tabs, AppBar, Button, TextField, Stack
} from '@mui/material';
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

import { useState } from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';

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

export default function Entreprise() {

  const { entrepriseList } = useSelector((state) => state.entreprise);

  const myEntreprise = entrepriseList[0];
  console.log("myEntreprise", myEntreprise);

  const [value, setValueTab] = useState(0);
  const theme = useTheme();

  const [openCompanyName, setOpenCompanyName] = useState(false);
  const [openMinibio, setOpenMinibio] = useState(false);
  const [openProjectDescription, setOpenProjectDescription] = useState(false);
  const [openFoundingdate, setOpenFoundingdate] = useState(false);
  const [openEntrepriseMission, setOpenEntrepriseMission] = useState(false);
  const [openEntrepriseVision, setOpenEntrepriseVision] = useState(false);
  const [openValeur, setOpenValeur] = useState(false);
  const [openfullAddress, setOpenfullAddress] = useState(false);
  const [openSecteur, setOpenSecteur] = useState(false);
  const [openStage, setOpenStage] = useState(false);
  const [opentypeOfClients, setOpenTypeOfClients] = useState(false);
  const [openClientLocation, setOpenClientLocation] = useState(false);
  const [openSecteurActiviteDetails, setOpenSecteurActiviteDetails] = useState(false);

  // Team
  // Document ? RCCM, ID NAT, 
  // Etat fin 3 derniere annee

  const [editingCompanyName , setEditingCompanyName ] = useState(false);
  const [newCompanyName , setNewCompanyName ] = useState(myEntreprise.company_name); // Assuming myEntreprise is available

  const [editingMinibio , setEditingMinibio ] = useState(false);
  const [newMinibio , setNewMinibio ] = useState(myEntreprise.mini_bio ); // Assuming myEntreprise is available

  const [editingProjectDescription , setEditingProjectDescription ] = useState(false);
  const [newProjectDescription , setNewProjectDescription ] = useState(myEntreprise.project_description ); // Assuming myEntreprise is available

  const [editingFoundingdate , setEditingFoundingdate ] = useState(false);
  const [newFoundingdate , setNewFoundingdate ] = useState(myEntreprise.Foundingdate ); // Assuming myEntreprise is available


  const [editingEntrepriseMission , setEditingEntrepriseMission ] = useState(false);
  const [newEntrepriseMission , setNewEntrepriseMission ] = useState(myEntreprise.project_mission ); // Assuming myEntreprise is available

  const [editingEntrepriseVision , setEditingEntrepriseVision ] = useState(false);
  const [newEntrepriseVision , setNewEntrepriseVision ] = useState(myEntreprise.project_mission ); // Assuming myEntreprise is available

  const [editingValeur , setEditingValeur ] = useState(false);
  const [newValeur , setNewValeur ] = useState(myEntreprise.valeur ); // Assuming myEntreprise is available


  const [editingFullAddress , setEditingFullAddress ] = useState(false);
  const [newFullAddress , setNewFullAddress ] = useState(myEntreprise.FullAddress ); // Assuming myEntreprise is available

  const [editingSecteur , setEditingSecteur ] = useState(false);
  const [newSecteur , setNewSecteur ] = useState(myEntreprise.Secteur ); // Assuming myEntreprise is available


  const [editingTypeOfClients , setEditingTypeOfClients ] = useState(false);
  const [newTypeOfClients , setNewTypeOfClients ] = useState(myEntreprise.TypeOfClients ); // Assuming myEntreprise is available

  const [editingClientLocation , setEditingClientLocation ] = useState(false);
  const [newClientLocation , setNewClientLocation ] = useState(myEntreprise.ClientLocation ); // Assuming myEntreprise is available

  const [editingSecteurActiviteDetails , setEditingSecteurActiviteDetails ] = useState(false);
  const [newSecteurActiviteDetails , setNewSecteurActiviteDetails ] = useState(myEntreprise.SecteurActiviteDetails ); // Assuming myEntreprise is available

  const [editingStage, setEditingStage] = useState(false);
  const [newStage, setNewStage] = useState(myEntreprise.stage); // Assuming myEntreprise is available


  const handleEditCompanyName = () => {
    setEditingCompanyName(true);
  };

  const handleCancelCompanyName = () => {
    setEditingCompanyName(false);
    setNewCompanyName(myEntreprise.company_name); // Reset to original value
  };

  const handleSaveClickCompanyName = () => {
    // Perform the save logic with the newCompanyName value
    setEditingCompanyName(false);
  };

  const handleEditMinibio = () => {
    setEditingMinibio(true);
  };

  const handleCancelMinibio = () => {
    setEditingMinibio(false);
    setNewMinibio(myEntreprise.mini_bio); // Reset to original value
  };

  const handleSaveClickMinibio = () => {
    // Perform the save logic with the newMinibio value
    setEditingMinibio(false);
  };



  const handleEditProjectDescription = () => {
    setEditingProjectDescription(true);
  };

  const handleCancelProjectDescription = () => {
    setEditingProjectDescription(false);
    setNewProjectDescription(myEntreprise.project_description); // Reset to original value
  };

  const handleSaveClickProjectDescription = () => {
    // Perform the save logic with the newProjectDescription value
    setEditingProjectDescription(false);
  };



  const handleEditFoundingdate = () => {
    setEditingFoundingdate(true);
  };

  const handleCancelFoundingdate = () => {
    setEditingFoundingdate(false);
    setNewFoundingdate(myEntreprise.Foundingdate); // Reset to original value
  };

  const handleSaveClickFoundingdate = () => {
    // Perform the save logic with the newFoundingdate value
    setEditingFoundingdate(false);
  };




  const handleEditEntrepriseMission = () => {
    setEditingEntrepriseMission(true);
  };

  const handleCancelEntrepriseMission = () => {
    setEditingEntrepriseMission(false);
    setNewEntrepriseMission(myEntreprise.EntrepriseMission); // Reset to original value
  };

  const handleSaveClickEntrepriseMission = () => {
    // Perform the save logic with the newEntrepriseMission value
    setEditingEntrepriseMission(false);
  };



  const handleEditFullAddress = () => {
    setEditingFullAddress(true);
  };

  const handleCancelFullAddress = () => {
    setEditingFullAddress(false);
    setNewFullAddress(myEntreprise.FullAddress); // Reset to original value
  };

  const handleSaveClickFullAddress = () => {
    // Perform the save logic with the newFullAddress value
    setEditingFullAddress(false);
  };



  const handleEditSecteur = () => {
    setEditingSecteur(true);
  };

  const handleCancelSecteur = () => {
    setEditingSecteur(false);
    setNewSecteur(myEntreprise.Secteur); // Reset to original value
  };

  const handleSaveClickSecteur = () => {
    // Perform the save logic with the newSecteur value
    setEditingSecteur(false);
  };




  const handleEditValeur = () => {
    setEditingValeur(true);
  };

  const handleCancelValeur = () => {
    setEditingValeur(false);
    setNewValeur(myEntreprise.Valeur); // Reset to original value
  };

  const handleSaveClickValeur = () => {
    // Perform the save logic with the newValeur value
    setEditingValeur(false);
  };



  const handleEditEntrepriseVision = () => {
    setEditingEntrepriseVision(true);
  };

  const handleCancelEntrepriseVision = () => {
    setEditingEntrepriseVision(false);
    setNewEntrepriseVision(myEntreprise.EntrepriseVision); // Reset to original value
  };

  const handleSaveClickEntrepriseVision = () => {
    // Perform the save logic with the newEntrepriseVision value
    setEditingEntrepriseVision(false);
  };

  const handleEditTypeOfClients = () => {
    setEditingTypeOfClients(true);
  };

  const handleCancelTypeOfClients = () => {
    setEditingTypeOfClients(false);
    setNewTypeOfClients(myEntreprise.TypeOfClients); // Reset to original value
  };

  const handleSaveClickTypeOfClients = () => {
    // Perform the save logic with the newTypeOfClients value
    setEditingTypeOfClients(false);
  };

  const handleEditClientLocation = () => {
    setEditingClientLocation(true);
  };

  const handleCancelClientLocation = () => {
    setEditingClientLocation(false);
    setNewClientLocation(myEntreprise.ClientLocation); // Reset to original value
  };

  const handleSaveClickClientLocation = () => {
    // Perform the save logic with the newClientLocation value
    setEditingClientLocation(false);
  };

  const handleEditSecteurActiviteDetails = () => {
    setEditingSecteurActiviteDetails(true);
  };

  const handleCancelSecteurActiviteDetails = () => {
    setEditingSecteurActiviteDetails(false);
    setNewSecteurActiviteDetails(myEntreprise.SecteurActiviteDetails); // Reset to original value
  };

  const handleSaveClickSecteurActiviteDetails = () => {
    // Perform the save logic with the newSecteurActiviteDetails value
    setEditingSecteurActiviteDetails(false);
  };





  const handleEditStage = () => {
    setEditingStage(true);
  };

  const handleCancelStage = () => {
    setEditingStage(false);
    setNewStage(myEntreprise.stage); // Reset to original value
  };

  const handleSaveClickStage = () => {
    // Perform the save logic with the newStage value
    setEditingStage(false);
  };

  const handleClickCompanyName = () => {
    setOpenCompanyName(!openCompanyName);
  }
  const handleClickMinibio = () => {
    setOpenMinibio(!openMinibio);
  }
  const handleClickProjectDescription = () => {
    setOpenProjectDescription(!openProjectDescription);
  }
  const handleClickFoundingdate = () => {
    setOpenFoundingdate(!openFoundingdate);
  }
  const handleClickEntrepriseMission = () => {
    setOpenEntrepriseMission(!openEntrepriseMission);
  }
  const handleClickEntrepriseVision = () => {
    setOpenEntrepriseVision(!openEntrepriseVision);
  }
  const handleClickValeur = () => {
    setOpenValeur(!openValeur);
  }
  const handleClickFullAddress = () => {
    setOpenfullAddress(!openfullAddress);
  }
  const handleClickSecteur = () => {
    setOpenSecteur(!openSecteur);
  }
  const handleClickStage = () => {
    setOpenStage(!openStage);
  };
  const handleClickTypeOfClients = () => {
    setOpenTypeOfClients(!opentypeOfClients);
  }
  const handleClickClientLocation = () => {
    setOpenClientLocation(!openClientLocation);
  }
  const handleClickSecteurActiviteDetails = () => {
    setOpenSecteurActiviteDetails(!openSecteurActiviteDetails);
  }


  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };

  const handleChangeIndexTab = (index) => {
    setValueTab(index);
  };

  return (
    <>
      <Helmet>
        <title> TRANSFORME | Entreprise </title>
      </Helmet>

      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

        <Breadcrumbs aria-label="breadcrumb" sx={{ alignSelf: 'flex-start', marginBottom: 2 }}  >
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Typography color="text.primary">Application</Typography>
        </Breadcrumbs>
        <Card  sx={{ width: '100%'}}>
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
                  onChange={handleChangeTab}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Identité de l'entreprise" {...a11yProps(0)} />
                  <Tab label="Equipe" {...a11yProps(1)} />
                  <Tab label="Historique financière" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                sx={{ width: '100%'}}
                onChangeIndex={handleChangeIndexTab}
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
                        {editingCompanyName ? (
                          <Stack sx={{ width:'100%',alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <TextField 
                            sx={{ width:'65%'}}
                              label="Nouveau mom de l'entreprise"
                              value={newCompanyName}
                              onChange={(e) => setNewCompanyName(e.target.value)}
                            />
                            <Box >
                            <Button sx={{marginRight: 1}} variant='outlined' color="success" onClick={handleSaveClickCompanyName}>Valider</Button>
                            <Button variant='outlined' color='error' onClick={handleCancelCompanyName}>Annuler</Button>
                            </Box>
                          </Stack>
                        ) : (
                          <>
                            <ListItemText primary="Nom de l'Entreprise" secondary={newCompanyName} />
                            <ListItemIcon>
                              {openCompanyName ? (
                                <CloseIcon onClick={handleClickCompanyName} />
                              ) : (
                                <EditIcon onClick={handleEditCompanyName} />
                              )}
                            </ListItemIcon>
                            {openCompanyName ? <ExpandLess onClick={handleClickCompanyName} /> : <ExpandMore onClick={handleClickCompanyName} />}
                          </>
                        )}
                      </ListItemButton>


                      <Collapse in={openCompanyName} timeout="auto" unmountOnExit sx={{ padding: 2, background:'aliceblue' }}>
                        <Typography sx={{ color: "red" }}>Coaching! score</Typography>
                      </Collapse>

                      <ListItemButton>
                        {editingMinibio ? (
                          <Stack sx={{ width:'100%',alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <TextField 
                            sx={{ width:'65%'}}
                              label="Nouveau detail simple de l'Entreprise"
                              value={newMinibio}
                              onChange={(e) => setNewMinibio(e.target.value)}
                            />
                            <Box >
                            <Button sx={{marginRight: 1}} variant='outlined' color="success" onClick={handleSaveClickMinibio}>Valider</Button>
                            <Button variant='outlined' color='error' onClick={handleCancelMinibio}>Annuler</Button>
                            </Box>
                          </Stack>
                        ) : (
                          <>
                            <ListItemText primary="Detail simple de l'Entreprise" secondary={newMinibio} />
                            <ListItemIcon>
                              {openMinibio ? (
                                <CloseIcon onClick={handleClickMinibio} />
                              ) : (
                                <EditIcon onClick={handleEditMinibio} />
                              )}
                            </ListItemIcon>
                            {openMinibio ? <ExpandLess onClick={handleClickMinibio} /> : <ExpandMore onClick={handleClickMinibio} />}
                          </>
                        )}
                      </ListItemButton>
                      <Collapse in={openMinibio} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>


                      <ListItemButton>
                        {editingProjectDescription ? (
                          <Stack sx={{ width:'100%',alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <TextField
                            multiline
                            sx={{ width:'65%'}}
                              label="Nouvelle description de l'Entreprise"
                              value={newProjectDescription}
                              onChange={(e) => setNewProjectDescription(e.target.value)}
                            />
                            <Box >
                            <Button sx={{marginRight: 1}} variant='outlined' color="success" onClick={handleSaveClickProjectDescription}>Valider</Button>
                            <Button variant='outlined' color='error' onClick={handleCancelProjectDescription}>Annuler</Button>
                            </Box>
                          </Stack>
                        ) : (
                          <>
                            <ListItemText primary="Description de l'Entreprise" secondary={newProjectDescription} />
                            <ListItemIcon>
                              {openProjectDescription ? (
                                <CloseIcon onClick={handleClickProjectDescription} />
                              ) : (
                                <EditIcon onClick={handleEditProjectDescription} />
                              )}
                            </ListItemIcon>
                            {openProjectDescription ? <ExpandLess onClick={handleClickProjectDescription} /> : <ExpandMore onClick={handleClickProjectDescription} />}
                          </>
                        )}
                      </ListItemButton>


                      <Collapse in={openProjectDescription} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>

                      <ListItemButton>
                        {editingFoundingdate ? (
                          <Stack sx={{ width:'100%',alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <TextField
                            type="date"
                            sx={{ width:'65%'}}
                              label="Nouvelle date de création de l'Entreprise"
                              value={newFoundingdate}
                              onChange={(e) => setNewFoundingdate(e.target.value)}
                            />
                            <Box >
                            <Button sx={{marginRight: 1}} variant='outlined' color="success" onClick={handleSaveClickFoundingdate}>Valider</Button>
                            <Button variant='outlined' color='error' onClick={handleCancelFoundingdate}>Annuler</Button>
                            </Box>
                          </Stack>
                        ) : (
                          <>
                            <ListItemText primary="Date de création de l'Entreprise" secondary={newFoundingdate} />
                            <ListItemIcon>
                              {openFoundingdate ? (
                                <CloseIcon onClick={handleClickFoundingdate} />
                              ) : (
                                <EditIcon onClick={handleEditFoundingdate} />
                              )}
                            </ListItemIcon>
                            {openFoundingdate ? <ExpandLess onClick={handleClickFoundingdate} /> : <ExpandMore onClick={handleClickFoundingdate} />}
                          </>
                        )}
                      </ListItemButton>

                      <Collapse in={openFoundingdate} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>

                      <ListItemButton>
                        {editingEntrepriseMission ? (
                          <Stack sx={{ width:'100%',alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <TextField
                            multiline
                            sx={{ width:'65%'}}
                              label="Nouvelle Mission de l'Entreprise"
                              value={newEntrepriseMission}
                              onChange={(e) => setNewEntrepriseMission(e.target.value)}
                            />
                            <Box >
                            <Button sx={{marginRight: 1}} variant='outlined' color="success" onClick={handleSaveClickEntrepriseMission}>Valider</Button>
                            <Button variant='outlined' color='error' onClick={handleCancelEntrepriseMission}>Annuler</Button>
                            </Box>
                          </Stack>
                        ) : (
                          <>
                            <ListItemText primary="Mission de l'Entreprise" secondary={newEntrepriseMission} />
                            <ListItemIcon>
                              {openEntrepriseMission ? (
                                <CloseIcon onClick={handleClickEntrepriseMission} />
                              ) : (
                                <EditIcon onClick={handleEditEntrepriseMission} />
                              )}
                            </ListItemIcon>
                            {openEntrepriseMission ? <ExpandLess onClick={handleClickEntrepriseMission} /> : <ExpandMore onClick={handleClickEntrepriseMission} />}
                          </>
                        )}
                      </ListItemButton>

                      <Collapse in={openEntrepriseMission} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>


                      <ListItemButton>
                        {editingEntrepriseVision ? (
                          <Stack sx={{ width:'100%',alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <TextField
                            multiline
                            sx={{ width:'65%'}}
                              label="Nouvelle Vision de l'Entreprise"
                              value={newEntrepriseVision}
                              onChange={(e) => setNewEntrepriseVision(e.target.value)}
                            />
                            <Box >
                            <Button sx={{marginRight: 1}} variant='outlined' color="success" onClick={handleSaveClickEntrepriseVision}>Valider</Button>
                            <Button variant='outlined' color='error' onClick={handleCancelEntrepriseVision}>Annuler</Button>
                            </Box>
                          </Stack>
                        ) : (
                          <>
                            <ListItemText primary="Vision de l'Entreprise" secondary={newEntrepriseVision} />
                            <ListItemIcon>
                              {openEntrepriseVision ? (
                                <CloseIcon onClick={handleClickEntrepriseVision} />
                              ) : (
                                <EditIcon onClick={handleEditEntrepriseVision} />
                              )}
                            </ListItemIcon>
                            {openEntrepriseVision ? <ExpandLess onClick={handleClickEntrepriseVision} /> : <ExpandMore onClick={handleClickEntrepriseVision} />}
                          </>
                        )}
                      </ListItemButton>

                      <Collapse in={openEntrepriseVision} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>

                    

                      <ListItemButton>
                        {editingValeur ? (
                          <Stack sx={{ width:'100%',alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <TextField
                            multiline
                            sx={{ width:'65%'}}
                              label="Nouvelle Valeur de l'entreprise"
                              value={newValeur}
                              onChange={(e) => setNewValeur(e.target.value)}
                            />
                            <Box >
                            <Button sx={{marginRight: 1}} variant='outlined' color="success" onClick={handleSaveClickValeur}>Valider</Button>
                            <Button variant='outlined' color='error' onClick={handleCancelValeur}>Annuler</Button>
                            </Box>
                          </Stack>
                        ) : (
                          <>
                            <ListItemText primary="Valeur de l'entreprise" secondary={newValeur} />
                            <ListItemIcon>
                              {openValeur ? (
                                <CloseIcon onClick={handleClickValeur} />
                              ) : (
                                <EditIcon onClick={handleEditValeur} />
                              )}
                            </ListItemIcon>
                            {openValeur ? <ExpandLess onClick={handleClickValeur} /> : <ExpandMore onClick={handleClickValeur} />}
                          </>
                        )}
                      </ListItemButton>
                       
                      <Collapse in={openValeur} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>


                      <ListItemButton>
                        <ListItemText primary="Addresse de l'entreprise" secondary={myEntreprise.full_address} />

                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openfullAddress ? <ExpandLess onClick={handleClickFullAddress} /> : <ExpandMore onClick={handleClickFullAddress} />}
                      </ListItemButton>
                      <Collapse in={openfullAddress} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>


                      <ListItemButton>
                        <ListItemText primary="Secteur d'activité" secondary={myEntreprise.secteur} />

                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openSecteur ? <ExpandLess onClick={handleClickSecteur} /> : <ExpandMore onClick={handleClickSecteur} />}
                      </ListItemButton>
                      <Collapse in={openSecteur} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>


                      {/* <ListItemButton>
                        <ListItemText primary="A quel stage etes-vous?" secondary={myEntreprise.stage} />
                        
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openStage ? <ExpandLess onClick={handleClickStage} /> : <ExpandMore onClick={handleClickStage} />}
                      </ListItemButton> */}

                      <ListItemButton>
                        {editingStage ? (
                          <>
                            <TextField
                              label="New Stage"
                              value={newStage}
                              onChange={(e) => setNewStage(e.target.value)}
                            />
                            <Button onClick={handleSaveClickStage}>Save</Button>
                            <Button onClick={handleCancelStage}>Cancel</Button>
                          </>
                        ) : (
                          <>
                            <ListItemText primary="A quel stage etes-vous?" secondary={myEntreprise.stage} />
                            <ListItemIcon>
                              {openStage ? (
                                <CloseIcon onClick={handleClickStage} />
                              ) : (
                                <EditIcon onClick={handleEditStage} />
                              )}
                            </ListItemIcon>
                            {openStage ? <ExpandLess onClick={handleClickStage} /> : <ExpandMore onClick={handleClickStage} />}
                          </>
                        )}
                      </ListItemButton>


                      <Collapse in={openStage} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>


                      <ListItemButton>
                        <ListItemText primary="Quel type de clients servez-vous ?" secondary={myEntreprise.typeOfClients} />

                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {opentypeOfClients ? <ExpandLess onClick={handleClickTypeOfClients} /> : <ExpandMore onClick={handleClickTypeOfClients} />}
                      </ListItemButton>
                      <Collapse in={opentypeOfClients} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>

                      <ListItemButton>
                        <ListItemText primary="Où sont basés vos clients ?" secondary={myEntreprise.clientLocation} />

                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openClientLocation ? <ExpandLess onClick={handleClickClientLocation} /> : <ExpandMore onClick={handleClickClientLocation} />}
                      </ListItemButton>
                      <Collapse in={openClientLocation} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>

                      <ListItemButton>
                        <ListItemText primary="Quel sont vos secteurs d'activité?" secondary={myEntreprise.secteur_activite_details} />

                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openSecteurActiviteDetails ? <ExpandLess onClick={handleClickSecteurActiviteDetails} /> : <ExpandMore onClick={handleClickSecteurActiviteDetails} />}
                      </ListItemButton>
                      <Collapse in={openSecteurActiviteDetails} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                        <Typography sx={{ color: "red" }}>Coaching score</Typography>
                      </Collapse>
                    </List>
                  </Box>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                  Equipe
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  Historique financière
                </TabPanel>



              </SwipeableViews>
            </Box>
          </CardActions>
        </Card>
      </Container>

    </>
  );
}

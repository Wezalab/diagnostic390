/* eslint-disable no-unused-vars */


import { Helmet } from 'react-helmet-async';

// @mui
import {
  Container, Typography, Card, IconButton, CardActions, CardContent, CardHeader,
  CardMedia, Breadcrumbs, Link, Tab, Box, useTheme, Tabs, AppBar, Button, TextField, Stack, CardActionArea, Paper
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

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

import blue from "@material-ui/core/colors/blue";

// import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";


import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../redux/Store';
import { fetchBusinessPlans, updateLogo } from '../../redux/businessPlanReducer';
import Iconify from '../../components/iconify';


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
  myBusinessPlans: PropTypes.object.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  icon: {
    margin: theme.spacing(2)
  },
  cardContainer: {
    width: "100px",
    margin: "10px",
  },
  cardRoot: {
    paddingBottom: "14px !important"
  },
  cardRootHide: {
    paddingBottom: "14px !important",
    margin: "-16px"
  },
  input: {
    display: "none"
  },
  button: {
    color: blue[900],
    margin: 10
  },
  logo: {
    width: "100px",
    height: "100px"
  },
  submit: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "120px",
  },
  uploadedImage: {
    width: "200px",
  }
}));

export default function ViewPlan() {

  // const { businessPlanList } = useSelector((state) => state.businessPlan);
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const { errorUpdateLogoBusinessPlan } = useSelector((state) => state.businessPlan);


  console.log("user==>", user?.user?.user?.role);
  const navigate = useNavigate();
  const myBusinessPlans = location.state;
  console.log("myBusinessPlans==>", myBusinessPlans._id);


  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();
  const [uploadState, setUploadState] = useState("initial");
  const [image, setImage] = useState("");


  const myBusinessPlan = myBusinessPlans
  // const myBusinessPlan = businessPlanList.find((obj) => obj.owner && obj.owner._id === user?.user?.user?.userId);
  console.log("myBusinessPlan", myBusinessPlan);


  useEffect(() => {
    store.dispatch(fetchBusinessPlans());
  }, []);

  const [value, setValueTab] = useState(0);
  const theme = useTheme();
  const dispatch = useDispatch();


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

  const [editingCompanyName, setEditingCompanyName] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState(myBusinessPlan?.business_plan_name); // Assuming myBusinessPlan is available

  const [editingMinibio, setEditingMinibio] = useState(false);
  const [newMinibio, setNewMinibio] = useState(myBusinessPlan?.mini_bio); // Assuming myBusinessPlan is available

  const [editingProjectDescription, setEditingProjectDescription] = useState(false);
  const [newProjectDescription, setNewProjectDescription] = useState(myBusinessPlan?.project_description); // Assuming myBusinessPlan is available

  const [editingFoundingdate, setEditingFoundingdate] = useState(false);
  const [newFoundingdate, setNewFoundingdate] = useState(myBusinessPlan?.Foundingdate); // Assuming myBusinessPlan is available


  const [editingEntrepriseMission, setEditingEntrepriseMission] = useState(false);
  const [newEntrepriseMission, setNewEntrepriseMission] = useState(myBusinessPlan?.project_mission); // Assuming myBusinessPlan is available

  const [editingEntrepriseVision, setEditingEntrepriseVision] = useState(false);
  const [newEntrepriseVision, setNewEntrepriseVision] = useState(myBusinessPlan?.project_mission); // Assuming myBusinessPlan is available

  const [editingValeur, setEditingValeur] = useState(false);
  const [newValeur, setNewValeur] = useState(myBusinessPlan?.valeur); // Assuming myBusinessPlan is available


  const [editingFullAddress, setEditingFullAddress] = useState(false);
  const [newFullAddress, setNewFullAddress] = useState(myBusinessPlan?.FullAddress); // Assuming myBusinessPlan is available

  const [editingSecteur, setEditingSecteur] = useState(false);
  const [newSecteur, setNewSecteur] = useState(myBusinessPlan?.Secteur); // Assuming myBusinessPlan is available


  const [editingTypeOfClients, setEditingTypeOfClients] = useState(false);
  const [newTypeOfClients, setNewTypeOfClients] = useState(myBusinessPlan?.TypeOfClients); // Assuming myBusinessPlan is available

  const [editingClientLocation, setEditingClientLocation] = useState(false);
  const [newClientLocation, setNewClientLocation] = useState(myBusinessPlan?.ClientLocation); // Assuming myBusinessPlan is available

  const [editingSecteurActiviteDetails, setEditingSecteurActiviteDetails] = useState(false);
  const [newSecteurActiviteDetails, setNewSecteurActiviteDetails] = useState(myBusinessPlan?.SecteurActiviteDetails); // Assuming myBusinessPlan is available

  const [editingStage, setEditingStage] = useState(false);
  const [newStage, setNewStage] = useState(myBusinessPlan?.stage); // Assuming myBusinessPlan is available

  // state logo and post to cloudinary
  const [loadPic, setLoadPic] = useState("")


  const handleEditCompanyName = () => {
    setEditingCompanyName(true);
  };

  const handleCancelCompanyName = () => {
    setEditingCompanyName(false);
    setNewCompanyName(myBusinessPlan?.business_plan_name); // Reset to original value
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
    setNewMinibio(myBusinessPlan?.mini_bio); // Reset to original value
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
    setNewProjectDescription(myBusinessPlan?.project_description); // Reset to original value
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
    setNewFoundingdate(myBusinessPlan?.Foundingdate); // Reset to original value
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
    setNewEntrepriseMission(myBusinessPlan?.EntrepriseMission); // Reset to original value
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
    setNewFullAddress(myBusinessPlan?.FullAddress); // Reset to original value
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
    setNewSecteur(myBusinessPlan?.Secteur); // Reset to original value
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
    setNewValeur(myBusinessPlan?.Valeur); // Reset to original value
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
    setNewEntrepriseVision(myBusinessPlan?.EntrepriseVision); // Reset to original value
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
    setNewTypeOfClients(myBusinessPlan?.TypeOfClients); // Reset to original value
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
    setNewClientLocation(myBusinessPlan?.ClientLocation); // Reset to original value
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
    setNewSecteurActiviteDetails(myBusinessPlan?.SecteurActiviteDetails); // Reset to original value
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
    setNewStage(myBusinessPlan?.stage); // Reset to original value
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

  // Changne profile image
  const onChangeProfile = async (event) => {
    console.log('onChangeProfile');
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {

        setUploadState("uploaded");
      };
    }
  };

  const handleUploadClick = async (event) => {
    console.log("oksssssssss");
    try {
      const file = event.target.files[0];
      const reader = new FileReader();

      if (file) {
        reader.readAsDataURL(file);

        reader.onloadend = async (e) => {
          try {
            console.log("reader.result", reader.result);

            // Call the onCloudinarySaveCb function to upload the image
            const logo = await onCloudinarySaveCb(reader.result);
            console.log("Image uploaded to Cloudinary:", logo);
            setImage(logo);


            await dispatch(updateLogo({ _id: myBusinessPlans._id, logo }))
              .then((data) => {
                console.log("data", errorUpdateLogoBusinessPlan, data);


              })
              .catch((error) => {
                console.error('Registration error:', error);
              });


            // Now you can handle the Cloudinary URL as needed
            setUploadState("uploaded");
          } catch (error) {
            console.error("Error uploading image to Cloudinary:", error);
          }
        };
      }
    } catch (error) {
      console.error("Error handling upload:", error);
    }
  };

  const onCloudinarySaveCb = async (base64Img) => {
    let pic = ""
    try {
      setLoadPic(true);

      const apiUrl = 'https://api.cloudinary.com/v1_1/micity/image/upload';
      const data = {
        file: base64Img,
        upload_preset: 'ml_default'
      };

      const response = await fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      });

      const responseData = await response.json();

      if (response.ok && responseData.secure_url) {
        setLoadPic(false);
        console.log('Image uploaded to Cloudinary:', responseData.secure_url);
        pic = responseData.secure_url;
      } else {
        setLoadPic(false);
        console.error('Error uploading image to Cloudinary:', responseData);
        throw new Error('Error uploading image to Cloudinary');
      }
    } catch (error) {
      setLoadPic(false);
      console.error('Error in onCloudinarySaveCb:', error);
      throw error;
    }
    return pic
  };


  const handleResetClick = (event) => {
    setImage(null);
    setUploadState("initial");
    reset({ logo: null });
  };


  return (
    <>
      <Helmet>
        <title> TRANSFORME | Business Plan </title>
      </Helmet>

      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

        <Breadcrumbs aria-label="breadcrumb" sx={{ alignSelf: 'flex-start', marginBottom: 2 }}  >
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Typography color="text.primary">Mon Business Plan</Typography>
        </Breadcrumbs>

        {
          (myBusinessPlan?.length === 0 || myBusinessPlan === undefined) ?


            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width='100%'
            >

              <img src='../../../assets/company.gif' alt="Success Gif" style={{ width: '30%', marginBottom: 2, alignSelf: 'center' }} />

              <Typography variant="h5" gutterBottom>
                Vous n'avez enregistré aucune Business Plan!
              </Typography>
              <Typography>Pour enregistrer votre Business Plan, cliquez sur le bouton en bas et commencez

              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/dashboard/add-Business Plan', { replace: true })}
                sx={{ marginTop: 2 }}
              >
                Enregistrer votre Business Plan
              </Button>
            </Box>

            :

            <Card sx={{ width: '100%' }}>
              <CardHeader
                avatar={
                  // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  //   R
                  // </Avatar>
                  <Box>
                    {/* <img src='../../../assets/empty.jpg' alt="profile" style={{ width: 100 }} /> */}

                    <div className={classes.root}>
                      <Paper className={classes.cardContainer}>
                        <CardContent
                          className={
                            uploadState !== "uploaded" ? classes.cardRoot : classes.cardRootHide
                          }
                        >
                          <Grid container justify="center" alignItems="center">
                            <input
                              accept="image/jpeg,image/png,image/tiff,image/webp"
                              className={classes.input}
                              id="contained-button-file"
                              name="logo"
                              type="file"
                              onChange={(e) => handleUploadClick(e)}
                            />
                            <label
                              htmlFor="contained-button-file"
                              className={uploadState === "uploaded" ? classes.input : null}
                            >
                              {myBusinessPlans.logo ? (
                                null
                              ) : (
                                <Fab component="span" className={classes.button}>
                                  <Iconify icon="icon-park:add-picture" />
                                </Fab>
                              )}
                            </label>
                          </Grid>

                        </CardContent>
                        {(uploadState === "uploaded") && (
                          <CardActionArea onClick={handleResetClick}>
                            <img className={classes.logo} src={image} alt="LOGO" />
                          </CardActionArea>
                        )}

                        {myBusinessPlans.logo && <CardActionArea onClick={handleResetClick}>
                          <img className={classes.logo} src={myBusinessPlans.logo} alt="LOGO" />
                        </CardActionArea>}
                      </Paper>
                      {/* <Typography underline="hover" sx={{cursor: "pointer",}} variant="caption" onClick={()=> handleUploadClick2()} >Changer la photo</Typography>

       */}
                    </div>



                  </Box>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={myBusinessPlan?.business_plan_name}
                subheader={myBusinessPlan?.mini_bio}

              />
              <CardMedia
                component="img"
                height="194"
                image="../../../assets/empty.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {myBusinessPlan?.project_description}
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
                      <Tab sx={{ textTransform: "inherit" }} label="Identité du projet" {...a11yProps(0)} />
                      <Tab sx={{ textTransform: "inherit" }} label="Equipe" {...a11yProps(1)} />
                      <Tab sx={{ textTransform: "inherit" }} label="Besoin en équipement" {...a11yProps(2)} />
                      <Tab sx={{ textTransform: "inherit" }} label="Historique financière" {...a11yProps(3)} />
                    </Tabs>
                  </AppBar>
                  <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    sx={{ width: '100%' }}
                    onChangeIndex={handleChangeIndexTab}
                  >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                      <Box sx={{ display: 'flex', }} >
                        <List
                          sx={{ width: '100%', bgcolor: 'background.paper' }}
                          component="nav"
                          aria-labelledby="nested-list-subheader"
                        >


                          <ListItemButton>
                            {editingCompanyName ? (
                              <Stack sx={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextField
                                  sx={{ width: '65%' }}
                                  label="Nouveau mom du projet"
                                  value={newCompanyName}
                                  onChange={(e) => setNewCompanyName(e.target.value)}
                                />
                                <Box>
                                  <Button sx={{ marginRight: 1 }} variant='outlined' color="success" onClick={handleSaveClickCompanyName}>Valider</Button>
                                  <Button variant='outlined' color='error' onClick={handleCancelCompanyName}>Annuler</Button>
                                </Box>
                              </Stack>
                            ) : (
                              <>
                                <ListItemText primary="Nom du Business Plan" secondary={newCompanyName} />
                                {
                                  user?.user?.user?.role !== "USER" ? <>
                                    <ListItemIcon>
                                      {openCompanyName ? (
                                        <CloseIcon onClick={handleClickCompanyName} />
                                      ) : (
                                        <EditIcon onClick={handleEditCompanyName} />
                                      )}
                                    </ListItemIcon>

                                    {openCompanyName ? <ExpandLess onClick={handleClickCompanyName} /> : <ExpandMore onClick={handleClickCompanyName} />} </>
                                    : null
                                }
                              </>
                            )}
                          </ListItemButton>


                          <Collapse in={openCompanyName} timeout="auto" unmountOnExit sx={{ padding: 2, background: 'aliceblue' }}>
                            <Typography sx={{ color: "red" }}>Coaching! score</Typography>
                          </Collapse>

                          <ListItemButton>
                            {editingMinibio ? (
                              <Stack sx={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextField
                                  sx={{ width: '65%' }}
                                  label="Nouveau detail simple du Business Plan"
                                  value={newMinibio}
                                  onChange={(e) => setNewMinibio(e.target.value)}
                                />
                                <Box >
                                  <Button sx={{ marginRight: 1 }} variant='outlined' color="success" onClick={handleSaveClickMinibio}>Valider</Button>
                                  <Button variant='outlined' color='error' onClick={handleCancelMinibio}>Annuler</Button>
                                </Box>
                              </Stack>
                            ) : (
                              <>
                                <ListItemText primary="Detail simple du Business Plan" secondary={newMinibio} />
                                {user?.user?.user?.role !== "USER" ? <>
                                  <ListItemIcon>
                                    {openMinibio ? (
                                      <CloseIcon onClick={handleClickMinibio} />
                                    ) : (
                                      <EditIcon onClick={handleEditMinibio} />
                                    )}
                                  </ListItemIcon>
                                  {openMinibio ? <ExpandLess onClick={handleClickMinibio} /> : <ExpandMore onClick={handleClickMinibio} />}</> : null
                                }</>
                            )}
                          </ListItemButton>
                          <Collapse in={openMinibio} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>


                          <ListItemButton>
                            {editingProjectDescription ? (
                              <Stack sx={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextField
                                  multiline
                                  sx={{ width: '65%' }}
                                  label="Nouvelle description du Business Plan"
                                  value={newProjectDescription}
                                  onChange={(e) => setNewProjectDescription(e.target.value)}
                                />
                                <Box >
                                  <Button sx={{ marginRight: 1 }} variant='outlined' color="success" onClick={handleSaveClickProjectDescription}>Valider</Button>
                                  <Button variant='outlined' color='error' onClick={handleCancelProjectDescription}>Annuler</Button>
                                </Box>
                              </Stack>
                            ) : (
                              <>
                                <ListItemText primary="Description du Business Plan" secondary={newProjectDescription} />
                                {user?.user?.user?.role !== "USER" ? <>
                                  <ListItemIcon>
                                    {openProjectDescription ? (
                                      <CloseIcon onClick={handleClickProjectDescription} />
                                    ) : (
                                      <EditIcon onClick={handleEditProjectDescription} />
                                    )}
                                  </ListItemIcon>
                                  {openProjectDescription ? <ExpandLess onClick={handleClickProjectDescription} /> : <ExpandMore onClick={handleClickProjectDescription} />}</> : null
                                }</>
                            )}
                          </ListItemButton>


                          <Collapse in={openProjectDescription} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>

                          <ListItemButton>
                            {editingFoundingdate ? (
                              <Stack sx={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextField
                                  type="date"
                                  sx={{ width: '65%' }}
                                  label="Nouvelle date de création du Business Plan"
                                  value={newFoundingdate}
                                  onChange={(e) => setNewFoundingdate(e.target.value)}
                                />
                                <Box >
                                  <Button sx={{ marginRight: 1 }} variant='outlined' color="success" onClick={handleSaveClickFoundingdate}>Valider</Button>
                                  <Button variant='outlined' color='error' onClick={handleCancelFoundingdate}>Annuler</Button>
                                </Box>
                              </Stack>
                            ) : (
                              <>
                                <ListItemText primary="Date de création du Business Plan" secondary={newFoundingdate} />
                                {user?.user?.user?.role !== "USER" ? <>
                                  <ListItemIcon>
                                    {openFoundingdate ? (
                                      <CloseIcon onClick={handleClickFoundingdate} />
                                    ) : (
                                      <EditIcon onClick={handleEditFoundingdate} />
                                    )}
                                  </ListItemIcon>
                                  {openFoundingdate ? <ExpandLess onClick={handleClickFoundingdate} /> : <ExpandMore onClick={handleClickFoundingdate} />}</> : null
                                }</>
                            )}
                          </ListItemButton>

                          <Collapse in={openFoundingdate} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>

                          <ListItemButton>
                            {editingEntrepriseMission ? (
                              <Stack sx={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextField
                                  multiline
                                  sx={{ width: '65%' }}
                                  label="Nouvelle Mission du Business Plan"
                                  value={newEntrepriseMission}
                                  onChange={(e) => setNewEntrepriseMission(e.target.value)}
                                />
                                <Box >
                                  <Button sx={{ marginRight: 1 }} variant='outlined' color="success" onClick={handleSaveClickEntrepriseMission}>Valider</Button>
                                  <Button variant='outlined' color='error' onClick={handleCancelEntrepriseMission}>Annuler</Button>
                                </Box>
                              </Stack>
                            ) : (
                              <>
                                <ListItemText primary="Mission du Business Plan" secondary={newEntrepriseMission} />
                                {user?.user?.user?.role !== "USER" ? <>
                                  <ListItemIcon>
                                    {openEntrepriseMission ? (
                                      <CloseIcon onClick={handleClickEntrepriseMission} />
                                    ) : (
                                      <EditIcon onClick={handleEditEntrepriseMission} />
                                    )}
                                  </ListItemIcon>
                                  {openEntrepriseMission ? <ExpandLess onClick={handleClickEntrepriseMission} /> : <ExpandMore onClick={handleClickEntrepriseMission} />}</> : null
                                }</>
                            )}
                          </ListItemButton>

                          <Collapse in={openEntrepriseMission} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>


                          <ListItemButton>
                            {editingEntrepriseVision ? (
                              <Stack sx={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextField
                                  multiline
                                  sx={{ width: '65%' }}
                                  label="Nouvelle Vision du Business Plan"
                                  value={newEntrepriseVision}
                                  onChange={(e) => setNewEntrepriseVision(e.target.value)}
                                />
                                <Box >
                                  <Button sx={{ marginRight: 1 }} variant='outlined' color="success" onClick={handleSaveClickEntrepriseVision}>Valider</Button>
                                  <Button variant='outlined' color='error' onClick={handleCancelEntrepriseVision}>Annuler</Button>
                                </Box>
                              </Stack>
                            ) : (
                              <>
                                <ListItemText primary="Vision du Business Plan" secondary={newEntrepriseVision} />
                                {user?.user?.user?.role !== "USER" ? <>
                                  <ListItemIcon>
                                    {openEntrepriseVision ? (
                                      <CloseIcon onClick={handleClickEntrepriseVision} />
                                    ) : (
                                      <EditIcon onClick={handleEditEntrepriseVision} />
                                    )}
                                  </ListItemIcon>
                                  {openEntrepriseVision ? <ExpandLess onClick={handleClickEntrepriseVision} /> : <ExpandMore onClick={handleClickEntrepriseVision} />}</> : null
                                }</>
                            )}
                          </ListItemButton>

                          <Collapse in={openEntrepriseVision} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>



                          <ListItemButton>
                            {editingValeur ? (
                              <Stack sx={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextField
                                  multiline
                                  sx={{ width: '65%' }}
                                  label="Nouvelle Valeur du projet"
                                  value={newValeur}
                                  onChange={(e) => setNewValeur(e.target.value)}
                                />
                                <Box >
                                  <Button sx={{ marginRight: 1 }} variant='outlined' color="success" onClick={handleSaveClickValeur}>Valider</Button>
                                  <Button variant='outlined' color='error' onClick={handleCancelValeur}>Annuler</Button>
                                </Box>
                              </Stack>
                            ) : (
                              <>
                                <ListItemText primary="Valeur du projet" secondary={newValeur} />
                                {user?.user?.user?.role !== "USER" ? <>
                                  <ListItemIcon>
                                    {openValeur ? (
                                      <CloseIcon onClick={handleClickValeur} />
                                    ) : (
                                      <EditIcon onClick={handleEditValeur} />
                                    )}
                                  </ListItemIcon>
                                  {openValeur ? <ExpandLess onClick={handleClickValeur} /> : <ExpandMore onClick={handleClickValeur} />}</> : null
                                }</>
                            )}
                          </ListItemButton>

                          <Collapse in={openValeur} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>


                          <ListItemButton>
                            <ListItemText primary="Addresse du projet" secondary={myBusinessPlan?.full_address} />

                            {user?.user?.user?.role !== "USER" ? <>
                              <ListItemIcon>
                                <EditIcon />
                              </ListItemIcon>
                              {openfullAddress ? <ExpandLess onClick={handleClickFullAddress} /> : <ExpandMore onClick={handleClickFullAddress} />}</> : null}
                          </ListItemButton>
                          <Collapse in={openfullAddress} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>


                          <ListItemButton>
                            <ListItemText primary="Secteur d'activité" secondary={myBusinessPlan?.secteur} />

                            {user?.user?.user?.role !== "USER" ? <>
                              <ListItemIcon>
                                <EditIcon />
                              </ListItemIcon>
                              {openSecteur ? <ExpandLess onClick={handleClickSecteur} /> : <ExpandMore onClick={handleClickSecteur} />}</> : null}
                          </ListItemButton>
                          <Collapse in={openSecteur} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>


                          {/* <ListItemButton>
                        <ListItemText primary="A quel stage etes-vous?" secondary={myBusinessPlan?.stage} />
                        
                       {user?.user?.user?.role !==  "USER"? <>
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        {openStage ? <ExpandLess onClick={handleClickStage} /> : <ExpandMore onClick={handleClickStage} />}</>: null
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
                                <ListItemText primary="A quel stage etes-vous?" secondary={myBusinessPlan?.stage} />
                                {user?.user?.user?.role !== "USER" ? <>
                                  <ListItemIcon>
                                    {openStage ? (
                                      <CloseIcon onClick={handleClickStage} />
                                    ) : (
                                      <EditIcon onClick={handleEditStage} />
                                    )}
                                  </ListItemIcon>
                                  {openStage ? <ExpandLess onClick={handleClickStage} /> : <ExpandMore onClick={handleClickStage} />}</> : null
                                }</>
                            )}
                          </ListItemButton>


                          <Collapse in={openStage} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>


                          <ListItemButton>
                            <ListItemText primary="Quel type de clients servez-vous ?" secondary={myBusinessPlan?.typeOfClients} />

                            {user?.user?.user?.role !== "USER" ? <>
                              <ListItemIcon>
                                <EditIcon />
                              </ListItemIcon>
                              {opentypeOfClients ? <ExpandLess onClick={handleClickTypeOfClients} /> : <ExpandMore onClick={handleClickTypeOfClients} />}</> : null}
                          </ListItemButton>
                          <Collapse in={opentypeOfClients} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>

                          <ListItemButton>
                            <ListItemText primary="Où sont basés vos clients ?" secondary={myBusinessPlan?.clientLocation} />

                            {user?.user?.user?.role !== "USER" ? <>
                              <ListItemIcon>
                                <EditIcon />
                              </ListItemIcon>
                              {openClientLocation ? <ExpandLess onClick={handleClickClientLocation} /> : <ExpandMore onClick={handleClickClientLocation} />}</> : null}
                          </ListItemButton>
                          <Collapse in={openClientLocation} timeout="auto" unmountOnExit sx={{ padding: 2 }}>
                            <Typography sx={{ color: "red" }}>Coaching score</Typography>
                          </Collapse>

                          <ListItemButton>
                            <ListItemText primary="Quel sont vos secteurs d'activité?" secondary={myBusinessPlan?.secteur_activite_details} />

                            {user?.user?.user?.role !== "USER" ? <>
                              <ListItemIcon>
                                <EditIcon />
                              </ListItemIcon>
                              {openSecteurActiviteDetails ? <ExpandLess onClick={handleClickSecteurActiviteDetails} /> : <ExpandMore onClick={handleClickSecteurActiviteDetails} />}</> : null}
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

                    <TabPanel sx={{ textTransform: "inherit" }} value={value} index={2} dir={theme.direction}>
                      Besoin en equipement
                    </TabPanel>

                    <TabPanel sx={{ textTransform: "inherit" }} value={value} index={3} dir={theme.direction}>
                      Historique financière
                    </TabPanel>



                  </SwipeableViews>
                </Box>
              </CardActions>
            </Card>}
      </Container>

    </>
  );
}

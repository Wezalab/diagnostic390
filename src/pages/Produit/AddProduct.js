import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'

// @mui
import {
  Container, Box, Typography, Link, Grid, Breadcrumbs, TextField,Card, //  CardMedia, Paper, Rating, Divider, Button, ImageList, ImageListItem,
  CardMedia,
  Button
} from '@mui/material';

// import { useLocation } from 'react-router-dom';
import Iconify from '../../components/iconify';


export default function AddProduct() {
  // const location = useLocation();
  // const { productObject } = location.state || {};

  // eslint-disable-next-line no-unused-vars
  // const [product, setProduct] = useState(productObject && JSON.parse(productObject));
  const [name,setName] = useState('');
  const [desc,setDesc] = useState('');
  const [fullDesc,setFullDesc] = useState('');
  const [uploadStateCover, setUploadStateCover] = useState("initial");
  const [images, setImages] = useState([]);


  useEffect(() => {
  }, []);

  const handleUploadClickCover = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async (e) => {
        try {
          console.log("reader.result", reader.result);
         
          // setImageCover( reader.result);
          setImages([...images, reader.result])

          setUploadStateCover("uploaded");

        } catch (error) {
          console.error("Error uploading image to Cloudinary:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onDeletePic = (key) => {
    console.log(key);
    setImages([...images.filter((_img, k)=> k !== key)])
  }

  return (
    <>
      <Helmet>
        <title> TRANSFORME | Ajouter un produit </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
          <Box>
            <Typography variant="h6">Ajouter un nouveau produit</Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/dashboard/app">
                Accueil
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/dashboard/produits"
              >
                Mes produits
              </Link>
              <Typography color="text.primary">Ajouter un produit </Typography>
            </Breadcrumbs>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Link href="#" style={{ cursor: 'pointer', display:'flex', alignItems:'center' }} variant="subtitle2" underline="hover">
              <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
              <Typography variant="h6">Modifier</Typography>

            </Link>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={5}>
            <Typography variant='h6'>Details de votre product</Typography>
            <Typography variant="caption">Titre, description, image,...</Typography>
            

          </Grid>
          <Grid item xs={7}>
            <Card sx={{ padding: 4,  }}>
              <TextField sx={{width: "100%", marginBottom:2}} name="name" label="Nom du produit" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField multiline rows={3} sx={{width: "100%", marginBottom:2}} name="desc" label="Description courte du produit" value={desc} onChange={(e) => setDesc(e.target.value)} />
              <Typography variant="subtitle2">Description</Typography>
              <TextField multiline rows={5} sx={{width: "100%", marginBottom:2, marginTop:1}} name="fullDesc" label="Description complete du produit" value={fullDesc} onChange={(e) => setFullDesc(e.target.value)} />

              <Card sx={{ position: "relative" }}>
                {/* {(uploadStateCover === "uploaded" ?
                  <CardMedia
                    component="img"
                    height="194"
                    image={imageCover}
                    alt="Uploaded Image"
                  /> :
                 
                )} */}
                 <CardMedia
                    component="img"
                    height="194"
                    image={"../../../assets/empty.jpg"}
                    alt="Uploaded Image"
                  />


                <div style={{ textAlign: 'center', margin: '10px' }}>
                  <label htmlFor="contained-button-fileCover">
                    <input
                      accept="image/jpeg,image/png,image/tiff,image/webp"
                      style={{ display: 'none' }}
                      id="contained-button-fileCover"
                      type="file"
                      onChange={(e) => handleUploadClickCover(e)}
                    />
                    <Button sx={{ textTransform: "inherit",marginTop:-20 }} variant="contained" component="span">
                      Téléverser une image
                    </Button>
                    
                    
                  </label>
                  <Box sx={{display:'flex', flexDirection: "row"}}>
                      {
                        images && images.map((img, key) => {
                          return <Card sx={{marginRight:1,  position: "relative"}} onClick={()=>onDeletePic(key)} >
                            <Box sx={{position: 'absolute', backgroundColor: "#000", opacity:0.7, 
                            display:'flex', justifyContent:'center', alignItems:'center',
                            borderRadius: 5, right:0, width: 30,  height: 30 }}>
                              <Iconify  sx={{color:"#fff"}} icon={'eva:edit-fill'} />
                            </Box>
                            <img style={{width: 90}} src={img} alt={key} />
                          </Card>
                        })
                      }
                    </Box>
                </div>

              </Card>
            
            </Card>


          </Grid>
        </Grid>

      </Container>

    </>
  );
}

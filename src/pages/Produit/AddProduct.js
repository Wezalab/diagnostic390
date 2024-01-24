import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'

// @mui
import {
  Container, Box, Typography, Link, Breadcrumbs, TextField, Card,
  CardMedia,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  ListItemText,
  Select,
  MenuItem,
  Checkbox
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { LoadingButton } from '@mui/lab';

import { useLocation, useNavigate } from 'react-router-dom';
import Iconify from '../../components/iconify';
import useWooCommerceAPI from '../../hooks/useWooCommerceAPI';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function AddProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const { productObject } = location.state || {};

  const {
    categories,
    fetchCategories,
    postProduct,
    editProduct,
    // error,
    loading
  } = useWooCommerceAPI();
  // console.log("categories", categories);

    //  react-hooks/exhaustive-deps
    useEffect(() => {
      fetchCategories();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState(productObject && JSON.parse(productObject));
  const [name, setName] = useState(product ? product.name : '');
  const [desc, setDesc] = useState(product ? product.short_description : '');
  const [fullDesc, setFullDesc] = useState(product ? product.description : '');
  const [price, setPrice] = useState(product ? product.sale_price : 0);
  const [pricePromo, setPricePromo] = useState(product ? product.price : 0);
  const [qt, setQt] = useState(product ? product.stock_quantity : 0);
  const [errMessage, setErrMessage] = useState("");

  const [images, setImages] = useState(product ? product.images : []);
  const [loadPic, setLoadPic] = useState(false);

  // categories
  const [categoryName, setCategoryName] = useState(product?product?.categories?.map(val => val.name):[]);

  const handleChangeCat = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleUploadClickCover = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          console.log("reader.result", reader.result);

           // Call the onCloudinarySaveCb function to upload the image
           const img = await onCloudinarySaveCover(reader.result);
           console.log("Img uploaded to Cloudinary:", img);
 
          // setImageCover( reader.result);
          setImages([...images, {
            name: "img",
            alt: "img",
            src: img
          }])

        } catch (error) {
          console.error("Error uploading image to Cloudinary:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onCloudinarySaveCover = async (base64Img) => {
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
        console.log('Cover uploaded to Cloudinary:', responseData.secure_url);
        pic = responseData.secure_url;
      } else {
        setLoadPic(false);
        console.error('Error uploading Cover to Cloudinary:', responseData);
        throw new Error('Error uploading Cover to Cloudinary');
      }
    } catch (error) {
      setLoadPic(false);
      console.error('Error in onCloudinarySaveCb:', error);
      throw error;
    }
    return pic
  };

  const resultIds = categoryName?.map(searchName => {
    const resultObject = categories?.find(item => item.name === searchName);
    return resultObject ? {id: resultObject.id} : null;
});

  const onSaveProduct = async() => {
  
    const prodObject = {
      name,
      type: "simple",
      short_description: desc,
      description:fullDesc,
      stock_quantity: qt,
      regular_price:pricePromo,
      sale_price:price,
      tax_status:'none',
      manage_stock:true,
      images,
      categories: resultIds?.filter(id => id !== null)
    }

    // validate all values
    if(name!== "" && desc !== "" && fullDesc !== "" && images.length !== 0){
       // if new Objec the save else if update
      if (product) {
        console.log("Edit");

        const saveState = await editProduct(prodObject, product.id );
          console.log(saveState);
          if (saveState === 'Modification réussie') {
            navigate('/dashboard/produits', { replace: true });
          }
      } else {
        console.log("Add",resultIds?.filter(id => id !== null) )
        const saveState = await postProduct(prodObject);
        console.log(saveState);
        if (saveState === 'Création réussie') {
          navigate('/dashboard/produits', { replace: true });
        }
      }
    }
    else{
      setErrMessage("Veillez completer tous les champs")
    }
  }

  const onDeletePic = (key) => {
    console.log(key);
    setImages([...images.filter((_img, k) => k !== key)])
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
            <Link href="#" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} variant="subtitle2" underline="hover">
              <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
              <Typography variant="h6">Modifier</Typography>

            </Link>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Typography variant='h6'>Details de votre product</Typography>
            <Typography variant="caption">Titre, description, image,...</Typography>


          </Grid>
          <Grid item xs={8}>
            <Card sx={{ padding: 4, }}>
              <TextField sx={{ width: "100%", marginBottom: 2 }} name="name" label="Nom du produit" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField multiline rows={3} sx={{ width: "100%", marginBottom: 2 }} name="desc" label="Description courte du produit" value={desc} onChange={(e) => setDesc(e.target.value)} />
              <Typography variant="subtitle2">Description</Typography>
              <TextField multiline rows={5} sx={{ width: "100%", marginBottom: 2, marginTop: 1 }} name="fullDesc" label="Description complete du produit" value={fullDesc} onChange={(e) => setFullDesc(e.target.value)} />

              <Card sx={{ position: "relative" }}>
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
                    <LoadingButton disabled={loadPic} loading={loadPic} sx={{ textTransform: "inherit", marginTop: -20 }} variant="contained" component="span">
                      Téléverser une image
                    </LoadingButton>

                  </label>
                  <Box sx={{ display: 'flex', flexDirection: "row" }}>
                    {
                      images && images.map((img, key) => 
                        <Card key={key} sx={{ marginRight: 1, position: "relative" }} onClick={() => onDeletePic(key)} >
                          <Box sx={{ cursor:'pointer',
                            position: 'absolute', backgroundColor: "#000", opacity: 0.7,
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            borderRadius: 5, right: 0, width: 30, height: 30
                          }}>
                            <Iconify sx={{ color: "#fff" }} icon={'fluent-mdl2:cancel'} />
                          </Box>
                          <img style={{ width: 90 }} src={img.src} alt={key} />
                        </Card>
                      )
                    }
                  </Box>
                </div>
              </Card>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Typography variant='h6'>Caractéristique</Typography>
            <Typography variant="caption">Prix, couleur, demension,...</Typography>
          </Grid>

          <Grid item xs={8}>
            <Card  sx={{ flexGrow: 1, padding: 4, flexDirection:'row', display:'flex' }}>
              <Grid container spacing={2}>
              <Grid xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">Prix du produit ($)</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Prix du produit ($)"
                    value={price} onChange={(e) => setPrice(e.target.value)}
                  />
                </FormControl>
              </Grid>

              <Grid xs={6}>
                <TextField startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  sx={{ width: "100%", marginBottom: 2, }} name="qt" label="Quantite disponible" value={qt} onChange={(e) => setQt(e.target.value)} />
              </Grid>

              <Grid xs={6}>
                <FormControl fullWidth >
                  <InputLabel htmlFor="outlined-adornment-amount">Prix promo ($)</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Prix promo ($)"
                    value={pricePromo} onChange={(e) => setPricePromo(e.target.value)}
                  />
                </FormControl>
              </Grid>

              <Grid xs={6}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="m-checkbox-label">Catégories</InputLabel>
                  <Select
                    labelId="m-checkbox-label"
                    id="m-checkbox"
                    multiple
                    value={categoryName}
                    onChange={handleChangeCat}
                    input={<OutlinedInput label="Catégories" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat.id} value={cat.name}>
                        <Checkbox checked={categoryName?.indexOf(cat.name) > -1} />
                        <ListItemText primary={cat.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
              </Grid>
              </Grid>
             
            </Card>
            <Box sx={{display:'flex', justifyContent:'flex-end',marginTop: 2}}>
            <LoadingButton disabled={loading} loading={loading} sx={{display:'flex'}} size="large" variant="contained" onClick={()=>onSaveProduct()}>
              Enregistrer
            </LoadingButton>
            </Box>
          

          </Grid>
        </Grid>

      </Container>

    </>
  );
}

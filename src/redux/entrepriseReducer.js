import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Here, we are using the createAsyncThunk function to create an asynchronous thunk to fetch 
// the list of entreprises. 
// Then we define a new slice called entreprisesSlice with an initial state containing 
// an empty list of entreprises, isLoading flag, and an error message if any.

export const fetchEntreprises = createAsyncThunk(
  "entreprise/fetchEntreprises",
  async () => {
    const response = await axios.get(
      "https://diagnostic-swyu.onrender.com/api/entreprises/"
    );
    return response.data;
  }
);

// Create an async thunk to create a new Entreprise object
export const createEntreprise = createAsyncThunk('entreprise/create', async (EntrepriseData) => {
  console.log("----------------------", EntrepriseData);
  try {
    const response = await axios.post(`https://diagnostic-swyu.onrender.com/api/entreprises/`, EntrepriseData);
    return response.data;
  } catch (error) {
    console.log("Error =========??????", error);

    throw error;
  }
});

const entreprisesSlice = createSlice({
  name: "entreprises",
  initialState: {
    entrepriseList:[],
    // entrepriseList: [
    //   {
    //     "_id": "65a4628a088eda96447569ab",
    //     "company_name": "Cirezi Food",
    //     "mini_bio": "Production de la farine",
    //     "founding_date": null,
    //     "valeur": "",
    //     "full_address": "",
    //     "secteur": [
    //       "AGRO-TRANSFORMATION"
    //     ],
    //     "secteur_activite_details": [
    //       null,
    //       null
    //     ],
    //     "stage": "Idée/Concept",
    //     "type_of_customers": [
    //       "B2C"
    //     ],
    //     "customer_base": [
    //       "Clientèle Urbaine",
    //       "Clientèle Rurale"
    //     ],
    //     "category_base": [],
    //     "social_Media": [],
    //     "owner": {
    //       "_id": "65a45f48088eda96447569a9"
    //     },
    //     "company_name_evaluation": [],
    //     "logo_evaluation": [],
    //     "evaluation_mini_bio": [],
    //     "description_evaluation": [],
    //     "founding_date_evaluation": [],
    //     "mission_evaluation": [],
    //     "vision_evaluation": [],
    //     "valeur_evaluation": [],
    //     "objectifs_evaluation": [],
    //     "smart_ip_evaluation": [],
    //     "objectif_social_evaluation": [],
    //     "Phone_evaluation": [],
    //     "Phone_secondaire_evaluation": [],
    //     "full_address_evaluation": [],
    //     "Secteur_evaluation": [],
    //     "secteur_activite_detail_evaluation": [],
    //     "stage_evaluation": [],
    //     "type_of_customers_evaluation": [],
    //     "customer_base_evaluation": [],
    //     "category_base_evaluation": [],
    //     "social_Media_evaluation": [],
    //     "team": [],
    //     "team_evaluation": [],
    //     "__v": 0
    //   },
    //   {
    //     "_id": "65a9c57fcc2c253321b1ff4e",
    //     "company_name": "Alpha-new SARL",
    //     "mini_bio": "Test",
    //     "founding_date": null,
    //     "valeur": "",
    //     "full_address": "",
    //     "secteur": [],
    //     "secteur_activite_details": [],
    //     "stage": "",
    //     "type_of_customers": [],
    //     "customer_base": [],
    //     "category_base": [],
    //     "social_Media": [],
    //     "owner": {
    //       "_id": "65a9c564cc2c253321b1ff4c"
    //     },
    //     "company_name_evaluation": [],
    //     "logo_evaluation": [],
    //     "evaluation_mini_bio": [],
    //     "description_evaluation": [],
    //     "founding_date_evaluation": [],
    //     "mission_evaluation": [],
    //     "vision_evaluation": [],
    //     "valeur_evaluation": [],
    //     "objectifs_evaluation": [],
    //     "smart_ip_evaluation": [],
    //     "objectif_social_evaluation": [],
    //     "Phone_evaluation": [],
    //     "Phone_secondaire_evaluation": [],
    //     "full_address_evaluation": [],
    //     "Secteur_evaluation": [],
    //     "secteur_activite_detail_evaluation": [],
    //     "stage_evaluation": [],
    //     "type_of_customers_evaluation": [],
    //     "customer_base_evaluation": [],
    //     "category_base_evaluation": [],
    //     "social_Media_evaluation": [],
    //     "team": [],
    //     "team_evaluation": [],
    //     "__v": 0
    //   },
    //   {
    //     "_id": "65aa44c1330ab30a3ad6aea5",
    //     "company_name": "Flexcoord LTD",
    //     "logo": "",
    //     "mini_bio": "Transport",
    //     "founding_date": null,
    //     "valeur": "",
    //     "full_address": "",
    //     "secteur": [],
    //     "secteur_activite_details": [],
    //     "stage": "",
    //     "type_of_customers": [],
    //     "customer_base": [],
    //     "category_base": [],
    //     "social_Media": [],
    //     "owner": {
    //       "_id": "65aa43cc330ab30a3ad6aea3"
    //     },
    //     "company_name_evaluation": [],
    //     "logo_evaluation": [],
    //     "evaluation_mini_bio": [],
    //     "description_evaluation": [],
    //     "founding_date_evaluation": [],
    //     "mission_evaluation": [],
    //     "vision_evaluation": [],
    //     "valeur_evaluation": [],
    //     "objectifs_evaluation": [],
    //     "smart_ip_evaluation": [],
    //     "objectif_social_evaluation": [],
    //     "Phone_evaluation": [],
    //     "Phone_secondaire_evaluation": [],
    //     "full_address_evaluation": [],
    //     "Secteur_evaluation": [],
    //     "secteur_activite_detail_evaluation": [],
    //     "stage_evaluation": [],
    //     "type_of_customers_evaluation": [],
    //     "customer_base_evaluation": [],
    //     "category_base_evaluation": [],
    //     "social_Media_evaluation": [],
    //     "team": [],
    //     "team_evaluation": [],
    //     "__v": 0
    //   },
    //   {
    //     "_id": "65aa5b67fbf0f9d9bb8a867b",
    //     "company_name": "ENtreprise 6",
    //     "logo": "",
    //     "mini_bio": "details",
    //     "founding_date": null,
    //     "valeur": "",
    //     "full_address": "",
    //     "secteur": [],
    //     "secteur_activite_details": [],
    //     "stage": "",
    //     "type_of_customers": [],
    //     "customer_base": [],
    //     "category_base": [],
    //     "social_Media": [],
    //     "owner": {
    //       "_id": "65aa5b35fbf0f9d9bb8a8679"
    //     },
    //     "company_name_evaluation": [],
    //     "logo_evaluation": [],
    //     "evaluation_mini_bio": [],
    //     "description_evaluation": [],
    //     "founding_date_evaluation": [],
    //     "mission_evaluation": [],
    //     "vision_evaluation": [],
    //     "valeur_evaluation": [],
    //     "objectifs_evaluation": [],
    //     "smart_ip_evaluation": [],
    //     "objectif_social_evaluation": [],
    //     "Phone_evaluation": [],
    //     "Phone_secondaire_evaluation": [],
    //     "full_address_evaluation": [],
    //     "Secteur_evaluation": [],
    //     "secteur_activite_detail_evaluation": [],
    //     "stage_evaluation": [],
    //     "type_of_customers_evaluation": [],
    //     "customer_base_evaluation": [],
    //     "category_base_evaluation": [],
    //     "social_Media_evaluation": [],
    //     "team": [],
    //     "team_evaluation": [],
    //     "__v": 0
    //   },
    //   {
    //     "_id": "65af81329beb13006673875c",
    //     "company_name": "Test",
    //     "logo": "",
    //     "mini_bio": "Flexcoord LTD",
    //     "founding_date": null,
    //     "valeur": "",
    //     "full_address": "",
    //     "secteur": [],
    //     "secteur_activite_details": [],
    //     "stage": "",
    //     "type_of_customers": [],
    //     "customer_base": [],
    //     "category_base": [],
    //     "social_Media": [],
    //     "owner": {
    //       "_id": "65af80a79beb13006673875a"
    //     },
    //     "company_name_evaluation": [],
    //     "logo_evaluation": [],
    //     "evaluation_mini_bio": [],
    //     "description_evaluation": [],
    //     "founding_date_evaluation": [],
    //     "mission_evaluation": [],
    //     "vision_evaluation": [],
    //     "valeur_evaluation": [],
    //     "objectifs_evaluation": [],
    //     "smart_ip_evaluation": [],
    //     "objectif_social_evaluation": [],
    //     "Phone_evaluation": [],
    //     "Phone_secondaire_evaluation": [],
    //     "full_address_evaluation": [],
    //     "Secteur_evaluation": [],
    //     "secteur_activite_detail_evaluation": [],
    //     "stage_evaluation": [],
    //     "type_of_customers_evaluation": [],
    //     "customer_base_evaluation": [],
    //     "category_base_evaluation": [],
    //     "social_Media_evaluation": [],
    //     "team": [],
    //     "team_evaluation": [],
    //     "__v": 0
    //   },
    //   {
    //     "_id": "65af830f9beb130066738765",
    //     "company_name": "PME",
    //     "logo": "",
    //     "mini_bio": "12",
    //     "founding_date": null,
    //     "valeur": "",
    //     "full_address": "",
    //     "secteur": [],
    //     "secteur_activite_details": [],
    //     "stage": "",
    //     "type_of_customers": [],
    //     "customer_base": [],
    //     "category_base": [],
    //     "social_Media": [],
    //     "owner": {
    //       "_id": "65af83009beb130066738763"
    //     },
    //     "company_name_evaluation": [],
    //     "logo_evaluation": [],
    //     "evaluation_mini_bio": [],
    //     "description_evaluation": [],
    //     "founding_date_evaluation": [],
    //     "mission_evaluation": [],
    //     "vision_evaluation": [],
    //     "valeur_evaluation": [],
    //     "objectifs_evaluation": [],
    //     "smart_ip_evaluation": [],
    //     "objectif_social_evaluation": [],
    //     "Phone_evaluation": [],
    //     "Phone_secondaire_evaluation": [],
    //     "full_address_evaluation": [],
    //     "Secteur_evaluation": [],
    //     "secteur_activite_detail_evaluation": [],
    //     "stage_evaluation": [],
    //     "type_of_customers_evaluation": [],
    //     "customer_base_evaluation": [],
    //     "category_base_evaluation": [],
    //     "social_Media_evaluation": [],
    //     "team": [],
    //     "team_evaluation": [],
    //     "__v": 0
    //   },
    //   {
    //     "_id": "65af8c416045c2a868195d22",
    //     "company_name": "pme 4",
    //     "logo": "",
    //     "mini_bio": "details",
    //     "founding_date": null,
    //     "valeur": "",
    //     "full_address": "",
    //     "secteur": [],
    //     "secteur_activite_details": [],
    //     "stage": "",
    //     "type_of_customers": [],
    //     "customer_base": [],
    //     "category_base": [],
    //     "social_Media": [],
    //     "owner": {
    //       "_id": "65af8bea6045c2a868195d1f"
    //     },
    //     "company_name_evaluation": [],
    //     "logo_evaluation": [],
    //     "evaluation_mini_bio": [],
    //     "description_evaluation": [],
    //     "founding_date_evaluation": [],
    //     "mission_evaluation": [],
    //     "vision_evaluation": [],
    //     "valeur_evaluation": [],
    //     "objectifs_evaluation": [],
    //     "smart_ip_evaluation": [],
    //     "objectif_social_evaluation": [],
    //     "Phone_evaluation": [],
    //     "Phone_secondaire_evaluation": [],
    //     "full_address_evaluation": [],
    //     "Secteur_evaluation": [],
    //     "secteur_activite_detail_evaluation": [],
    //     "stage_evaluation": [],
    //     "type_of_customers_evaluation": [],
    //     "customer_base_evaluation": [],
    //     "category_base_evaluation": [],
    //     "social_Media_evaluation": [],
    //     "team": [],
    //     "team_evaluation": [],
    //     "__v": 0
    //   },
    //   {
    //     "_id": "65af90c16045c2a868195d38",
    //     "company_name": "MUsic",
    //     "logo": "",
    //     "mini_bio": "songs",
    //     "founding_date": null,
    //     "valeur": "",
    //     "full_address": "",
    //     "secteur": [],
    //     "secteur_activite_details": [],
    //     "stage": "",
    //     "type_of_customers": [],
    //     "customer_base": [],
    //     "category_base": [],
    //     "social_Media": [],
    //     "owner": {
    //       "_id": "65af908a6045c2a868195d36"
    //     },
    //     "company_name_evaluation": [],
    //     "logo_evaluation": [],
    //     "evaluation_mini_bio": [],
    //     "description_evaluation": [],
    //     "founding_date_evaluation": [],
    //     "mission_evaluation": [],
    //     "vision_evaluation": [],
    //     "valeur_evaluation": [],
    //     "objectifs_evaluation": [],
    //     "smart_ip_evaluation": [],
    //     "objectif_social_evaluation": [],
    //     "Phone_evaluation": [],
    //     "Phone_secondaire_evaluation": [],
    //     "full_address_evaluation": [],
    //     "Secteur_evaluation": [],
    //     "secteur_activite_detail_evaluation": [],
    //     "stage_evaluation": [],
    //     "type_of_customers_evaluation": [],
    //     "customer_base_evaluation": [],
    //     "category_base_evaluation": [],
    //     "social_Media_evaluation": [],
    //     "team": [],
    //     "team_evaluation": [],
    //     "__v": 0
    //   },
    //   {
    //     "_id": "65b14231ff78b4a47d082cb7",
    //     "company_name": "test",
    //     "logo": "",
    //     "mini_bio": "rrr",
    //     "founding_date": null,
    //     "valeur": "",
    //     "full_address": "",
    //     "secteur": [
    //       "AGRO-TRANSFORMATION"
    //     ],
    //     "secteur_activite_details": [
    //       null
    //     ],
    //     "stage": "Stade de croissance",
    //     "type_of_customers": [
    //       "B2B"
    //     ],
    //     "customer_base": [
    //       "Clientèle Urbaine"
    //     ],
    //     "category_base": [],
    //     "social_Media": [],
    //     "owner": {
    //       "_id": "65b141deff78b4a47d082cb5"
    //     },
    //     "company_name_evaluation": [],
    //     "logo_evaluation": [],
    //     "evaluation_mini_bio": [],
    //     "description_evaluation": [],
    //     "founding_date_evaluation": [],
    //     "mission_evaluation": [],
    //     "vision_evaluation": [],
    //     "valeur_evaluation": [],
    //     "objectifs_evaluation": [],
    //     "smart_ip_evaluation": [],
    //     "objectif_social_evaluation": [],
    //     "Phone_evaluation": [],
    //     "Phone_secondaire_evaluation": [],
    //     "full_address_evaluation": [],
    //     "Secteur_evaluation": [],
    //     "secteur_activite_detail_evaluation": [],
    //     "stage_evaluation": [],
    //     "type_of_customers_evaluation": [],
    //     "customer_base_evaluation": [],
    //     "category_base_evaluation": [],
    //     "social_Media_evaluation": [],
    //     "team": [],
    //     "team_evaluation": [],
    //     "__v": 0
    //   }
    // ],
    isLoadingEntreprise: false,
    errorEntreprise: null,

    isLoadingCreateEntreprise: false,
    errorCreateEntreprise: null,
  },
  reducers: {},
  // In the extraReducers field, we define how the state should change when the asynchronous
  // thunk fetchEntreprises is in a pending, fulfilled, or rejected state. 
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntreprises.pending, (state) => {
        state.isLoadingEntreprise = true;
        state.errorEntreprise = null;
      })
      .addCase(fetchEntreprises.fulfilled, (state, action) => {
        state.isLoadingEntreprise = false;
        state.entrepriseList = action.payload;
        state.errorEntreprise = null;
      })
      .addCase(fetchEntreprises.rejected, (state, action) => {
        state.isLoadingEntreprise = false;
        state.errorEntreprise = action.error.message;
      });

    // Handle the createEntreprise action
    builder
      .addCase(createEntreprise.pending, (state) => {
        state.isLoadingCreateEntreprise = true;
      })
      .addCase(createEntreprise.fulfilled, (state, action) => {
        state.isLoadingCreateEntreprise = false;
        state.entrepriseList.push(action.payload);
      })
      .addCase(createEntreprise.rejected, (state, action) => {
        state.isLoadingCreateEntreprise = false;
        state.errorCreateEntreprise = action.error.message;
      });
  },
});

export default entreprisesSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Here, we are using the createAsyncThunk function to create an asynchronous thunk to fetch 
// the list of businessPlan. 
// Then we define a new slice called businessPlanSlice with an initial state containing 
// an empty list of businessPlan, isLoading flag, and an error message if any.

export const fetchBusinessPlans = createAsyncThunk(
  "businessPlan/fetchBusinessPlans",
  async () => {
    const response = await axios.get(
      "https://diagnostic-swyu.onrender.com/api/projects/"
    );
    return response.data;
  }
);

// Create an async thunk to create a new BusinessPlan object
export const createBusinessPlan = createAsyncThunk('businessPlan/create', async (BusinessPlanData) => {
  console.log("----------------------", BusinessPlanData);
  try {
    const response = await axios.post(`https://diagnostic-swyu.onrender.com/api/projects/`, BusinessPlanData);
    return response.data;
  } catch (error) {
    console.log("Error =========??????", error);

    throw error;
  }
});

// Create an async thunk to update an existing Business object
export const updateLogo = createAsyncThunk(
  "Business/update",
  async ({
    _id,
    logo
  }) => {
    console.log("id========", _id);
    const url = `https://diagnostic-swyu.onrender.com/api/projects/${_id}`; // Concatenate ID to the base URL

    const response = await axios.put(url, { // Use PUT request for updating
      logo
    });

    console.log("Edit Business---?????? ok==", response.data);
    return response.data;
  }
);

// Create an async thunk to update an existing Business object
export const updateCover = createAsyncThunk(
  "BusinessCover/update",
  async ({
    _id,
    cover
  }) => {
    console.log("id========", _id);
    const url = `https://diagnostic-swyu.onrender.com/api/projects/cover/${_id}`; // Concatenate ID to the base URL

    const response = await axios.put(url, { // Use PUT request for updating
      cover
    });

    console.log("Edit Business---?????? ok==", response.data);
    return response.data;
  }
);


const businessPlanSlice = createSlice({
  name: "businessPlan",
  initialState: {
    // businessPlanList:[],
    businessPlanList: [
      {
        "_id": "65a94e3b6b3385c078e83d4d",
        "business_plan_name": "Medissah Healthcare",
        "mini_bio": "Simplifying Healthcare",
        "project_description": "Medissah Healthcare is an Integrative E-Health service platform. Our online interactive platform provides a list of service providers and healthcare assistants (consultants) in the areas of Mental health, Cardiology, Fertility, Cancer amongst others. Our emphasis is on the importance of “Patients’ access to quality, and prompt healthcare services. Our aim is to bridge the gap between patients and healthcare providers, thereby improving easy access to quality healthcare and optimum services.",
        "founding_date": "2020-01-01T00:00:00.000Z",
        "project_mission": "",
        "valeur": "",
        "full_address": "",
        "secteur": [],
        "secteur_activite_details": [],
        "stage": "",
        "type_of_customers": [],
        "customer_base": [],
        "social_Media": [],
        "owner": {
          "_id": "65a45ed4088eda96447569a5"
        },
        "business_plan_name_evaluation": [],
        "logo_evaluation": [],
        "evaluation_mini_bio": [],
        "project_description_evaluation": [],
        "founding_date_evaluation": [],
        "project_mission_evaluation": [],
        "project_vision_evaluation": [],
        "valeur_evaluation": [],
        "objectifs_evaluation": [],
        "smart_ip_evaluation": [],
        "objectif_social_evaluation": [],
        "Phone_evaluation": [],
        "Phone_secondaire_evaluation": [],
        "full_address_evaluation": [],
        "Secteur_evaluation": [],
        "secteur_activite_detail_evaluation": [],
        "stage_evaluation": [],
        "type_of_customers_evaluation": [],
        "customer_base_evaluation": [],
        "pitch_text_evaluation": [],
        "pitch_deck_url_evaluation": [],
        "pitch_deck_video_evaluation": [],
        "social_Media_evaluation": [],
        "team": [],
        "team_evaluation": [],
        "__v": 0,
        "logo": "https://res.cloudinary.com/micity/image/upload/v1705801153/ew82z9vcidepbs0yi5tp.jpg",
        "cover": "https://res.cloudinary.com/micity/image/upload/v1705801170/lokjvc3zsbepy3v74aug.png"
      },
      {
        "_id": "65a963e8b6dd1edea40842db",
        "business_plan_name": "Somilaris",
        "mini_bio": " Une farine de boullie",
        "project_description": "Somilaris est une farine de boullie de haute valeur protéino-énergétique et de faible viscosité",
        "founding_date": null,
        "project_mission": "",
        "valeur": "",
        "full_address": "",
        "secteur": [
          "AGRO-TRANSFORMATION"
        ],
        "secteur_activite_details": [],
        "stage": "Startup",
        "type_of_customers": [
          "B2B2C",
          "B2C"
        ],
        "customer_base": [
          "Clientèle Urbaine"
        ],
        "social_Media": [],
        "owner": {
          "_id": "65943de2f36f33984137a8c7"
        },
        "business_plan_name_evaluation": [],
        "logo_evaluation": [],
        "evaluation_mini_bio": [],
        "project_description_evaluation": [],
        "founding_date_evaluation": [],
        "project_mission_evaluation": [],
        "project_vision_evaluation": [],
        "valeur_evaluation": [],
        "objectifs_evaluation": [],
        "smart_ip_evaluation": [],
        "objectif_social_evaluation": [],
        "Phone_evaluation": [],
        "Phone_secondaire_evaluation": [],
        "full_address_evaluation": [],
        "Secteur_evaluation": [],
        "secteur_activite_detail_evaluation": [],
        "stage_evaluation": [],
        "type_of_customers_evaluation": [],
        "customer_base_evaluation": [],
        "pitch_text_evaluation": [],
        "pitch_deck_url_evaluation": [],
        "pitch_deck_video_evaluation": [],
        "social_Media_evaluation": [],
        "team": [],
        "team_evaluation": [],
        "__v": 0,
        "logo": "https://res.cloudinary.com/micity/image/upload/v1705622138/xdno7cxipkbkegefclfy.jpg",
        "cover": "https://res.cloudinary.com/micity/image/upload/v1705624144/qovysvpeyxk5s05aff13.jpg"
      },
      {
        "_id": "65a9c3c6cc2c253321b1ff20",
        "business_plan_name": "Alfajiri Cofee",
        "mini_bio": "Fine and delicious coffee from Congolese smallholder coffee farmers",
        "project_description": "Alfajiri Café tire son nom du mot swahili «Alfajiri», qui signifie «levé du soleil». Nous avons choisi ce nom pour évoquer l'image de l'espoir que le lever du soleil amène après l'obscurité.",
        "founding_date": null,
        "project_mission": "",
        "valeur": "",
        "full_address": "",
        "secteur": [
          "AGRO-TRANSFORMATION"
        ],
        "secteur_activite_details": [
          "Agriculture",
          "Agro-industrie"
        ],
        "stage": "Stade de croissance",
        "type_of_customers": [
          "B2B",
          "B2C",
          "B2B2B"
        ],
        "customer_base": [
          "Clientèle Rurale",
          "Clientèle Urbaine"
        ],
        "social_Media": [],
        "owner": {
          "_id": "65a45f48088eda96447569a9"
        },
        "business_plan_name_evaluation": [],
        "logo_evaluation": [],
        "evaluation_mini_bio": [],
        "project_description_evaluation": [],
        "founding_date_evaluation": [],
        "project_mission_evaluation": [],
        "project_vision_evaluation": [],
        "valeur_evaluation": [],
        "objectifs_evaluation": [],
        "smart_ip_evaluation": [],
        "objectif_social_evaluation": [],
        "Phone_evaluation": [],
        "Phone_secondaire_evaluation": [],
        "full_address_evaluation": [],
        "Secteur_evaluation": [],
        "secteur_activite_detail_evaluation": [],
        "stage_evaluation": [],
        "type_of_customers_evaluation": [],
        "customer_base_evaluation": [],
        "pitch_text_evaluation": [],
        "pitch_deck_url_evaluation": [],
        "pitch_deck_video_evaluation": [],
        "social_Media_evaluation": [],
        "team": [],
        "team_evaluation": [],
        "__v": 0,
        "logo": "https://res.cloudinary.com/micity/image/upload/v1705624803/uzetqd8e2r8zy0u2gryp.jpg",
        "cover": "https://res.cloudinary.com/micity/image/upload/v1705624811/un8xst3ofxpfjkzz4ka3.jpg"
      },
      {
        "_id": "65a9c726cc2c253321b1ff67",
        "business_plan_name": "WEZA ITC LAB",
        "logo": "",
        "cover": "",
        "mini_bio": "Projet de renforcerment des capacite ITC",
        "project_description": "",
        "founding_date": null,
        "project_mission": "",
        "valeur": "",
        "full_address": "",
        "secteur": [],
        "secteur_activite_details": [],
        "stage": "",
        "type_of_customers": [],
        "customer_base": [],
        "social_Media": [],
        "owner": {
          "_id": "65a9c564cc2c253321b1ff4c"
        },
        "business_plan_name_evaluation": [],
        "logo_evaluation": [],
        "evaluation_mini_bio": [],
        "project_description_evaluation": [],
        "founding_date_evaluation": [],
        "project_mission_evaluation": [],
        "project_vision_evaluation": [],
        "valeur_evaluation": [],
        "objectifs_evaluation": [],
        "smart_ip_evaluation": [],
        "objectif_social_evaluation": [],
        "Phone_evaluation": [],
        "Phone_secondaire_evaluation": [],
        "full_address_evaluation": [],
        "Secteur_evaluation": [],
        "secteur_activite_detail_evaluation": [],
        "stage_evaluation": [],
        "type_of_customers_evaluation": [],
        "customer_base_evaluation": [],
        "pitch_text_evaluation": [],
        "pitch_deck_url_evaluation": [],
        "pitch_deck_video_evaluation": [],
        "social_Media_evaluation": [],
        "team": [],
        "team_evaluation": [],
        "__v": 0
      },
      {
        "_id": "65aa5c60fbf0f9d9bb8a8694",
        "business_plan_name": "Destinee",
        "logo": "",
        "cover": "",
        "mini_bio": "Eau minerale",
        "project_description": "Eau produit et mis en bouteille a GOma par la maison  DESTINEE",
        "founding_date": null,
        "project_mission": "",
        "valeur": "",
        "full_address": "",
        "secteur": [],
        "secteur_activite_details": [],
        "stage": "",
        "type_of_customers": [],
        "customer_base": [],
        "social_Media": [],
        "owner": {
          "_id": "65aa5b35fbf0f9d9bb8a8679"
        },
        "business_plan_name_evaluation": [],
        "logo_evaluation": [],
        "evaluation_mini_bio": [],
        "project_description_evaluation": [],
        "founding_date_evaluation": [],
        "project_mission_evaluation": [],
        "project_vision_evaluation": [],
        "valeur_evaluation": [],
        "objectifs_evaluation": [],
        "smart_ip_evaluation": [],
        "objectif_social_evaluation": [],
        "Phone_evaluation": [],
        "Phone_secondaire_evaluation": [],
        "full_address_evaluation": [],
        "Secteur_evaluation": [],
        "secteur_activite_detail_evaluation": [],
        "stage_evaluation": [],
        "type_of_customers_evaluation": [],
        "customer_base_evaluation": [],
        "pitch_text_evaluation": [],
        "pitch_deck_url_evaluation": [],
        "pitch_deck_video_evaluation": [],
        "social_Media_evaluation": [],
        "team": [],
        "team_evaluation": [],
        "__v": 0
      },
      {
        "_id": "65b142bcff78b4a47d082cc4",
        "business_plan_name": "cofee",
        "logo": "https://res.cloudinary.com/micity/image/upload/v1706115796/migca4s7ytuxgmqv15nx.jpg",
        "cover": "https://res.cloudinary.com/micity/image/upload/v1706115799/veqiakczbelizeoxizwg.jpg",
        "mini_bio": "alfajiri",
        "project_description": "desc",
        "founding_date": null,
        "project_mission": "",
        "valeur": "",
        "full_address": "",
        "secteur": [],
        "secteur_activite_details": [],
        "stage": "",
        "type_of_customers": [],
        "customer_base": [],
        "social_Media": [],
        "owner": {
          "_id": "65b141deff78b4a47d082cb5"
        },
        "business_plan_name_evaluation": [],
        "logo_evaluation": [],
        "evaluation_mini_bio": [],
        "project_description_evaluation": [],
        "founding_date_evaluation": [],
        "project_mission_evaluation": [],
        "project_vision_evaluation": [],
        "valeur_evaluation": [],
        "objectifs_evaluation": [],
        "smart_ip_evaluation": [],
        "objectif_social_evaluation": [],
        "Phone_evaluation": [],
        "Phone_secondaire_evaluation": [],
        "full_address_evaluation": [],
        "Secteur_evaluation": [],
        "secteur_activite_detail_evaluation": [],
        "stage_evaluation": [],
        "type_of_customers_evaluation": [],
        "customer_base_evaluation": [],
        "pitch_text_evaluation": [],
        "pitch_deck_url_evaluation": [],
        "pitch_deck_video_evaluation": [],
        "social_Media_evaluation": [],
        "team": [],
        "team_evaluation": [],
        "__v": 0
      }
    ],

    isLoadingBusinessPlan: false,
    errorBusinessPlan: null,

    isLoadingCreateBusinessPlan: false,
    errorCreateBusinessPlan: null,

    isLoadingUpdateLogoBusinessPlan: false,
    errorUpdateLogoBusinessPlan: null,
    updateLogoBusinessPlan: null,

    isLoadingUpdateCoverBusinessPlan: false,
    errorUpdateCoverBusinessPlan: null,
    updateCoverBusinessPlan: null,
  },
  reducers: {},
  // In the extraReducers field, we define how the state should change when the asynchronous
  // thunk fetchBusinessPlans is in a pending, fulfilled, or rejected state. 
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinessPlans.pending, (state) => {
        state.isLoadingBusinessPlan = true;
        state.errorBusinessPlan = null;
      })
      .addCase(fetchBusinessPlans.fulfilled, (state, action) => {
        state.isLoadingBusinessPlan = false;
        state.businessPlanList = action.payload;
        state.errorBusinessPlan = null;
      })
      .addCase(fetchBusinessPlans.rejected, (state, action) => {
        state.isLoadingBusinessPlan = false;
        state.errorBusinessPlan = action.error.message;
      });

    // Handle the createBusinessPlan action
    builder
      .addCase(createBusinessPlan.pending, (state) => {
        state.isLoadingCreateBusinessPlan = true;
      })
      .addCase(createBusinessPlan.fulfilled, (state, action) => {
        state.isLoadingCreateBusinessPlan = false;
        state.businessPlanList.push(action.payload);
      })
      .addCase(createBusinessPlan.rejected, (state, action) => {
        state.isLoadingCreateBusinessPlan = false;
        state.errorCreateBusinessPlan = action.error.message;
      });

    builder
      .addCase(updateLogo.pending, (state) => {
        state.isLoadingUpdateLogoBusinessPlan = true;
      })
      .addCase(updateLogo.fulfilled, (state, action) => {
        state.isLoadingUpdateLogoBusinessPlan = false;
        state.updateLogoBusinessPlan = action.payload;
      })
      .addCase(updateLogo.rejected, (state, action) => {
        state.isLoadingUpdateLogoBusinessPlan = false;
        state.errorUpdateLogoBusinessPlan = action.error.message;
      });

    builder
      .addCase(updateCover.pending, (state) => {
        state.isLoadingUpdateCoverBusinessPlan = true;
      })
      .addCase(updateCover.fulfilled, (state, action) => {
        state.isLoadingUpdateCoverBusinessPlan = false;
        state.updateCoverBusinessPlan = action.payload;
      })
      .addCase(updateCover.rejected, (state, action) => {
        state.isLoadingUpdateCoverBusinessPlan = false;
        state.errorUpdateCoverBusinessPlan = action.error.message;
      });
  },
});

export default businessPlanSlice.reducer;

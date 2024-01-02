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
      "https://diagnostic-swyu.onrender.com/api/projects/"
    );
    return response.data;
  }
);

// Create an async thunk to create a new Entreprise object
export const createEntreprise = createAsyncThunk('entreprise/create', async (EntrepriseData) => {
  console.log("----------------------",EntrepriseData);
  try {
    const response = await axios.post(`https://diagnostic-swyu.onrender.com/api/projects/`, EntrepriseData);
    return response.data;
  } catch (error) {
    console.log("Error =========??????", error);

    throw error;
  }
});

const entreprisesSlice = createSlice({
  name: "entreprises",
  initialState: {
    entrepriseList: [
      {
          "_id": "65940ed37c8dc148247fba76",
          "company_name": "test",
          "mini_bio": "test",
          "description": "",
          "founding_date": null,
          "mission": "",
          "valeur": "",
          "full_address": "",
          "secteur": [],
          "secteur_activite_details": [],
          "stage": "",
          "type_of_customers": [],
          "customer_base": [],
          "owner": {
              "_id": "65940e737c8dc148247fba61"
          },
          "company_name_evaluation": [],
          "logo_evaluation": [],
          "evaluation_mini_bio": [],
          "description_evaluation": [],
          "founding_date_evaluation": [],
          "mission_evaluation": [],
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
          "__v": 0
      },
      {
          "_id": "65940fd77c8dc148247fba7e",
          "company_name": "Tesppt",
          "description": "tt",
          "founding_date": null,
          "mission": "abc",
          "valeur": "",
          "full_address": "",
          "secteur": [],
          "secteur_activite_details": [],
          "stage": "",
          "type_of_customers": [],
          "customer_base": [],
          "owner": null,
          "__v": 0,
          "company_name_evaluation": [],
          "logo_evaluation": [],
          "evaluation_mini_bio": [],
          "description_evaluation": [],
          "founding_date_evaluation": [],
          "mission_evaluation": [],
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
          "pitch_deck_url_evaluation": []
      },
      {
          "_id": "65940fd0955ed93d4e4530ac",
          "company_name": "Tesppt",
          "description": "abcd",
          "founding_date": null,
          "mission": "abcd",
          "valeur": "",
          "full_address": "",
          "secteur": [],
          "secteur_activite_details": [],
          "stage": "",
          "type_of_customers": [],
          "customer_base": [],
          "owner": null,
          "company_name_evaluation": [],
          "logo_evaluation": [],
          "evaluation_mini_bio": [],
          "description_evaluation": [],
          "founding_date_evaluation": [],
          "mission_evaluation": [],
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
          "__v": 0
      },
      {
          "_id": "659412457a8a19fe493c6b38",
          "company_name": "Skilly Hub",
          "company_name_evaluation": [
              {
                  "recommendation_coach": "Can you put it in capital letters",
                  "completed_by_user": "SKILLYHUB",
                  "score_by_coach": 8,
                  "status_by_coach": "Necessite Changement",
                  "date_changement": "2023-01-01T12:00:00.000Z",
                  "coach": "658ef161aa46314beca0ae24",
                  "_id": "659412457a8a19fe493c6b39"
              }
          ],
          "logo": "logo_url_1",
          "logo_evaluation": [
              {
                  "recommendation_coach": "Excellent",
                  "completed_by_user": "Merci",
                  "score_by_coach": 90,
                  "status_by_coach": "Approuvé",
                  "date_changement": "2023-01-02T12:00:00.000Z",
                  "coach": "658ef161aa46314beca0ae24",
                  "_id": "659412457a8a19fe493c6b3a"
              }
          ],
          "mini_bio": "Informatics Infrastructure",
          "project_description": "Skilly Hub Description",
          "founding_date": "2020-01-01T00:00:00.000Z",
          "project_mission": "Project Mission for skilly hub",
          "valeur": "Project Value",
          "objectifs": "Project Objectives",
          "smart_ip": "Smart IP",
          "objectif_social": "Social Objective",
          "phone": "0991234567",
          "full_address": "Goma, Himbi, Route bravo 33",
          "secteur": [
              "AGRO-TRANSFORMATION"
          ],
          "secteur_activite_details": [
              "ABCD",
              "EFGH"
          ],
          "type_of_customers": [
              "B2B",
              "B2B2B"
          ],
          "customer_base": [
              "Clientèle Urbaine",
              "Clientèle Rurale"
          ],
          "pitch_text": "Project Pitch Text",
          "pitch_deck_url": "https://skillyhub.com/pitch_deck.pdf",
          "last_score": 9,
          "last_status": "Approuvé",
          "website": "https://skillyhub.com",
          "owner": null,
          "evaluation_mini_bio": [],
          "project_description_evaluation": [],
          "founding_date_evaluation": [],
          "project_mission_evaluation": [],
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
          "__v": 0,
          "description_evaluation": [],
          "mission_evaluation": []
      }
  ],
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

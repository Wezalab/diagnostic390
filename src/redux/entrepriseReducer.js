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
          "social_Media": [],
          "_id": "6594194fee69a5db0ebcd831",
          "company_name": "Rology",
          "mini_bio": "The leading ai-assisted teleradiology platform in the mea region",
          "project_description": "Rology provides an innovative teleradiology platform that delivers final diagnostic reports at a zero-setup cost in comparison to traditional costs, offering savings of up to 25% of the total reporting cost.\nOur platform enables round-the-clock radiology services, thus increasing capacity by as much as 30%, and eliminating patient backlog, through a very competitive turn-around time which was decreased by 50%. Moreover, it ensures optimal machine utilization, reducing downtime and potentially increasing revenue by up to 20%.",
          "founding_date": null,
          "project_mission": "Mission Rology provides an innovative teleradiology platform that delivers final diagnostic reports at a zero-setup cost in comparison to traditional costs, offering savings of up to 25% of the total reporting cost.",
          "valeur": "Valeur Our platform enables round-the-clock radiology services, thus increasing capacity by as much as 30%, and eliminating patient backlog, through a very competitive turn-around time which was decreased by 50%. Moreover, it ensures optimal machine utilization, reducing downtime and potentially increasing revenue by up to 20%.",
          "full_address": "Goma, RDC",
          "secteur": [
              "AGRO-TRANSFORMATION",
              "SERVICE"
          ],
          "secteur_activite_details": [
              "Agro-industrie",
              "Agriculture",
              "Technologies financières"
          ],
          "stage": "Startup",
          "type_of_customers": [
              "B2B",
              "B2C"
          ],
          "customer_base": [
              "Clientèle Urbaine"
          ],
          "owner": null,
          "company_name_evaluation": [],
          "logo_evaluation": [],
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
          "business_plan_name_evaluation": [],
          "pitch_deck_video_evaluation": [],
          "social_Media_evaluation": [],
          "team": [],
          "team_evaluation": []
      },
      {
          "social_Media": [],
          "_id": "65941b05ee69a5db0ebcd843",
          "company_name": "OmniBiz",
          "mini_bio": "Transforming Traditional Retail in Africa",
          "project_description": "Through deep understanding of the Retailer owing to extensive experience in FMCG Retail and platform tech for SMEs in Nigeria, they have been able to create a decentralized approach to digitized retail. In an entirely asset light model, they have activated networks of logistics and warehousing partners as well as networks of brands and distribution partners in order to enable seamless procurement for retailers. They have 1000 active distributor stockpoints, 750 committed vehicles and 65k monthly active retailers helping create this ecosystem. Most recently, post understanding the SMEs in depth, they enabled access to finance through an aggregator embedded wallet and offered working capital finance through product loans on the platform.",
          "founding_date": "2023-01-21T00:00:00.000Z",
          "project_mission": "Mission They have 1000 active distributor stockpoints, 750 committed vehicles and 65k monthly active retailers helping create this ecosystem. Most recently, post understanding the SMEs in depth, they enabled access to finance through an aggregator embedded wallet and offered working capital finance through product loans on the platform.",
          "valeur": "Value They have 1000 active distributor stockpoints, 750 committed vehicles and 65k monthly active retailers helping create this ecosystem. Most recently, post understanding the SMEs in depth, they enabled access to finance through an aggregator embedded wallet and offered working capital finance through product loans on the platform.",
          "full_address": "Goma, RDC",
          "secteur": [
              "AGRO-TRANSFORMATION"
          ],
          "secteur_activite_details": [
              "Agriculture",
              "Services financiers"
          ],
          "stage": "Startup",
          "type_of_customers": [
              "B2B2B",
              "B2C"
          ],
          "customer_base": [
              "Clientèle Urbaine"
          ],
          "owner": {
              "_id": "6594198aee69a5db0ebcd838"
          },
          "company_name_evaluation": [],
          "logo_evaluation": [],
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
          "business_plan_name_evaluation": [],
          "pitch_deck_video_evaluation": [],
          "social_Media_evaluation": [],
          "team": [],
          "team_evaluation": []
      },
      {
          "social_Media": [],
          "_id": "659442b9f36f33984137a8d5",
          "company_name": "Flexcoord LTD",
          "mini_bio": "Vente de matelas",
          "project_description": "A l’attention des PME lauréates, les conventions de financement sont en cours de signature dans les quatre villes. L’accompagnement démarrera dans les prochaines semaines selon un calendrier spécifique par ville.\n\nLes PME recevront prochainement le calendrier détaillé de l’accompagnement et seront contactées par leur coach pour la planification des sessions de coaching.\n\nL’équipe COPA se tient à votre disposition pour toute information complémentaire.",
          "founding_date": "2000-01-08T00:00:00.000Z",
          "project_mission": "Mission",
          "valeur": "valeur",
          "full_address": "Goma, RDC",
          "secteur": [
              "SERVICE",
              "AUTRE",
              "AUTRE",
              "AGRO-TRANSFORMATION",
              "SERVICE",
              "AGRO-TRANSFORMATION",
              "SERVICE"
          ],
          "secteur_activite_details": [
              "Agro-industrie",
              "Tourisme",
              "Télécommunications"
          ],
          "stage": "Startup",
          "type_of_customers": [
              "B2B",
              "B2C"
          ],
          "customer_base": [
              "Clientèle Urbaine",
              "Clientèle Rurale"
          ],
          "owner": {
              "_id": "65943de2f36f33984137a8c7"
          },
          "company_name_evaluation": [],
          "logo_evaluation": [],
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
          "business_plan_name_evaluation": [],
          "pitch_deck_video_evaluation": [],
          "social_Media_evaluation": [],
          "team": [],
          "team_evaluation": []
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

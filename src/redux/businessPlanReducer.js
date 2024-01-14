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
      "https://diagnostic-swyu.onrender.com/api/businessPlan/"
    );
    return response.data;
  }
);

// Create an async thunk to create a new BusinessPlan object
export const createBusinessPlan = createAsyncThunk('businessPlan/create', async (BusinessPlanData) => {
  console.log("----------------------",BusinessPlanData);
  try {
    const response = await axios.post(`https://diagnostic-swyu.onrender.com/api/businessPlan/`, BusinessPlanData);
    return response.data;
  } catch (error) {
    console.log("Error =========??????", error);

    throw error;
  }
});

const businessPlanSlice = createSlice({
  name: "businessPlan",
  initialState: {
    businessPlanList:[],
    businessPlanList2: [
      {
          "social_Media": [],
          "_id": "6594194fee69a5db0ebcd831",
          "company_name": "Business Plan Rology",
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
        
          "owner": {
            "_id": "65943de2f36f33984137a8c7"
        },
          "company_name_evaBusiness Plan luation": [],
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
          "company_name": "Business Plan OmniBiz",
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
              "_id": "65943de2f36f33984137a8c7"
          },
          "company_name_evaBusiness Plan luation": [],
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
          "company_name": "Business Plan Flexcoord LTD",
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
          "company_name_evaBusiness Plan luation": [],
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
    isLoadingBusinessPlan: false,
    errorBusinessPlan: null,

    isLoadingCreateBusinessPlan: false,
    errorCreateBusinessPlan: null,
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
  },
});

export default businessPlanSlice.reducer;

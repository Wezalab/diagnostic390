import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import entrepriseReducer from './entrepriseReducer';
import businessPlanReducer from './businessPlanReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    entreprise: entrepriseReducer,
    businessPlan: businessPlanReducer
  },
});

export default store;

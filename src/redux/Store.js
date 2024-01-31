import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import entrepriseReducer from './entrepriseReducer';
import businessPlanReducer from './businessPlanReducer';
import listUserReducer from './listUserReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    entreprise: entrepriseReducer,
    businessPlan: businessPlanReducer,
    listUser: listUserReducer,
  },
});

export default store;

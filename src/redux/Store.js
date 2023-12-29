import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import doctorsReducer from './doctorsReducer';
import patientsReducer from './patientsReducer';
import registerReducer from './registerReducer';
import entrepriseReducer from './entrepriseReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    entreprise: entrepriseReducer,

    // doctors: doctorsReducer,
    // patients: patientsReducer

  },
});

export default store;

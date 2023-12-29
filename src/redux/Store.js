import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import doctorsReducer from './doctorsReducer';
import patientsReducer from './patientsReducer';
import registerReducer from './registerReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    doctors: doctorsReducer,
    patients: patientsReducer
  },
});

export default store;

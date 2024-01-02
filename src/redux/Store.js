import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import entrepriseReducer from './entrepriseReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    entreprise: entrepriseReducer,
  },
});

export default store;

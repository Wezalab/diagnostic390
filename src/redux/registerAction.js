import axios from 'axios';
import { registerFailure, registerStart, registerSuccess } from './registerReducer';


export const register = (name, email, phone, sex, password, role) => async (dispatch) => {
  try {
    dispatch(registerStart());

    const response = await axios.post('https://diagnostic-swyu.onrender.com/auth/signup', {
      name,
      email,
      mobile: phone,
      username: name,
      sex,
      password,
      role,
      mobile_secondaire:phone,

    });

    // Dispatch loginSuccess action with response data
    dispatch(registerSuccess(response.data));

    return response.data;

  } catch (error) {
    console.log("-----====",error);
    dispatch(registerFailure(error?.response?.data?.message !== undefined? error.response.data.message : "Verifiez votre internet!" ));
    
    // Throw the error to be caught by the promise's catch block
    throw error;
  }
};

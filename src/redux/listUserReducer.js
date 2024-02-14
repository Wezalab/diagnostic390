import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Here, we are using the createAsyncThunk function to create an asynchronous thunk to fetch 
// the list of users. 
// Then we define a new slice called usersSlice with an initial state containing 
// an empty list of users, isLoading flag, and an error message if any.

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async () => {
    const response = await axios.get(
      "https://diagnostic-swyu.onrender.com/auth/user-list"
    );
    return response.data;
  }
);

export const sendResetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ userId, newPassword, confirmPassword }) => {
    try {
      console.log("==>>>>>$$$%%%", `https://diagnostic-swyu.onrender.com/auth/reset-password-no-token/${userId}`, { newPassword, confirmPassword });
      const response = await axios.post(
        `https://diagnostic-swyu.onrender.com/auth/reset-password-no-token/${userId}`, { newPassword, confirmPassword }
      );
      return response.data;
    } catch (error) {
      console.log("Error =========??????", error);

      throw error?.response?.data?.message !== undefined ? error.response.data.message : "Verifiez votre internet!";
    }
  });

export const sendResetPasswordEmail = createAsyncThunk(
  "user/sendOTP",
  async ({ email, code }) => {
    try {

      const response = await axios.post(
        `https://diagnostic-swyu.onrender.com/auth/reset-password-code/`, { email, code }
      );
      // console.log("response.data", response.data);

      return response.data;
    } catch (error) {
      console.log("Error =========??????", error);
      throw error?.response?.data?.message !== undefined ? error.response.data.message : "Verifiez votre internet!";
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    // userList: [],
    userList: [
      {
        "_id": "6594198aee69a5db0ebcd838",
        "name": "Afrintech",
        "email": "cola@gmail.com",
        "mobile": "+243891979018",
        "mobile_secondaire": "+243891979018",
        "username": "Afrintech",
        "password": "$2b$16$gOrTf0C1Q9EudZsiummqL.Iudav9vcCwVfhV1O0983inulolFlaNu",
        "sex": "F",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=78260",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65941a04851c452794eb4b54",
        "name": "Venceslas Josh",
        "email": "bvenceslas@gmail.com",
        "mobile": "0978125250",
        "username": "bvenceslas",
        "password": "$2b$16$6WzSSO1j5JqpnMaVfrIVheAvfuz5g61mfpvl82IDeSW.1.OIDJc4e",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=623163",
        "status": "DEACTIVATED",
        "__v": 0,
        "resetPasswordExpires": "1704224982793",
        "resetPasswordToken": "c16eb006455176f031d23824d481fee3dea5a523"
      },
      {
        "_id": "65943de2f36f33984137a8c7",
        "name": "WEZA LAB",
        "email": "wezalab@gmail.com",
        "mobile": "+243 973111192",
        "mobile_secondaire": "+243 973111192",
        "username": "WEZA LAB",
        "password": "$2b$16$i93dacqpJgv2ChGwgVCiCOaTYPmO8DC4mmYL1bcjxlqqhxo6mxGve",
        "sex": "F",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=169165",
        "status": "DEACTIVATED",
        "__v": 0,
        "resetPasswordExpires": "1707923075237",
        "resetPasswordToken": "88c037b29a66ba9f9b1180806439661683f00f80"
      },
      {
        "_id": "6595948ec08e8a51571b0390",
        "name": "Josh Brain2",
        "email": "colp@gmail.com",
        "mobile": "0790183836",
        "username": "11",
        "password": "$2b$16$/vMODcrjWRoukTeKUkFloOQltb0Ce/HtINcGf6jAeJ6sFwSnkQ/0C",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=47658",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65a194bb75ce36627fdda48d",
        "name": "Afrintech",
        "email": "colb@gmail.com",
        "mobile": "+243 891 979 018",
        "mobile_secondaire": "+243 891 979 018",
        "username": "Afrintech",
        "password": "$2b$16$sX0q5KdiGREpUPuklNmca.Zh0qPuNO9PF8PAoENI5ZitPfV6dc7E6",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=222675",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65a458e45461964ffdf2bef7",
        "name": "guillainbisimwa",
        "email": "guillainbisimwa@gmail.com",
        "mobile": "+24389197901",
        "mobile_secondaire": "+24389197901",
        "username": "guillainbisimwa",
        "password": "$2b$16$F3o8.q5nEh0f1Uaz4/HLcuY5czsZRIviEejzoqGISu1/A/4rECo3y",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=731279",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65a45c3b5461964ffdf2befc",
        "name": "Afrintech",
        "email": "wezalab@gmail.com1",
        "mobile": "11",
        "mobile_secondaire": "11",
        "username": "Afrintech",
        "password": "$2b$16$LVJ9hB8FRtyfE7mxVGf3BOt0ssE/RwT0SPIaBbmjN/wz5x.kHi8Ty",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=324541",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65a45ed4088eda96447569a5",
        "name": "guillainbisimwa2",
        "email": "wezalab@gmail.com2",
        "mobile": "2",
        "mobile_secondaire": "2",
        "username": "guillainbisimwa2",
        "password": "$2b$16$Kn2MccdnQSCuvqWyP8zHaueBpvgSoSfPSLUkx4JUCLM4Vpm1iZMNS",
        "sex": "F",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=591795",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65a45f48088eda96447569a9",
        "name": "guillainbisimwa3",
        "email": "wezalab@gmail.com3",
        "mobile": "3",
        "mobile_secondaire": "3",
        "username": "guillainbisimwa3",
        "password": "$2b$16$EdYEuKlduGSagK3XqjrK9esskcbyQtE0C9JnyWgFQ0lY9Jnwn36gi",
        "sex": "AUTRE",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=212382",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65a9c564cc2c253321b1ff4c",
        "name": "guillainbisimwa4",
        "email": "wezalab@gmail.com4",
        "mobile": "243 891 979 0184",
        "mobile_secondaire": "243 891 979 0184",
        "username": "guillainbisimwa4",
        "password": "$2b$16$wbzO0QKVBncZ1lfTcekNoeVj3ncxihIyhs5KHQEn3TjmWRPrrr1Xm",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=220982",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65aa43cc330ab30a3ad6aea3",
        "name": "guillainbisimwa5",
        "email": "wezalab@gmail.com5",
        "mobile": "243 891 979 0186",
        "mobile_secondaire": "243 891 979 0186",
        "username": "guillainbisimwa5",
        "password": "$2b$16$XWnTs0ML2NDu82uWMCUG2enNk2pd/PSPIc71RZERShZ2xi3LP5JxC",
        "sex": "F",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=786332",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65aa5b35fbf0f9d9bb8a8679",
        "name": "guillainbisimwa6",
        "email": "wezalab@gmail.com6",
        "mobile": "+2438919790185",
        "mobile_secondaire": "+2438919790185",
        "username": "guillainbisimwa6",
        "password": "$2b$16$.ZSdfpB3WWSEt8htpWKzIed9sOjS/r6MN7QGkUNSzMl6MSp8dtrHO",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=848188",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65af744c74c5ea9ab478bd78",
        "name": "wezalab@gmail.com7",
        "email": "wezalab@gmail.com7",
        "mobile": "243 891 979 0187",
        "mobile_secondaire": "243 891 979 0187",
        "username": "wezalab@gmail.com7",
        "password": "$2b$16$oIxCZR1hl0y0JpwRYOsVWerG6M5/TMANAUqQqxjDpeCJIQdscUwmG",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=976128",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65af80a79beb13006673875a",
        "name": "testuser2",
        "email": "test@user.com2",
        "mobile": "+243 000000002",
        "mobile_secondaire": "+243 000000002",
        "username": "testuser2",
        "password": "$2b$16$aJBD3QDc0HTWwOsgtuemxe./y9UwYh2kWyOnvFxJhrEWuuCpbKW5G",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=932486",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65af83009beb130066738763",
        "name": "pme",
        "email": "pme@test.com",
        "mobile": "243 891 901822",
        "mobile_secondaire": "243 891 901822",
        "username": "pme",
        "password": "$2b$16$xqdzSgdb3VVCaTz26VRRE.DizsX7Lbj2sRZ23psuUJdXQws75xmkW",
        "sex": "AUTRE",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=545208",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65af840e9beb13006673876a",
        "name": "pme2",
        "email": "pme@test.com2",
        "mobile": "+24389197901822",
        "mobile_secondaire": "+24389197901822",
        "username": "pme2",
        "password": "$2b$16$.C7VeEdh0gbwC3p/Ar5EIOU78G5mR1rkLd8rQe1.0JZqsHbldyafC",
        "sex": "F",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=900314",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65af84de9beb130066738770",
        "name": "ppp",
        "email": "ppp@test.com2",
        "mobile": "+249197901822",
        "mobile_secondaire": "+24197901822",
        "username": "ok",
        "password": "$2b$16$42TNk5P/hpHxq7ynIsA5fOsXM24C9aExbyi0WOelRR2NFzMemhuL.",
        "sex": "F",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=381374",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "role": "USER",
        "_id": "65af8a298dafb8901c893021",
        "name": "ppp3",
        "email": "ppp@test.com3",
        "mobile": "+2491979018233",
        "mobile_secondaire": "+24197901823",
        "username": "ok",
        "password": "$2b$16$ySlvPk3HCRBID1vp1IMnD.gm1qAvzntKX9rV7Pmn9GjKw5Z04Okam",
        "sex": "F",
        "profile_picture": "https://i.pravatar.cc/48?u=192333",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65af8bea6045c2a868195d1f",
        "name": "pme4",
        "email": "pme@test.com4",
        "mobile": "243 891 979 01844",
        "mobile_secondaire": "243 891 979 01844",
        "username": "pme4",
        "password": "$2b$16$lXxE8tGpnO7xP5BsGoUovOUUptJpTwGEhsxUM12LUnsBLfx6kUQOW",
        "sex": "F",
        "role": "PME",
        "profile_picture": "https://i.pravatar.cc/48?u=834742",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65af8f066045c2a868195d2a",
        "name": "fm",
        "email": "fm@test.com",
        "mobile": "243 891 979 0111",
        "mobile_secondaire": "243 891 979 0111",
        "username": "fm",
        "password": "$2b$16$pRQf1rL.qpjgIztm7wMr5.NftpbUHjslPoZ8B0SF8TjvtAVTwHCjS",
        "sex": "F",
        "role": "FEMME",
        "profile_picture": "https://i.pravatar.cc/48?u=814754",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65af8fdd6045c2a868195d2f",
        "name": "psd",
        "email": "psd@test.com",
        "mobile": "243 891 979 0097",
        "mobile_secondaire": "243 891 979 0097",
        "username": "psd",
        "password": "$2b$16$fKuaXbCsRKm1Vz1h8PFapObUWH1an/3/4//bsxtkhxCy30IZlT09m",
        "sex": "AUTRE",
        "role": "PSDE",
        "profile_picture": "https://i.pravatar.cc/48?u=952946",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65af908a6045c2a868195d36",
        "name": "Jean Baptite Man",
        "email": "jean@test.com",
        "mobile": "243 9991 979001",
        "mobile_secondaire": "243 9991 979001",
        "username": "Jean",
        "password": "$2b$16$yleYeQi50yOSs4B39vZ/lO5qRXNNv.pOHK4Ru8Ar./NI8BIp0jsr6",
        "sex": "M",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=662770",
        "status": "DEACTIVATED",
        "__v": 0
      },
      {
        "_id": "65b141deff78b4a47d082cb5",
        "name": "dan",
        "email": "jean@test.com5",
        "mobile": "243 891 979 018886",
        "mobile_secondaire": "243 891 979 018886",
        "username": "dan",
        "password": "$2b$16$9NiTtDOCZhHEoiSSXPuVPe21jX3f4MxbMJCCQSsMMbBvBH/6XgMei",
        "sex": "F",
        "role": "USER",
        "profile_picture": "https://i.pravatar.cc/48?u=769482",
        "status": "DEACTIVATED",
        "__v": 0
      }
    ],
    isLoadingUser: false,
    errorUser: null,

    otpStatus: null,
    isLoadingSendOTP: false,
    errorOTP: null,

    ChangePasswordStatus: null,
    isLoadingSendChangePassword: false,
    errorChangePassword: null,

  },
  reducers: {},
  // In the extraReducers field, we define how the state should change when the asynchronous
  // thunk fetchUsers is in a pending, fulfilled, or rejected state. 
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoadingUser = true;
        state.errorUser = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.userList = action.payload;
        state.errorUser = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.errorUser = action.error.message;
      });

    builder
      .addCase(sendResetPasswordEmail.pending, (state) => {
        state.isLoadingSendOTP = true;
        state.errorOTP = null;
      })
      .addCase(sendResetPasswordEmail.fulfilled, (state, action) => {
        state.isLoadingSendOTP = false;
        state.otpStatus = action.payload;
        state.errorOTP = null;
      })
      .addCase(sendResetPasswordEmail.rejected, (state, action) => {
        state.isLoadingSendOTP = false;
        state.errorOTP = action.error.message;
      });

    builder
      .addCase(sendResetPassword.pending, (state) => {
        state.isLoadingSendChangePassword = true;
        state.errorChangePassword = null;
      })
      .addCase(sendResetPassword.fulfilled, (state, action) => {
        state.isLoadingSendChangePassword = false;
        state.ChangePasswordStatus = action.payload;
        state.errorChangePassword = null;
      })
      .addCase(sendResetPassword.rejected, (state, action) => {
        state.isLoadingSendChangePassword = false;
        state.errorChangePassword = action.error.message;
      });
  },

});

export default usersSlice.reducer;

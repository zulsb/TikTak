import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const signUp = createAsyncThunk('user/signUp', async ({ credentials }) => {
  let response = await Axios.post(`${apiConfig.domain}/users`, {
    user: credentials
  })
  console.log(response.data.user);
  return response.data.user;
})

export const signIn = createAsyncThunk('user/signIn', async ({ credentials }) => {
  let response = await Axios.post(`${apiConfig.domain}/users/signin`, {
    user: credentials
  })
  console.log(response.data.user);
  return response.data.user;
})

let userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: ''
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
    }
  },
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    },
    [signUp.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [signIn.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    },
    [signIn.rejected]: (state, action) => {
      state.status = 'failed';
    }
  }
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;

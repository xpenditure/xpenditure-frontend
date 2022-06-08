import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const initialState = {
  user: {},
  status: 'idle',
  error: {},
};

export const registerUserAsync = createAsyncThunk(
  'user/registerUserAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/users/register`,
        payload,
        config
      );

      console.log('register data', data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  'user/loginUserAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/users/login`,
        payload,
        config
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfoFromStorage(state) {
      const userInfo =
        global.window && global.window.localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null;

      if (userInfo) {
        state.user = userInfo;
      }
    },
  },
  extraReducers: {
    [registerUserAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [registerUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      window.location.href = '/dashboard';
    },
    [registerUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },

    [loginUserAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [loginUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      window.location.href = '/dashboard';
    },
    [loginUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },
  },
});

export const { getUserInfoFromStorage } = userSlice.actions;
export default userSlice.reducer;

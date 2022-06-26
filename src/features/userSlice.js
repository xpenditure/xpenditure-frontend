import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const initialState = {
  user: {},
  status: 'idle',
  error: null,
  isAuth: false,
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
        `${BASE_URL}/user/register`,
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
        `${BASE_URL}/user/login`,
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getTokenFromStorage(state) {
      const token = localStorage.getItem('token')
        ? JSON.parse(localStorage.getItem('token'))
        : null;
      if (token) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
    },

    clearTokenFromStorage() {
      localStorage.removeItem('token');
      window.location.href = '/auth';
    },
  },
  extraReducers: {
    [loginUserAsync.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [loginUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      window.location.href = '/';
      state.error = null;
    },
    [loginUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },

    [registerUserAsync.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [registerUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      window.location.href = '/';
      state.error = null;
    },
    [registerUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },
  },
});

export const { getTokenFromStorage, clearTokenFromStorage } = userSlice.actions;
export default userSlice.reducer;

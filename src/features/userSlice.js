import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, TOKEN } from '../utils/constants';
import { getFromLS, setToLS } from '../utils/storage';

const initialState = {
  user: {},
  status: 'idle',
  errorMsg: null,
  errorFields: null,
  isAuth: false,
  accentColor: '',
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
        error.response && error.response.data
          ? error.response.data
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

export const getUserProfileAsync = createAsyncThunk(
  'user/getUserProfileAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      };

      const { data } = await axios.get(`${BASE_URL}/user/profile`, config);

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

export const updateUserProfileAsync = createAsyncThunk(
  'user/updateUserProfileAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      };

      const { data } = await axios.put(
        `${BASE_URL}/user/profile`,
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
      const token = getFromLS('token');
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

    setUserData(state, action) {
      state.user = action.payload;
    },
    setColor(state, action) {
      state.user.color = action.payload;
    },
    setBackground(state, action) {
      state.user.background = action.payload;
    },
  },
  extraReducers: {
    [loginUserAsync.pending]: (state) => {
      state.status = 'loading';
      state.errorMsg = null;
      state.errorFields = null;
    },
    [loginUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      window.location.href = '/dashboard';
      state.errorMsg = null;
      state.errorFields = null;
    },
    [loginUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.errorMsg = action.payload;
    },

    [registerUserAsync.pending]: (state) => {
      state.status = 'loading';
      state.errorMsg = null;
      state.errorFields = null;
    },
    [registerUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      window.location.href = '/dashboard';
      state.errorMsg = null;
      state.errorFields = null;
    },
    [registerUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.errorMsg = action.payload.message;
      state.errorField = action.payload.errors;
    },

    [getUserProfileAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [getUserProfileAsync.fulfilled]: (state, action) => {
      state.user = action.payload.payload;
      setToLS('accent-color', action.payload.payload.color);
      setToLS('accent-bg', action.payload.payload.background);
      state.status = 'idle';
    },
    [getUserProfileAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.errorMsg = action.payload.message;
    },

    [updateUserProfileAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [updateUserProfileAsync.fulfilled]: (state, action) => {
      state.user = action.payload.payload;
      state.errorMsg = action.payload.message;
      state.status = 'idle';
    },
    [updateUserProfileAsync.rejected]: (state, action) => {
      state.errorMsg = action.payload.message;
      state.status = 'idle';
    },
  },
});

export const {
  getTokenFromStorage,
  clearTokenFromStorage,
  setUserData,
  setColor,
  setBackground,
} = userSlice.actions;
export default userSlice.reducer;

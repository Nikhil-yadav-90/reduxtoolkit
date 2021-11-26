import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userData = createAsyncThunk('useData', async (id) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  console.log(response.data);
});

const initialState = {
  users: [],
  error: {},
  loading: false,
};

const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    getuser: (state, action) => action.payload,
  },
  extraReducers: {
    [userData.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [userData.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
export const { getuser } = userSlice.actions;
export default userSlice.reducer;

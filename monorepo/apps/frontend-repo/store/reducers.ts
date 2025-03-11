import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchUserStart(state) {
      state.loading = true;
    },
    fetchUserSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchUserFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;
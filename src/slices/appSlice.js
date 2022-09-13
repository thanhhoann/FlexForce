import { createSlice } from '@reduxjs/toolkit';

const initialState = { userType: '' };
const AppSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setUserType: (state, payload) => {
      state.userType = payload.payload;
    },
  },
});

export const appSelect = state => state.app;
export const appActions = AppSlice.actions;
export default AppSlice;

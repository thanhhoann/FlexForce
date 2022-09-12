import { createSlice } from '@reduxjs/toolkit';

const initialState = { route: '/' };
const RouteSlice = createSlice({
  name: 'route',
  initialState: initialState,
  reducers: {
    setRoute: (state, payload) => {
      state.route = payload.payload;
    },
  },
});

export const routeSelect = state => state.route;
export const routeActions = RouteSlice.actions;
export default RouteSlice;

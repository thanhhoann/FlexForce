import { configureStore } from '@reduxjs/toolkit';
import Slices from './slices';

const store = configureStore({
  reducer: {
    route: Slices.route,
    auth: Slices.auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

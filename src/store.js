import { configureStore } from '@reduxjs/toolkit';
import Slices from './slices';

const store = configureStore({
  reducer: {
    app: Slices.app,
    route: Slices.route,
    auth: Slices.auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

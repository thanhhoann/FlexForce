import AppSlice from './appSlice';
import AuthSlice from './authSlice';
import RouteSlice from './routeSlice';

const Slices = {
  app: AppSlice.reducer,
  route: RouteSlice.reducer,
  auth: AuthSlice.reducer,
};

export default Slices;

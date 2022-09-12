import AuthSlice from './authSlice';
import RouteSlice from './routeSlice';

const Slices = {
  route: RouteSlice.reducer,
  auth: AuthSlice.reducer,
};

export default Slices;

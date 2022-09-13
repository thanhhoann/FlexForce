import { HOME, PAGE404, SIGNIN } from './utils/route_name';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  ProtectedRoute,
} from 'react-router-dom';
import SignIn from './pages/signin/SignIn';
import Home from './pages/home/Home';
import PageNotFound from './pages/page-not-found/PageNotFound';
import { generateRoutes } from './utils/helpers';

export const AppRouteConfig = [
  {
    level: 0,
    path: SIGNIN,
    title: 'Sign In',
    component: <SignIn />,
  },
  {
    level: 0,
    path: HOME,
    isProtected: true,
    title: 'Home',
    component: <Home />,
  },
  {
    level: 0,
    path: PAGE404,
    title: 'Not found',
    component: <PageNotFound />,
  },
];

export default function AppRoute() {
  const routes = generateRoutes(AppRouteConfig);
  return (
    <>
      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </>
  );
}

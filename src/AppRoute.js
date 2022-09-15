import { HOME, PAGE404, SIGNIN, SIGNUP } from './utils/route_name';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  ProtectedRoute,
} from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import { generateRoutes } from './utils/helpers';

import SignIn from './pages/signin';
import Home from './pages/home';
import SignUp from './pages/signup';
import MainLayout from './components/MainLayout.js';

export const AppRouteConfig = [
  {
    level: 0,
    path: SIGNIN,
    title: 'Sign In',
    component: <SignIn />,
  },
  {
    level: 0,
    path: SIGNUP,
    title: 'Sign up',
    component: <SignUp />,
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
      <MainLayout>
        <BrowserRouter>
          <Routes>{routes}</Routes>
        </BrowserRouter>
      </MainLayout>
    </>
  );
}

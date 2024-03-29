import { createStandaloneToast } from "@chakra-ui/toast";
import {
  CONTACT,
  FIND_WORKERS,
  HOME,
  INTRO,
  JOB_LOG,
  PAGE404,
  PICK_ROLE,
  SIGNIN,
  SIGNUP,
  TAKE_JOBS,
  USER_INFO_FORM,
  USER_PROFILE,
} from "./utils/route_name";
import {
  BrowserRouter,
  Outlet,
  ProtectedRoute,
  Route,
  Routes,
} from "react-router-dom";

import PageNotFound from "./pages/page-not-found";
import { generateRoutes } from "./utils/helpers";

import SignIn from "./pages/signin";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import MainLayout from "./components/MainLayout";
import FindWorkers from "./pages/find-workers";
import PickRole from "./pages/pick-role";
import TakeJobs from "./pages/take-jobs";
import UserProfile from "./pages/user-profile";
import Intro from "./pages/intro";
import Contact from "./pages/contact";
import { ParallaxProvider } from "react-scroll-parallax";
import JobLog from "./pages/job-log";
import UserInfoForm from "./pages/user-info-form";

export const AppRouteConfig = [
  {
    level: 0,
    path: SIGNIN,
    title: "Sign In",
    component: <SignIn />,
  },
  {
    level: 0,
    path: SIGNUP,
    title: "Sign up",
    component: <SignUp />,
  },
  {
    level: 0,
    path: HOME,
    isProtected: true,
    title: "Home",
    component: <Home />,
  },
  {
    level: 0,
    path: PAGE404,
    title: "Not found",
    component: <PageNotFound />,
  },
  {
    level: 0,
    path: FIND_WORKERS,
    title: "Find Workers",
    component: <FindWorkers />,
  },
  {
    level: 0,
    path: TAKE_JOBS,
    title: "Take Jobs",
    component: <TakeJobs />,
  },
  {
    level: 0,
    path: USER_PROFILE,
    title: "User Profile",
    component: <UserProfile />,
  },
  {
    level: 0,
    path: PICK_ROLE,
    title: "Pick Role",
    component: <PickRole />,
  },
  {
    level: 0,
    path: INTRO,
    title: "Intro",
    component: <Intro />,
  },
  {
    level: 0,
    path: CONTACT,
    title: "Contact",
    component: <Contact />,
  },
  {
    level: 0,
    path: USER_PROFILE,
    title: "User Profile",
    component: <UserProfile />,
  },

  {
    level: 0,
    path: JOB_LOG,
    title: "Job Log",
    component: <JobLog />,
  },
  {
    level: 0,
    path: USER_INFO_FORM,
    title: "User Info Form",
    component: <UserInfoForm />,
  },
];

export default function AppRoute() {
  const { ToastContainer } = createStandaloneToast();
  const routes = generateRoutes(AppRouteConfig);

  return (
    <>
      <ParallaxProvider>
        <MainLayout>
          <BrowserRouter>
            <Routes>{routes}</Routes>
            <ToastContainer />
          </BrowserRouter>
        </MainLayout>
      </ParallaxProvider>
    </>
  );
}

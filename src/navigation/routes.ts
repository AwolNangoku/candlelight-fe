import { IPrivateRoute } from "../types"
import { lazy } from "react"

// Pages
const Login = lazy(() => import("../pages/login"))
const Home = lazy(() => import("../pages/home"))
const Settings = lazy(() => import("../pages/home"))
<<<<<<< HEAD
const Ingredients = lazy(()=> import("../pages/Ingredients"))
=======
const Onboarding = lazy(() => import("../pages/onboarding"))
>>>>>>> 99bd9b164904cef7da25eb10f78b661d3a15eed5

const routes = {
  home: "/",
  login: "/login",
  settings: "/settings",
<<<<<<< HEAD
  ingredients: "ingredients"
=======
  onboarding: "/onboarding",
  onboardingSteps: "/onboarding/:step"
>>>>>>> 99bd9b164904cef7da25eb10f78b661d3a15eed5
}

const publicRoutes = [
  {
    exact: true,
    title: 'Login',
    path: routes.login,
    component: Login
  },
  {
    exact: true,
    title: 'Signup',
    path: routes.home,
    component: Home
<<<<<<< HEAD
  },{
    expect: true,
    title: 'Ingredients',
    path: routes.ingredients,
    component: Ingredients
  }
=======
  },
  {
    exact: true,
    title: 'Onboarding',
    path: routes.onboarding,
    component: Onboarding
  },
  {
    exact: true,
    title: 'Onboarding',
    path: routes.onboardingSteps,
    component: Onboarding
  },
>>>>>>> 99bd9b164904cef7da25eb10f78b661d3a15eed5
]

const privateRoutes: IPrivateRoute[] = [
  { 
    exact: true,
    title: 'Settings',
    path: routes.settings,
    component: Settings
  },
]
export { publicRoutes, privateRoutes, routes }

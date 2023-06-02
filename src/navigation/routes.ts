import { IPrivateRoute } from "../types"
import { lazy } from "react"

// Pages
const Login = lazy(() => import("../pages/login"))
const Home = lazy(() => import("../pages/home"))
const Settings = lazy(() => import("../pages/home"))

const routes = {
  home: "/",
  login: "/login",
  settings: "/settings"
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
  },
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

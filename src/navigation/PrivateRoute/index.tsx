import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { routes } from "../routes"
import useAuthContext from "../../context/auth-context"

const PrivateRoute: React.FC = () => {
  const location = useLocation()
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    return <Navigate to={routes.login} replace state={{ from: location }} />;
  }
  return <Outlet />
}
export default PrivateRoute;
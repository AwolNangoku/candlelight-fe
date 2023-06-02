import { Suspense } from "react"
import { BrowserRouter, useRoutes } from "react-router-dom"

import PrivateRoute from "../PrivateRoute"
import PublicRoute from "../PublicRoute"
import { Stack, Text } from "@chakra-ui/react"
import { privateRoutes, publicRoutes } from "../routes"
import PageNotFound from "../../pages/PageNotfound"

const LoadingApp = () => <Stack w='100%'><Text>Loading page...</Text></Stack>

const AppNavigation = () =>
  useRoutes([
    {
      element: <PrivateRoute />,
      children: privateRoutes.map((route) => ({
        path: route.path,
        element: <route.component />
      }))
    },
    {
      element: <PublicRoute />,
      children: publicRoutes.map((route) => ({ path: route.path, element: <route.component /> }))
    },
    {
      element: <PageNotFound />,
      path: '*'
    }
  ])

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingApp />}>
        <AppNavigation />
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter

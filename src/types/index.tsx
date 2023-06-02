import { LazyExoticComponent } from "react"

export interface IPrivateRoute {
  exact: boolean
  title: string
  path: string
  component: LazyExoticComponent<() => JSX.Element>
  handle?: { crumb: string }
}
import React, { createContext, useContext } from "react"

// types & enums
import { tokenKey } from "../enums"

// helper functions
import { removeLocalStorageItem } from "../helpers/localstorage"
import { getSignedInUser } from "../helpers"

interface IAuthContextProps {
  login: (email: string, password: string, rememberMe: boolean) => void
  logOut: () => void
  signedInUser?: any
  idToken?: string,
  isAuthenticated: boolean
  onboardUser: () => void
  signup: (email: string, password: string, dateOfBirth: string) => void
}

interface IChildren {
  children: React.ReactNode
}

const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({ children }: IChildren) => {

  const { token: sessionToken, user: signedInUser } = getSignedInUser()

  const login = async (email: string, password: string, rememberMe: boolean) => {
    console.log('---Login logic here', email, password)
  }

  const logOut = async () => {
    await removeLocalStorageItem(tokenKey)
  }

  const signup = (email: string, password: string, dateOfBirth: string) => {
    console.log('---Signup logic here', email, password)
  }

  const onboardUser = () => {
    console.log('---Onbording logic here')
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logOut,
        onboardUser,
        signup,
        signedInUser,
        idToken: sessionToken?.IdToken,
        isAuthenticated: signedInUser && Object.values(signedInUser).length > 0,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => useContext(AuthContext)

export default useAuthContext

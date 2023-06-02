import { tokenKey } from "../enums"
import { getLocalStorageItem } from "./localstorage"

export const getSignedInUser = () => {
  try {
    const localUser = getLocalStorageItem(tokenKey)
    if (localUser) {
      const { AccessToken, ExpiresIn, IdToken, RefreshToken, TokenType, Expire } = localUser
      return {
        token: {
          AccessToken,
          ExpiresIn,
          IdToken,
          RefreshToken,
          TokenType,
          Expire
        } as any,
        user: {
          ...localUser.user
        }
      }
    }
    return { token: {}, user: {} }
  } catch (error) {
    throw new Error('Failied reading persisted user')
  }
}
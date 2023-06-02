import { tokenKey } from "../enums"

export const setLocalStorageItem = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageItem = (key: string) => {
  const item = localStorage.getItem(key)

  if (!item) {
    return null
  }

  return JSON.parse(item)
}

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key)
}

export const getIdTokenFromLocal = () => getLocalStorageItem(tokenKey)?.IdToken || ''

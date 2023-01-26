import { setItemAsync, getItemAsync } from 'expo-secure-store'
const tokenStorageKey = 'TodoJwtToken'

export const setToken = async (token) => {
    const res = await setItemAsync(tokenStorageKey, token)
    return res
}

export const getToken = async () => {
    const token = await getItemAsync(tokenStorageKey)
    return token
}

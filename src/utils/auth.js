let token = null

export const setToken = newToken => {
    token = `bearer ${newToken}`
}

export const header = () => {
    return { headers: { Authorization: token } }
}
const userReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_USER':
            return action.data
        default:
            return state
    }
}

export const setUser = user => {
    return {
        type: 'SET_USER',
        data: user
    }
}

export const removeUser = () => {
    return {
        type: 'SET_USER',
        data: null
    }
}

export default userReducer
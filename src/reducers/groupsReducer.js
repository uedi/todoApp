const groupsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_GROUPS':
            return action.data
        default:
            return state
    }
}

export const setGroups = groups => {
    return {
        type: 'SET_GROUPS',
        data: groups
    }
}

export default groupsReducer
const listsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_LISTS':
            return action.data
        default:
            return state
    }
}

export const setLists = lists => {
    return {
        type: 'SET_LISTS',
        data: lists
    }
}

export default listsReducer
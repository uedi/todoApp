import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import groupsReducer from '../reducers/groupsReducer'
import listsReducer from '../reducers/listsReducer'

const reducer = combineReducers({
    user: userReducer,
    groups: groupsReducer,
    lists: listsReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
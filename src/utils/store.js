import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import groupsReducer from '../reducers/groupsReducer'
import listsReducer from '../reducers/listsReducer'
import notificationReducer from '../reducers/notificationReducer'

const reducer = combineReducers({
    user: userReducer,
    groups: groupsReducer,
    lists: listsReducer,
    notification: notificationReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
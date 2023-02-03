import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import groupsReducer from '../reducers/groupsReducer'
import listsReducer from '../reducers/listsReducer'
import notificationReducer from '../reducers/notificationReducer'
import contactsReducer from '../reducers/contactsReducer'
import messagesReducer from '../reducers/messagesReducer'

const appReducer = combineReducers({
    user: userReducer,
    groups: groupsReducer,
    lists: listsReducer,
    notification: notificationReducer,
    contacts: contactsReducer,
    messages: messagesReducer
})

const rootReducer = (state, action) => {
    if(action.type === 'CLEAR_STATE') {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
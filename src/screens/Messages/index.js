import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MessageInput from './MessageInput'
import messagesService from '../../services/messages'
import { addGroupMessage, removeGroupMessage } from '../../reducers/messagesReducer'
import { showError } from '../../reducers/notificationReducer'
import MessageList from './MessageList'

const Messages = ({ route }) => {
    const groupId = route.params.groupId
    const messages = useSelector(state => state.messages)
    const groupMessages = messages[groupId] || []
    const dispatch = useDispatch()

    const sendMessage = msg => {
        messagesService.sendMessage({
            groupId: groupId,
            message: msg
        })
        .then(response => {
            dispatch(addGroupMessage(groupId, response))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    const handleDeleteMessage = id => {
        messagesService.deleteMessage(id)
        .then(() => {
            dispatch(removeGroupMessage(groupId, id))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.messagesContainer}>
                <MessageList messages={groupMessages} deleteMessage={handleDeleteMessage} />
            </View>
            <MessageInput sendMessage={sendMessage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    messagesContainer: {
        flex: 1,
        alignSelf: 'stretch'
    }
})

export default Messages
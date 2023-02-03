import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MessageInput from './MessageInput'
import messagesService from '../../services/messages'
import { addGroupMessage } from '../../reducers/messagesReducer'
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
            console.log('error in send message', error)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.messagesContainer}>
                <MessageList messages={groupMessages} />
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
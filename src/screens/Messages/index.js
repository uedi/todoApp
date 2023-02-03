import { View, StyleSheet } from 'react-native'
import MessageInput from './MessageInput'

const Messages = () => {

    const sendMessage = msg => {
        console.log('send', msg)
    }

    return (
        <View style={styles.container}>
            <View style={styles.messagesContainer}>
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
        flex: 1
    }
})

export default Messages
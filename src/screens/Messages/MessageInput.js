import { useState } from "react"
import { View, StyleSheet, TouchableNativeFeedback,
    Keyboard, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const MessageInput = ({ sendMessage }) => {
    const [message, setMessage] = useState('')

    const handleSend = () => {
        if(message !== '') {
            Keyboard.dismiss()
            sendMessage(message)
            setMessage('')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.textFieldContainer}>
                <TextInput
                    placeholder='Type a message'
                    value={message}
                    onChangeText={setMessage}
                />
            </View>
            <TouchableNativeFeedback
                    onPress={handleSend}
                >
                    <View style={styles.sendButton}>
                        <MaterialIcons name="send" size={24} color="black" />
                    </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textFieldContainer: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        elevation: 3
    },
    sendButton: {
        margin: 5,
        padding: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd'
    }
})

export default MessageInput
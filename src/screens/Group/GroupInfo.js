import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const GroupInfo = ({ group, handlePeopleIconPress, handleChatIconPress }) => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={handleChatIconPress}
            >
                <View style={styles.button}>
                    <Ionicons name='chatbox-ellipses' size={23} color='black' />
                    <Text style={styles.counter}>{group.messages ? group.messages.length : 0}</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={handlePeopleIconPress}
            >
                <View style={styles.button}>
                    <Ionicons name='people' size={24} color='black' />
                    <Text style={styles.counter}>{group.users ? group.users.length : 0}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    button: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
    },
    counter: {
        marginLeft: 3,
        fontSize: 15
    }
})

export default GroupInfo
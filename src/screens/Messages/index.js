import { View, StyleSheet, Text } from 'react-native'

const Messages = () => {
    return (
        <View style={styles.container}>
            <Text>Messages</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Messages
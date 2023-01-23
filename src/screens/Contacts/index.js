import { View, StyleSheet, Text } from 'react-native'

const Contacts = () => {
    return (
        <View style={styles.container}>
            <Text>Contacts</Text>
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

export default Contacts
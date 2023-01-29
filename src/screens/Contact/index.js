import { View, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

const Contact = ({ route }) => {
    const contacts = useSelector(state => state.contacts)
    const id = route.params?.id
    const contact = contacts && contacts.find(c => c.contactId.toString() === id)

    if (!contact) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{contact.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    name: {
        marginTop: 10,
        marginLeft: 30,
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default Contact
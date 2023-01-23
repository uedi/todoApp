import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'

const ContactListItem = ({ contact, clicked }) => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={() => clicked(contact)}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.name}>{contact.name}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 20,
        overflow: 'hidden'
    },
    innerContainer: {
        flex: 1,
        padding: 20
    },
    name: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700'
    }
})

export default ContactListItem
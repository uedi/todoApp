import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import QRCode from 'react-native-qrcode-svg'

const Contact = ({ route }) => {
    const contacts = useSelector(state => state.contacts)
    const id = route.params?.id
    const contact = contacts && contacts.find(c => c.contactId.toString() === id)
    const size = Dimensions.get('window').width / 2.5

    if (!contact) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{contact.name}</Text>
            { id &&
                <QRCode
                    value={id}
                    size={size}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    name: {
        marginBottom: 30,
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default Contact
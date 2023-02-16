import { useState } from 'react'
import { View, StyleSheet, Text, Dimensions,
    TouchableNativeFeedback } from 'react-native'
import { useSelector } from 'react-redux'
import QRCode from 'react-native-qrcode-svg'
import { MaterialIcons } from '@expo/vector-icons'
import RemoveContact from './RemoveContact'

const Contact = ({ route }) => {
    const contacts = useSelector(state => state.contacts)
    const [removeOpen, setRemoveOpen] = useState(false)
    const id = route.params?.id
    const contact = contacts && contacts.find(c => c.contactId.toString() === id)
    const size = Dimensions.get('window').width / 2.5

    if (!contact) {
        return null
    }

    const handleRemoveContact = (id) => {
        setRemoveOpen(false)
        console.log('remove', id)
    }

    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={() => setRemoveOpen(true)}
            >
                <View style={styles.button}>
                    <MaterialIcons name='person-remove' size={24} color='black' />
                </View>
            </TouchableNativeFeedback>
            <View style={{ height: 30 }} />
            <Text style={styles.name}>{contact.name}</Text>
            { id &&
                <QRCode
                    value={id}
                    size={size}
                />
            }
            <RemoveContact
                isOpen={removeOpen}
                contact={contact}
                close={() => setRemoveOpen(false)}
                removeContact={handleRemoveContact}
            />
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
        fontSize: 19,
        fontWeight: 'bold'
    }
})

export default Contact
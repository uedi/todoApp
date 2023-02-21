import { useState } from 'react'
import { View, StyleSheet, Text, Dimensions,
    TouchableNativeFeedback } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import QRCode from 'react-native-qrcode-svg'
import { MaterialIcons } from '@expo/vector-icons'
import RemoveContact from './RemoveContact'
import contactsService from '../../services/contacts'
import { removeContact } from '../../reducers/contactsReducer'
import { showSuccess, showError } from '../../reducers/notificationReducer'

const Contact = ({ route, navigation }) => {
    const contacts = useSelector(state => state.contacts)
    const [removeOpen, setRemoveOpen] = useState(false)
    const id = route.params?.id
    const dispatch = useDispatch()
    const contact = contacts && contacts.find(c => c.contactId.toString() === id)
    const backgroundColor = contact?.color ? { backgroundColor: contact.color } : {}
    const size = Dimensions.get('window').width / 2.5

    if (!contact) {
        return null
    }

    const handleRemoveContact = (id) => {
        setRemoveOpen(false)
        contactsService.remove(id)
        .then(() => {
            navigation.navigate('Contacts')
            dispatch(removeContact(id))
            dispatch(showSuccess('Contact removed'))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    return (
        <View style={[styles.container, backgroundColor]}>
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
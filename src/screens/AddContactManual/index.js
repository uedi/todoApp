import { View, StyleSheet, KeyboardAvoidingView, Keyboard,
    TouchableWithoutFeedback } from 'react-native'
import AddContactForm from './AddContactForm'
import { addContact } from '../../reducers/contactsReducer'
import { useDispatch } from 'react-redux'
import contactsService from '../../services/contacts'
import { showError } from '../../reducers/notificationReducer'

const AddContactManual = ({ navigation }) => {
    const dispatch = useDispatch()

    const handleAddContact = (data) => {
        contactsService.create(data)
        .then(response => {
            dispatch(addContact(response))
            navigation.navigate('Contacts')
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.innerContainer}>
                    <AddContactForm handleAdd={handleAddContact} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default AddContactManual
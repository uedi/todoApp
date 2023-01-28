import { View, StyleSheet } from 'react-native'
import ContactList from './ContactList'
import { useSelector } from 'react-redux'

const Contacts = ({ navigation }) => {
    const contacts = useSelector(state => state.contacts)

    const contactClicked = contact => {
        navigation.navigate('Contact', { name: contact?.name, id: contact?.id })
    }

    return (
        <View style={styles.container}>
            <ContactList contacts={contacts} contactClicked={contactClicked} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Contacts
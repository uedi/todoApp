import { View, StyleSheet } from 'react-native'
import ContactList from './ContactList'
import { useSelector } from 'react-redux'

const Contacts = () => {
    const contacts = useSelector(state => state.contacts)

    const contactClicked = contact => {
        console.log('clicked', contact.name)
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
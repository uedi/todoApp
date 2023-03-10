import { View, StyleSheet, Dimensions } from 'react-native'
import ContactList from './ContactList'
import { useSelector } from 'react-redux'
import AddButton from '../../components/AddButton'
import Header from '../../components/Header'

const Contacts = ({ navigation }) => {
    const contacts = useSelector(state => state.contacts)

    const contactClicked = contact => {
        navigation.navigate('Contact', { name: contact?.name, id: contact?.contactId })
    }

    const handleAddButton = () => {
        navigation.navigate('AddContact')
    }

    return (
        <View style={styles.container}>
            <Header text='Contacts' />
            <ContactList contacts={contacts} contactClicked={contactClicked} />
            <AddButton onPress={handleAddButton} style={styles.addButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    addButton: {
        position: 'absolute',
        left: Dimensions.get('window').width / 2 - 30,
        bottom: 15
    }
})

export default Contacts
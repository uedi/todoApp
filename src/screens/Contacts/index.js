import { View, StyleSheet, Dimensions } from 'react-native'
import ContactList from './ContactList'
import { useSelector } from 'react-redux'
import AddButton from '../../components/AddButton'

const Contacts = ({ navigation }) => {
    const contacts = useSelector(state => state.contacts)

    const contactClicked = contact => {
        navigation.navigate('Contact', { name: contact?.name, id: contact?.id })
    }

    const handleAddButton = () => {
        navigation.navigate('AddContact')
    }

    return (
        <View style={styles.container}>
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
        width: 60,
        height: 60,
        borderRadius: 30,
        bottom: 15
    }
})

export default Contacts
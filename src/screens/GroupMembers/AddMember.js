import { View, Text, StyleSheet,
    TouchableWithoutFeedback } from 'react-native'
import Modal from 'react-native-modal'
import AddMemberContacts from './AddMemberContacts'

const AddMember = ({ visible, contacts, close }) => {
    const addClicked = contact => {
        console.log('add', contact.name)
    }

    return (
        <Modal
            isVisible={visible}
            customBackdrop={
                <TouchableWithoutFeedback onPress={close}>
                    <View style={styles.backdrop} />
                </TouchableWithoutFeedback>
            }
        >
            <View style={styles.modalContainer}>
                <Text style={styles.topic}>Add contact to group</Text>
                <AddMemberContacts contacts={contacts} addClicked={addClicked}  />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        padding: 15,
        elevation: 3
    },
    backdrop: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.5
    },
    topic: {
        fontSize: 17
    }
})

export default AddMember
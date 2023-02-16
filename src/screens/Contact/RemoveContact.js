import { View, Text, Button, StyleSheet } from 'react-native'
import ModalContainer from '../../components/ModalContainer'

const RemoveContact = ({ isOpen, close, contact, removeContact }) => {

    const handleRemove = () => {
        removeContact(contact.contactId)
    }
    return (
        <ModalContainer
            isOpen={isOpen}
            close={close}
        >
            <View>
                <Text style={styles.topic}>Remove contact</Text>
                <Text>Remove {contact.name} from contacts?</Text>
                <View
                    style={styles.buttons}
                >
                    <Button
                        title='Cancel'
                        onPress={close}
                    />
                    <View style={{ width: 30 }} />
                    <Button
                        title='Remove'
                        onPress={handleRemove}
                        color='red'
                    />
                </View>
            </View>
        </ModalContainer>
    )
}

const styles = StyleSheet.create({
    topic: {
        fontSize: 19,
        fontWeight: '500',
        marginBottom: 20
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default RemoveContact
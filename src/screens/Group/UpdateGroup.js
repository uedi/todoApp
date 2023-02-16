import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard, Button,
    TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import Modal from 'react-native-modal'
import DeleteButton from '../../components/DeleteButton'

const UpdateGroup = ({ group, update, isOpen, close, deleteGroup }) => {
    const [newName, setNewName] = useState(group?.name)

    const changed = group && group.name !== newName && newName !== ''

    const handleUpdate = () => {
        update({
            name: newName
        })
    }

    return (
        <Modal
            isVisible={isOpen}
            customBackdrop={
                <TouchableWithoutFeedback onPress={close}>
                    <View style={styles.backdrop} />
                </TouchableWithoutFeedback>
            }
        >
            <KeyboardAvoidingView style={styles.modalContainer}>
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.innerContainer}>
                        <View style={styles.topicRow}>
                            <Text style={styles.topic}>Update group</Text>
                            <DeleteButton
                                title='Delete group'
                                onPress={deleteGroup}
                            />
                        </View>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.textInput}
                            multiline={false}
                            value={newName}
                            onChangeText={setNewName}
                        />
                        <View style={styles.button}>
                            <Button
                                title='Update'
                                disabled={!changed}
                                onPress={handleUpdate}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        elevation: 3
    },
    innerContainer: {
        padding: 15,
    },
    backdrop: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.5
    },
    topicRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topic: {
        fontSize: 17
    },
    label: {
        marginTop: 20,
    },
    textInput: {
        alignSelf: 'stretch',
        marginVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#eee',
        elevation: 0
    },
    button: {
        alignSelf: 'center',
        width: 200,
        marginBottom: 10,
        marginTop: 30
    }
})

export default UpdateGroup
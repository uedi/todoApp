import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard, Button,
    TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import Modal from 'react-native-modal'
import DropDownPicker from 'react-native-dropdown-picker'
import { backgroundColorsForSelect } from '../../utils/colors'
import DeleteButton from '../../components/DeleteButton'

const UpdateList = ({ list, update, isOpen, close, deleteList }) => {
    const [newName, setNewName] = useState(list?.name)
    const [newColor, setNewColor] = useState(list?.color)
    const [colorPickerOpen, setColorPickerOpen] = useState(false)

    const nameChanged = list && list.name !== newName && newName !== ''
    const colorChanged = list && list.color !== newColor && newColor !== ''
    const changed = nameChanged || colorChanged

    const handleSetColor = valueFunc => {
        setNewColor(valueFunc())
    }

    const handleUpdate = () => {
        update({
            name: newName,
            color: colorChanged ? newColor : null
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
                            <Text style={styles.topic}>Update list</Text>
                            <DeleteButton
                                onPress={deleteList}
                                title='Delete list'
                            />
                        </View>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.textInput}
                            multiline={false}
                            value={newName}
                            onChangeText={setNewName}
                        />
                        <Text style={styles.label}>Color (optional)</Text>
                        <DropDownPicker
                            style={styles.picker(newColor)}
                            open={colorPickerOpen}
                            setOpen={setColorPickerOpen}
                            value={newColor}
                            setValue={handleSetColor}
                            items={backgroundColorsForSelect}
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
    },
    picker: color => ({
        marginTop: 5,
        alignSelf: 'stretch',
        backgroundColor: color || ''
    })
})

export default UpdateList
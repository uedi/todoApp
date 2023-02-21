import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import DeleteButton from '../../components/DeleteButton'
import DropDownPicker from 'react-native-dropdown-picker'
import { backgroundColorsForSelect } from '../../utils/colors'
import ModalContainer from '../../components/ModalContainer'

const UpdateGroup = ({ group, update, isOpen, close, deleteGroup }) => {
    const [newName, setNewName] = useState(group?.name)
    const [newColor, setNewColor] = useState(group?.color)
    const [colorPickerOpen, setColorPickerOpen] = useState(false)

    const nameChanged = group && group.name !== newName && newName !== ''
    const colorChanged = group && group.color !== newColor && newColor !== ''
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
        <ModalContainer
            isOpen={isOpen}
            close={close}
        >
            <>
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
            </>
        </ModalContainer>
    )
}

const styles = StyleSheet.create({
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

export default UpdateGroup
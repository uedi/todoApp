import { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { backgroundColorsForSelect } from '../../utils/colors'
import ModalContainer from '../../components/ModalContainer'

const UpdateContact = ({ contact, update, isOpen, close }) => {
    const [newColor, setNewColor] = useState(contact?.color)
    const [colorPickerOpen, setColorPickerOpen] = useState(false)
    const colorChanged = contact && contact.color !== newColor && newColor !== ''

    const handleSetColor = valueFunc => {
        setNewColor(valueFunc())
    }

    const handleUpdate = () => {
        update(contact.contactId, {
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
                    <Text style={styles.topic}>Update contact</Text>
                </View>
                <Text style={styles.label}>Color</Text>
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
                        disabled={!colorChanged}
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    topic: {
        fontSize: 17
    },
    label: {
        marginTop: 20,
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

export default UpdateContact
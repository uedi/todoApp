import { useState } from "react"
import { View, StyleSheet, TextInput, Button, Text } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { backgroundColorsForSelect } from "../../utils/colors"

const CreateGroupForm = ({ createGroup }) => {
    const [name, setName] = useState('')
    const [color, setColor] = useState()
    const [colorPickerOpen, setColorPickerOpen] = useState(false)

    const handleCreate = () => {
        if(name !== '') {
            createGroup({
                name: name,
                color: color ? color : null
            })
        }
    }

    const handleSetColor = valueFunc => {
        setColor(valueFunc())
    }

    return (
        <>
            <Text style={styles.text}>Name</Text>
            <TextInput
                multiline={false}
                style={styles.textInput}
                textAlign='center'
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.text}>Color (optional)</Text>
            <DropDownPicker
                style={styles.picker(color)}
                open={colorPickerOpen}
                setOpen={setColorPickerOpen}
                value={color}
                setValue={handleSetColor}
                items={backgroundColorsForSelect}
            />
            <View style={styles.button}>
                <Button
                    title='Create'
                    disabled={name === ''}
                    onPress={handleCreate}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 15,
        marginHorizontal: 15
    },
    textInput: {
        alignSelf: 'stretch',
        marginHorizontal: 15,
        marginVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        elevation: 0
    },
    button: {
        alignSelf: 'center',
        width: 200,
        marginVertical: 15,
        marginBottom: 50
    },
    picker: color => ({
        alignSelf: 'stretch',
        backgroundColor: color || ''
    })
})

export default CreateGroupForm
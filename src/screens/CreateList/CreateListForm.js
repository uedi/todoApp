import { useState } from "react"
import {View, StyleSheet, TextInput, Button, Text } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { useSelector } from "react-redux"

const CreateListForm = ({ createList }) => {
    const [name, setName] = useState('')
    const [groupId, setGroupId] = useState()
    const [groupPickerOpen, setGroupPickerOpen] = useState(false)

    const groups = useSelector(state => state.groups)

    const pickerContent = groups ?
        groups.map(g => ({ value: g.id, label: g.name }))
        : []

    const handleCreate = () => {
        if(name !== '') {
            createList({
                name: name,
                groupId: groupId
            })
        }
    }

    const handleSetGroup = valueFunc => {
        setGroupId(valueFunc())
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
            <Text style={styles.text}>Group (optional)</Text>
            <DropDownPicker
                style={styles.picker}
                open={groupPickerOpen}
                setOpen={setGroupPickerOpen}
                value={groupId}
                setValue={handleSetGroup}
                items={pickerContent}
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
    picker: {
        alignSelf: 'stretch'
    }
})

export default CreateListForm
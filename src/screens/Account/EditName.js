import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import ModalContainer from '../../components/ModalContainer'

const EditName = ({ isOpen, close, name, changeName }) => {
    const [newName, setNewName] = useState(name)
    const saveEnabled = newName && name !== newName && newName !== ''

    const handleChange = () => {
        changeName(newName)
    }

    return (
        <ModalContainer
            isOpen={isOpen}
            close={close}
        >
            <>
                <Text style={styles.topic}>Edit name</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    value={newName}
                    onChangeText={setNewName}
                />
                <View style={styles.button}>
                    <Button
                        title='Change'
                        disabled={!saveEnabled}
                        onPress={handleChange}
                    />
                </View>
            </>
        </ModalContainer>
    )
}

const styles = StyleSheet.create({
    topic: {
        fontSize: 17
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

export default EditName
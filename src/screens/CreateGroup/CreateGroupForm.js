import { useState } from "react"
import {View, StyleSheet, TextInput, Button, Text } from 'react-native'

const CreateGroupForm = ({ createGroup }) => {

    const [name, setName] = useState('')

    const handleCreate = () => {
        if(name !== '') {
            createGroup({
                name: name
            })
        }
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
    }
})

export default CreateGroupForm
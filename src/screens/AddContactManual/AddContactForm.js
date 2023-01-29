import { useState } from "react"
import { View, StyleSheet, TextInput, Button, Text } from 'react-native'

const AddContactForm = ({ handleAdd }) => {
    const [username, setUsername] = useState('')

    const valid = username !== ''

    const handleAddContact = () => {
        if(valid) {
            handleAdd({
                username: username
            })
        }
    }

    return (
        <>  
            <Text style={styles.text}>Contact's username</Text>
            <TextInput
                multiline={false}
                style={styles.textInput}
                textAlign='center'
                value={username}
                onChangeText={setUsername}
            />
            <View style={styles.button}>
                <Button
                    title='Add contact'
                    disabled={!valid}
                    onPress={handleAddContact}
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

export default AddContactForm
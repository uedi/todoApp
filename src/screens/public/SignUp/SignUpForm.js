import { useState } from "react"
import { View, StyleSheet, TextInput, Button, Text } from 'react-native'

const SignUpForm = ({ signup }) => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const valid = username !== '' && password !== '' && name !== ''

    const handleSignup = () => {
        if(valid) {
            signup({
                username: username,
                password: password,
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
            <Text style={styles.text}>Username</Text>
            <TextInput
                multiline={false}
                style={styles.textInput}
                textAlign='center'
                value={username}
                onChangeText={setUsername}
            />
            <Text style={styles.text}>Password</Text>
            <TextInput
                multiline={false}
                style={styles.textInput}
                textAlign='center'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <View style={styles.button}>
                <Button
                    title='Signup'
                    disabled={!valid}
                    onPress={handleSignup}
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

export default SignUpForm
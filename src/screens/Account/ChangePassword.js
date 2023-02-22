import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import ModalContainer from '../../components/ModalContainer'

const ChangePassword = ({ isOpen, close, changePassword }) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const enabled = oldPassword !== '' && newPassword !== ''

    const handleChange = () => {
        changePassword({
            password: oldPassword,
            newpassword: newPassword
        })
    }

    return (
        <ModalContainer
            isOpen={isOpen}
            close={close}
        >
            <>
                <Text style={styles.topic}>Change password</Text>
                <Text style={styles.label}>Current password</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    value={oldPassword}
                    onChangeText={setOldPassword}
                    secureTextEntry
                />
                <Text style={styles.label}>New password</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry
                />
                <View style={styles.button}>
                    <Button
                        title='Change'
                        disabled={!enabled}
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

export default ChangePassword
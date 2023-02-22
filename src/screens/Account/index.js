import { useState } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../../reducers/userReducer'
import ChangePassword from './ChangePassword'
import accountService from '../../services/account'
import { showSuccess, showError } from '../../reducers/notificationReducer'

const Account = () => {
    const [changePasswordOpen, setChangePasswordOpen] = useState(false)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(removeUser())
    }

    const handleChangePassword = (data) => {
        setChangePasswordOpen(false)
        accountService.changePassword(data)
        .then(() => {
            dispatch(showSuccess('Password changed'))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.infoRow}>
                <Text>Name</Text>
                <Text style={styles.userInfo}>{user?.user?.name}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text>Username</Text>
                <Text style={styles.userInfo}>{user?.user?.username}</Text>
            </View>
            <View style={{ height: 30 }} />
            <Button
                title='Change password'
                onPress={() => setChangePasswordOpen(true)}
            />
            <View style={{ height: 50 }} />
            <Button
                title='Logout'
                onPress={handleLogout}
            />
            <ChangePassword
                isOpen={changePasswordOpen}
                close={() => setChangePasswordOpen(false)}
                changePassword={handleChangePassword}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        alignItems: 'center'
    },
    infoRow: {
        marginHorizontal: 30,
        marginBottom: 30,
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    userInfo: {
        flex: 1,
        textAlign: 'right'
    },
    button: {
        alignSelf: 'stretch',
        marginTop: 30
    }
})

export default Account
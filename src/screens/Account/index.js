import { View, StyleSheet, Button, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../../reducers/userReducer'

const Account = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(removeUser())
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
            <Button
                title='Logout'
                onPress={handleLogout}
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
    }
})

export default Account
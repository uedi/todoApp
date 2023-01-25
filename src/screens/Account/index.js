import { View, StyleSheet, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../reducers/userReducer'

const Account = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(removeUser())
    }

    return (
        <View style={styles.container}>
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
    }
})

export default Account
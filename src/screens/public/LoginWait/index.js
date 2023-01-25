import { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Spinner from '../../../components/Spinner'
import accountService from '../../../services/account'
import { setUser } from '../../../reducers/userReducer'
import { useDispatch } from 'react-redux'

const LoginWait = ({ navigation, route }) => {
    const credentials = route.params?.credentials

    const dispatch = useDispatch()

    useEffect(() => {
        accountService.login(credentials)
        .then(response => {
            if(response) {
                dispatch(setUser(response))
            } else {
                console.log('no response in login')
                navigation.goBack()
            }
        })
        .catch(error => {
            console.log('error in login', error)
            navigation.goBack()
        })
    }, [dispatch])

    return (
        <View style={styles.container}>
            <Spinner text='Just a moment' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default LoginWait
import { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Spinner from '../../../components/Spinner'
import accountService from '../../../services/account'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../reducers/userReducer'
import { showError } from '../../../reducers/notificationReducer'

const CreatingAccount = ({ navigation, route }) => {
    const signupData = route.params?.signupData
    const dispatch = useDispatch()

    useEffect(() => {
        accountService.signup(signupData)
        .then(response => {
            if(response) {
                console.log(response)
                dispatch(setUser(response))
            } else {
                console.log('no signup response')
                navigation.goBack()
            }
        })
        .catch(error => {
            dispatch(showError(error))
            navigation.goBack()
        })
    }, [dispatch])

    return (
        <View style={styles.container}>
            <Spinner text='Creating new account' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default CreatingAccount
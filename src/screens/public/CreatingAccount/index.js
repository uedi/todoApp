import { View, StyleSheet } from 'react-native'
import Spinner from '../../../components/Spinner'

const CreatingAccount = () => {
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
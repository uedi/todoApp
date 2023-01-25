import { View, StyleSheet, KeyboardAvoidingView, Keyboard,
    TouchableWithoutFeedback } from 'react-native'
import SignUpForm from './SignUpForm'

const SignUp = () => {

    const handleSignup = data => {
        console.log('signup', data)
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.innerContainer}>
                    <SignUpForm signup={handleSignup} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default SignUp
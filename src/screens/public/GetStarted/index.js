import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title='Signup'
                onPress={() => navigation.navigate('SignUp')}
            />
            <View style={{ height: 50 }} />
            <Button
                title='Login'
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 75
    }
})

export default GetStarted
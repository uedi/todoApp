import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'

const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.topic}
            >Todo App</Text>
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
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    topic: {
        alignSelf: 'center',
        fontSize: 21,
        marginBottom: 50,
        fontWeight: '500'
    }
})

export default GetStarted
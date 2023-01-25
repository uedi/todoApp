import { useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, BackHandler } from 'react-native'

const Spinner = ({ text, blockBack = true }) => {

    const handleBackPress = () => {
        return blockBack
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
        } 
    }, [])

    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 17,
        margin: 15,
        textAlign: 'center'
    }
})

export default Spinner
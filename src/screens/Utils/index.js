import { View, StyleSheet, Text } from 'react-native'

const Utils = () => {
    return (
        <View style={styles.container}>
            <Text>Utils</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Utils
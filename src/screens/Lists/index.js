import { View, StyleSheet, Text } from 'react-native'

const Lists = () => {
    return (
        <View style={styles.container}>
            <Text>Lists</Text>
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

export default Lists
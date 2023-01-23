import { View, StyleSheet, Text } from 'react-native'

const CreateList = () => {
    return (
        <View style={styles.container}>
            <Text>Create list</Text>
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

export default CreateList
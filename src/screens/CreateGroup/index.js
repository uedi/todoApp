import { View, StyleSheet, Text } from 'react-native'

const CreateGroup = () => {
    return (
        <View style={styles.container}>
            <Text>Create group</Text>
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

export default CreateGroup
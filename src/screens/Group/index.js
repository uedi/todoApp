import { View, StyleSheet, Text } from 'react-native'

const Group = ({ route }) => {
    const name = route.params?.name
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
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

export default Group
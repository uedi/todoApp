import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>TodoApp</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Main
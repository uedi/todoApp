import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Stack from './navigation/Stack'

const Main = () => {
    return (
        <View style={styles.container}>
            <Stack />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Main
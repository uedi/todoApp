import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import Stack from './navigation/Stack'

const Main = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Stack />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    container: {
        flex: 1
    }
})

export default Main
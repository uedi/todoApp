import { View, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Link from '../../components/Link'

const More = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header text={'More'} />
            <ScrollView style={styles.links}>
                <Link text='Account' onPress={() => { navigation.navigate('Account') }} />
                <Link text='Requests' onPress={() => { navigation.navigate('Requests') }} />
                <Link text='My ID' onPress={() => { navigation.navigate('MyId') }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    links: {
        marginTop: 15
    }
})

export default More
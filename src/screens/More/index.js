import { View, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Link from '../../components/Link'

const More = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header text={'More'} />
            <ScrollView style={styles.links}>
                <Link text='About' onPress={() => { navigation.navigate('About') }} />
                <Link text='Settings' onPress={() => { navigation.navigate('Settings') }} />
                <Link text='Contacts' onPress={() => { navigation.navigate('Contacts') }} />
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
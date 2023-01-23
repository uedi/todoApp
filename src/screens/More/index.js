import { View, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Link from '../../components/Link'

const More = () => {
    return (
        <View style={styles.container}>
            <Header text={'More'} />
            <ScrollView style={styles.links}>
                <Link text='About' onPress={() => {}} />
                <Link text='Settings' onPress={() => {}} />
                <Link text='Contacts' onPress={() => {}} />
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
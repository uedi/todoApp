import { View, StyleSheet, Button } from 'react-native'

const AddContact = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                title="Enter username"
                onPress={() => navigation.navigate('AddContactManual')}
            />
            <View style={{ height: 50 }} />
            <Button
                style={styles.button}
                title="Scan qr code"
                onPress={() => navigation.navigate('AddContactScan')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 30,
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        alignSelf: 'stretch'
    }

})

export default AddContact
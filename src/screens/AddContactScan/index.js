import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import Scanner from '../../components/Scanner'
import { addContact } from '../../reducers/contactsReducer'
import { useDispatch } from 'react-redux'
import contactsService from '../../services/contacts'
import { showError } from '../../reducers/notificationReducer'

const AddContactScan = ({ navigation }) => {
    const [ready, setReady] = useState(false)
    const dispatch = useDispatch()

    if(!ready) {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => setReady(true)}
                    title='Scan'
                />
            </View>
        )
    }

    const handleScanResult = (type, data) => {
        setReady(false)
        contactsService.create({
            id: data
        })
        .then(response => {
            dispatch(addContact(response))
            navigation.navigate('Contacts')
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    return (
        <View style={styles.container}>
            <Scanner
                ready={ready}
                onScanned={handleScanResult}
            />
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

export default AddContactScan
import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import Scanner from '../../components/Scanner'

const AddContactScan = () => {
    const [ready, setReady] = useState(false)

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
        console.log('scanned', type, data)
        setReady(false)
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
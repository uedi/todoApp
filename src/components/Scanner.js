import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

const Scanner = ({ ready, onScanned }) => {
    const [hasPermission, setHasPermission] = useState(null)

    useEffect(() => {
        const getPermission = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        }
        getPermission()
    }, [])

    if(hasPermission === null) {
        return null
    }

    if(hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text>No permission to use scanner</Text>
            </View>
        )
    }

    const handleScanned = ({ type, data }) => {
        onScanned(type, data)
    }

    return (
        <BarCodeScanner
            onBarCodeScanned={ ready ? handleScanned : undefined }
            style={StyleSheet.absoluteFillObject}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Scanner
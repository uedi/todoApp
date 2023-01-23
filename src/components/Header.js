import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ text }) => {
    return (
        <View style={styles.container}>
            { text && <Text style={styles.headerText}>{text}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 25,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    headerText: {
        fontSize: 24,
        fontWeight: '700'
    },
})

export default Header
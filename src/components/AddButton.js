import React from 'react'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'

const AddButton = ({ onPress, style, textStyle }) => {
    const buttonStyles = [styles.button, style]
    const textStyles = [styles.text, textStyle]
    return (
        <TouchableHighlight
            style={buttonStyles}
            onPress={onPress}
        >
            <Text style={textStyles}>+</Text>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        elevation: 8,
        zIndex: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 34
    }
})

export default AddButton
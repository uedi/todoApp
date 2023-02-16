import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'

const AddButton = ({ onPress, style, textStyle }) => {
    const buttonStyles = [styles.button, style]
    const textStyles = [styles.text, textStyle]
    return (
        <Pressable
            style={({ pressed}) => [buttonStyles,
                {
                    backgroundColor: pressed ? '#eee' : '#fff'
                }
            ]}
            onPress={onPress}
        >
            <Text style={textStyles}>+</Text>

        </Pressable>
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
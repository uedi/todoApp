import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const DeleteIconButton = ({ onPress, color = 'red' }) => {

    return (
        <TouchableNativeFeedback
            onPress={onPress}
        >
            <View style={styles.button}>
                <MaterialIcons name='delete' size={24} color={color} />
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 15,
        padding: 1
    }
})

export default DeleteIconButton
import { Pressable, Text, StyleSheet } from 'react-native'

const DeleteButton = ({ title, onPress }) => {
    return (
        <Pressable
            style={styles.deleteButton}
            onPress={onPress}
        >
            <Text style={styles.deleteText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    deleteButton: {
        padding: 3,
        borderColor: '#eee',
        borderWidth: 2,
        borderRadius: 5
    },
    deleteText: {
        color: 'red'
    }
})

export default DeleteButton
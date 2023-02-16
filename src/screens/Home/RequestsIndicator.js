import { Text, Pressable, StyleSheet } from 'react-native'

const RequestsIndicator = ({ count, onPress }) => (
    <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            styles.button,
            {
                backgroundColor: pressed ? '#eee' : '#fff'
            }
        ]}
    >
        <Text style={styles.text}>New membership requests ({ count })</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    button: {
        elevation: 2,
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5
    },
    text: {
        color: '#2196F3',
        fontWeight: '500'
    }
})

export default RequestsIndicator
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
        <Text>New membership requests ({ count })</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    button: {
        elevation: 1,
        padding: 10,
        borderRadius: 5
    }
})

export default RequestsIndicator
import { View, StyleSheet} from 'react-native'

const Todo = ({ route }) => {
    const id = route.params?.id
    console.log('todo', id)
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Todo
import { View, StyleSheet, Text } from 'react-native'
import CheckBox from 'expo-checkbox'


const TodoListItem = ({ todo, updateTodo }) => {

    const handleValueChange = (value) => {
        updateTodo({
            id: todo.id,
            done: value
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.todoName}>{todo.name}</Text>
            <CheckBox
                value={todo.done}
                onValueChange={handleValueChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 30,
        elevation: 1,
        borderRadius: 5,
    },
    todoName: {
        color: '#000',
        fontSize: 17
    }
})

export default TodoListItem
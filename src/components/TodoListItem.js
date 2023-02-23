import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'
import CheckBox from 'expo-checkbox'
import { format } from 'date-fns'
import DeleteIconButton from './DeleteIconButton'

const TodoListItem = ({ todo, updateTodo, deleteTodo, showDelete, todoClicked, color }) => {

    const startDate = todo.start ? Date.parse(todo.start) : null
    const endDate = todo.end ? Date.parse(todo.end) : null
    const backgroundColor = color ? { backgroundColor: color } : {}

    const handleValueChange = (value) => {
        updateTodo({
            id: todo.id,
            done: value
        })
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    return (
        <View style={[styles.container, backgroundColor]}>
            <View style={styles.row}>
                <TouchableNativeFeedback
                    onPress={() => todoClicked(todo)}
                >
                    <View style={styles.todoButton}>
                        <Text style={styles.todoName}>{todo.name}</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{ flex: 1}} />
                <CheckBox
                    value={todo.done}
                    onValueChange={handleValueChange}
                />
                {showDelete && <DeleteIconButton onPress={handleDelete} />}
            </View>
            { (todo.start || todo.end) &&
                <View style={[styles.row, { marginTop: 5 }]}>
                    <Text style={styles.todoInfo}>
                        {startDate ? `Start ${format(startDate, 'dd.MM.yyyy')}` : ''}
                    </Text>
                    <Text style={styles.todoInfo}>
                        {endDate ? `DL ${format(endDate, 'dd.MM.yyyy')}` : ''}
                    </Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 30,
        elevation: 1,
        borderRadius: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    todoName: {
        color: '#000',
        fontSize: 17,
        flex: 1
    },
    todoButton: {
        paddingVertical: 2,
        paddingHorizontal: 4,
        backgroundColor: '#fff',
        elevation: 2,
    },
    todoInfo: {
        color: '#000',
        fontSize: 14
    }
})

export default TodoListItem
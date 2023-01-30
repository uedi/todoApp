import { View, StyleSheet, Text } from 'react-native'
import CheckBox from 'expo-checkbox'
import { format } from 'date-fns'

const TodoListItem = ({ todo, updateTodo }) => {

    const startDate = todo.start ? Date.parse(todo.start) : null
    const endDate = todo.end ? Date.parse(todo.end) : null

    const handleValueChange = (value) => {
        updateTodo({
            id: todo.id,
            done: value
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.todoName}>{todo.name}</Text>
                <CheckBox
                    value={todo.done}
                    onValueChange={handleValueChange}
                />
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
        fontSize: 17
    },
    todoInfo: {
        color: '#000',
        fontSize: 14
    }
})

export default TodoListItem
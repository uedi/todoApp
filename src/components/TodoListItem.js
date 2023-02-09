import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'
import CheckBox from 'expo-checkbox'
import { format } from 'date-fns'
import { MaterialIcons } from '@expo/vector-icons'

const TodoListItem = ({ todo, updateTodo, deleteTodo, showDelete, todoClicked }) => {

    const startDate = todo.start ? Date.parse(todo.start) : null
    const endDate = todo.end ? Date.parse(todo.end) : null

    const handleValueChange = (value) => {
        updateTodo({
            id: todo.id,
            done: value
        })
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    const DeleteButton = () => (
        <TouchableNativeFeedback
            onPress={handleDelete}
        >
            <View style={styles.button}>
                <MaterialIcons name='delete' size={24} color='red' />
            </View>
        </TouchableNativeFeedback>
    )

    return (
        <View style={styles.container}>
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
                {showDelete && <DeleteButton />}
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
    },
    button: {
        marginLeft: 15,
        padding: 1,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd'
    }
})

export default TodoListItem
import { View, StyleSheet, Text, Dimensions, TouchableNativeFeedback } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import TodoList from '../../components/TodoList'
import AddButton from '../../components/AddButton'
import todosService from '../../services/todos'
import { updateTodo } from '../../reducers/listsReducer'
import { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { deleteTodo } from '../../reducers/listsReducer'

const List = ({ route, navigation }) => {
    const [list, setList] = useState()
    const [showDelete, setShowDelete] = useState(false)
    const lists = useSelector(state => state.lists)
    const id = route.params?.id
    const dispatch = useDispatch()

    useEffect(() => {
        if(lists) {
            setList(lists.find(l => l.id.toString() === id))
        } else {
            setList(null)
        }
    }, [lists])

    const handleAddButton = () => {
        navigation.navigate('CreateTodo', { listId: list?.id })
    }

    const handleUpdateTodo = (data) => {
        const dataToSend = { ...data, listId: list?.id }
        todosService.updateTodo(dataToSend)
        .then(response => {
            dispatch(updateTodo(list?.id, response))
        })
        .catch(error => {
            console.log('error in update todo', error)
        })
    }

    const handleDeleteTodo = (id) => {
        todosService.deleteTodo(id)
        .then(() => {})
        .catch(error => {
            console.log('error in delete todo', error)
        })
        .finally(() => {
            dispatch(deleteTodo(list.id, id))
        })
    }

    if(!list) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.topicRow}>
                <Text style={styles.topic}>Todos</Text>
                <TouchableNativeFeedback
                    onPress={() => setShowDelete(!showDelete)}
                >
                    <View style={styles.deleteButton}>
                        <MaterialIcons name='delete' size={22} color='gray' />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <TodoList
                todos={list.todos}
                updateTodo={handleUpdateTodo}
                deleteTodo={handleDeleteTodo}
                showDelete={showDelete}
            />
            <AddButton onPress={handleAddButton} style={styles.addButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topicRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    topic: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    addButton: {
        position: 'absolute',
        left: Dimensions.get('window').width / 2 - 30,
        bottom: 15
    },
    deleteButton: {
        padding: 1,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd'
    }
})

export default List
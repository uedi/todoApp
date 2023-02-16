import { View, StyleSheet, Text, Dimensions, TouchableNativeFeedback } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import TodoList from '../../components/TodoList'
import AddButton from '../../components/AddButton'
import todosService from '../../services/todos'
import listsService from '../../services/lists'
import { updateTodo, deleteTodo, updateList, deleteList } from '../../reducers/listsReducer'
import { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import UpdateList from './UpdateList'
import { showSuccess, showError } from '../../reducers/notificationReducer'

const List = ({ route, navigation }) => {
    const [list, setList] = useState()
    const [updateOpen, setUpdateOpen] = useState(false)
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
            dispatch(showError(error))
        })
    }

    const handleDeleteTodo = (id) => {
        todosService.deleteTodo(id)
        .then(() => {
            dispatch(deleteTodo(list.id, id))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    const handleTodoClicked = (todo) => {
        navigation.navigate('Todo', {
            id: todo.id,
            name: todo.name,
            done: todo.done,
            start: todo.start,
            end: todo.end,
            originName: list.name
        })
    }

    const handleUpdate = (data) => {
        setUpdateOpen(false)
        listsService.update(list.id, data)
        .then(response => {
            dispatch(updateList(response))
            navigation.setOptions({ title: response.name })
            dispatch(showSuccess('List updated'))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    const handleDeleteList = () => {
        const id = list.id
        setUpdateOpen(false)
        listsService.remove(id)
        .then(() => {
            navigation.navigate('Lists')
            dispatch(deleteList(id))
            dispatch(showSuccess('List removed'))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    if(!list) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.toolRow}>
                <TouchableNativeFeedback
                    onPress={() => setUpdateOpen(!updateOpen)}
                >
                    <View style={styles.button}>
                    <MaterialIcons name='edit' size={24} color='black' />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.topicRow}>
                <Text style={styles.topic}>Todos</Text>
                <TouchableNativeFeedback
                    onPress={() => setShowDelete(!showDelete)}
                >
                    <View style={styles.button}>
                        <MaterialIcons name='delete' size={22} color='gray' />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <TodoList
                todos={list.todos}
                updateTodo={handleUpdateTodo}
                deleteTodo={handleDeleteTodo}
                showDelete={showDelete}
                todoClicked={handleTodoClicked}
                color={list.color}
            />
            <UpdateList
                isOpen={updateOpen}
                close={() => setUpdateOpen(false)}
                update={handleUpdate}
                list={list}
                deleteList={handleDeleteList}
            />
            <AddButton onPress={handleAddButton} style={styles.addButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toolRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
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
    button: {
        padding: 1,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd'
    }
})

export default List
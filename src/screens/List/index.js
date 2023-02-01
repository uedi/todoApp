import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import TodoList from '../../components/TodoList'
import AddButton from '../../components/AddButton'
import todosService from '../../services/todos'
import { updateTodo } from '../../reducers/listsReducer'
import { useEffect, useState } from 'react'

const List = ({ route, navigation }) => {
    const [list, setList] = useState()
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

    if(!list) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.topic}>Todos</Text>
            <TodoList todos={list.todos} updateTodo={handleUpdateTodo}/>
            <AddButton onPress={handleAddButton} style={styles.addButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topic: {
        marginTop: 10,
        marginLeft: 30,
        fontSize: 17,
        fontWeight: 'bold'
    },
    addButton: {
        position: 'absolute',
        left: Dimensions.get('window').width / 2 - 30,
        bottom: 15
    }
})

export default List
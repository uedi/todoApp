import { View, StyleSheet, KeyboardAvoidingView, Keyboard,
    TouchableWithoutFeedback } from 'react-native'
import CreateTodoForm from './CreateTodoForm'
import todosService from '../../services/todos'
import { useDispatch } from 'react-redux'
import { addTodoToList } from '../../reducers/listsReducer'
import { addTodoToGroup } from '../../reducers/groupsReducer'

const CreateTodo = ({ route, navigation }) => {
    const listId = route.params?.listId
    const groupId = route.params?.groupId
    const dispatch = useDispatch()

    const handleCreate = data => {
        const todoToCreate = {...data, listId: listId, groupId: groupId }
        todosService.create(todoToCreate)
        .then(response => {
            if(listId) {
                dispatch(addTodoToList(listId, response))
            } 
            if(groupId) {
                dispatch(addTodoToGroup(groupId, response))
            }
            navigation.goBack()
        })
        .catch(error => {
            console.log('error in create todo', error)
        })
    }

    if(!(listId || groupId)) {
        return null
    } else if(listId && groupId) {
        console.log('create todo, both listId and groupId')
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.innerContainer}>
                    <CreateTodoForm create={handleCreate} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default CreateTodo
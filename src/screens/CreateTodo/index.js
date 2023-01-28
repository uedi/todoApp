import { View, StyleSheet, KeyboardAvoidingView, Keyboard,
    TouchableWithoutFeedback } from 'react-native'
import CreateTodoForm from './CreateTodoForm'
import todosService from '../../services/todos'
import { useDispatch } from 'react-redux'
import { addTodoToList } from '../../reducers/listsReducer'

const CreateTodo = ({ route, navigation }) => {
    const listId = route.params?.listId
    const dispatch = useDispatch()

    const handleCreate = data => {
        const todoToCreate = {...data, listId: listId}
        todosService.create(todoToCreate)
        .then(response => {
            dispatch(addTodoToList(response))
            navigation.goBack()
        })
        .catch(error => {
            console.log('error in create todo', error)
        })
    }

    if(!listId) {
        return null
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
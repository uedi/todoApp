import { View, StyleSheet, KeyboardAvoidingView, Keyboard,
    TouchableWithoutFeedback } from 'react-native'
import CreateListForm from './CreateListForm'
import { addList } from '../../reducers/listsReducer'
import { useDispatch } from 'react-redux'
import listService from '../../services/lists'
import { showSuccess, showError } from '../../reducers/notificationReducer'

const CreateList = ({ navigation }) => {
    const dispatch = useDispatch()

    const handleCreate = newList => {
        listService.create(newList)
        .then(response => {
            dispatch(addList(response))
            dispatch(showSuccess('List created'))
            navigation.goBack()
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.innerContainer}>
                    <CreateListForm createList={handleCreate} />
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
        flex: 1
    }
})

export default CreateList
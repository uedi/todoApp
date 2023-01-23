import { View, StyleSheet, KeyboardAvoidingView, Keyboard,
    TouchableWithoutFeedback } from 'react-native'
import CreateListForm from './CreateListForm'
import { addList } from '../../reducers/listsReducer'
import { setNotification } from '../../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import listService from '../../services/lists'

const CreateList = ({ navigation }) => {
    const dispatch = useDispatch()

    const handleCreate = newList => {
        listService.create(newList)
        .then(response => {
            dispatch(addList(response))
            dispatch(setNotification('List Created!', 4))
            navigation.goBack()
        })
        .catch(error => {
            console.log('error in create list')
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
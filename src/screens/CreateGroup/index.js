import { View, StyleSheet, KeyboardAvoidingView, Keyboard,
    TouchableWithoutFeedback } from 'react-native'
import CreateGroupForm from './CreateGroupForm'
import groupService from '../../services/groups'
import { useDispatch } from 'react-redux'
import { addGroup } from '../../reducers/groupsReducer'
import { setNotification } from '../../reducers/notificationReducer'

const CreateGroup = ({ navigation }) => {

    const dispatch = useDispatch()

    const handleCreate = newGroup => {
        groupService.create(newGroup)
        .then(response => {
            dispatch(addGroup(response))
            dispatch(setNotification('Group Created!', 4))
            navigation.goBack()
        })
        .catch(error => {
            console.log('error in create group')
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.innerContainer}>
                    <CreateGroupForm createGroup={handleCreate} />
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

export default CreateGroup
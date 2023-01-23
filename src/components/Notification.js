import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Modal from 'react-native-modal'
import { useSelector, useDispatch } from 'react-redux'
import { removeNotification } from '../reducers/notificationReducer'

const Notification = () => {

    const notification = useSelector(state => state.notification)
    const dispatch = useDispatch()

    if(!notification) {
        return null
    }

    const handleClose = () => {
        dispatch(removeNotification())
    }

    return (
        <Modal
            isVisible={notification !== null}
            customBackdrop={
                <TouchableWithoutFeedback
                    onPress={handleClose}
                >
                    <View style={styles.backdrop} />
                </TouchableWithoutFeedback>
            }
        >
            <View style={styles.container(notification.isError)}>
                <Text style={styles.text(notification.isError)}>{notification.message}</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: isError => ({
        backgroundColor: isError ? 'pink' : 'steelblue',
        padding: 30
    }),
    backdrop: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.5
    },
    text: isError => ({
        color: isError ? '#000' : '#fff',
        fontSize: 17
    })
})

export default Notification
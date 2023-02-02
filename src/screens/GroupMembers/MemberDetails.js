import { View, Text, StyleSheet,
    TouchableWithoutFeedback } from 'react-native'
import Modal from 'react-native-modal'

const MemberDetails = ({ member, close }) => {
    return (
        <Modal
            isVisible={member ? true : false}
            customBackdrop={
                <TouchableWithoutFeedback onPress={close}>
                    <View style={styles.backdrop} />
                </TouchableWithoutFeedback>
            }
        >
            <View style={styles.modalContainer}>
                <Text style={styles.topic}>{member?.name}</Text>
                <Text>Username: {member?.username}</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        padding: 15,
        elevation: 3
    },
    backdrop: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.5
    },
    topic: {
        fontSize: 17
    }
})

export default MemberDetails
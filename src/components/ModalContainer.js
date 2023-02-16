import { View, StyleSheet, Keyboard,
    TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import Modal from 'react-native-modal'

const ModalContainer = ({ isOpen, close, children }) => {
    return (
        <Modal
            isVisible={isOpen}
            customBackdrop={
                <TouchableWithoutFeedback onPress={close}>
                    <View style={styles.backdrop} />
                </TouchableWithoutFeedback>
            }
        >
            <KeyboardAvoidingView style={styles.modalContainer}>
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.innerContainer}>
                        { children }
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        elevation: 3
    },
    innerContainer: {
        padding: 15,
    },
    backdrop: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.5
    }
})

export default ModalContainer
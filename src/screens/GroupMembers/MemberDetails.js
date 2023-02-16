import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Modal from 'react-native-modal'
import QRCode from 'react-native-qrcode-svg'
import DeleteButton from '../../components/DeleteButton'

const MemberDetails = ({ member, close, myId, showRemove, removeContact }) => {
    const isMe = myId === member?.id

    const handleRemoveContact = () => {
        removeContact(member.id)
    }

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
                <View style={styles.modalTopicRow}>
                    <Text style={styles.topic}>{member?.name}</Text>
                    { showRemove && !isMe &&
                        <DeleteButton
                            title={'Remove contact'}
                            onPress={handleRemoveContact}
                        />
                    }
                </View>
                <Text style={styles.username}>Username: {member?.username}</Text>
                { member?.id &&
                <View style={{ alignSelf: 'center'}}>
                    <QRCode
                        value={member.Id}
                        size={120}
                    />
                </View>
            }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        padding: 15,
        elevation: 3,
    },
    backdrop: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.5
    },
    modalTopicRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topic: {
        fontSize: 17
    },
    username: {
        marginVertical: 20
    }
})

export default MemberDetails
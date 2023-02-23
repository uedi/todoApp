import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { format } from 'date-fns'
import DeleteIconButton from '../../components/DeleteIconButton'

const MessageListItem = ({ message, userId, deleteMessage }) => {
    const createdDate = message.createdAt ? Date.parse(message.createdAt) : null
    const myMessage = userId && userId === message.user?.id

    const handleDelete = () => {
        deleteMessage(message.id)
    }

    return (
        <View style={styles.container(myMessage)}>
            <View style={styles.infoRow}>
                <Text style={[styles.info, styles.username]}>{message.user?.name}</Text>
                { myMessage &&
                    <View style={styles.deleteButton}>
                        <DeleteIconButton
                            color='gray'
                            onPress={handleDelete}
                            style={styles.deleteButton}
                        />
                    </View>
                }
                <Text style={styles.info}>{createdDate ? format(createdDate, 'dd.MM.yyyy') : ''}</Text>
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.message}>{message.message}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: myMessage => ({
        padding: 20,
        backgroundColor: myMessage ? '#b3e5fc' : '#fff',
        elevation: 1,
        borderRadius: 20
    }),
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    username: {
        flex: 1
    },
    info: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 5
    },
    message: {
        color: '#000',
        fontSize: 15,
        marginBottom: 5
    },
    deleteButton: {
        marginHorizontal: 3
    }
})

export default MessageListItem
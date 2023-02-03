import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { format } from 'date-fns'

const MessageListItem = ({ message }) => {
    const createdDate = message.createdAt ? Date.parse(message.createdAt) : null
    return (
        <View style={styles.container}>
            <View style={styles.infoRow}>
                <Text style={styles.info}>{message.user?.name}</Text>
                <Text style={styles.info}>{createdDate ? format(createdDate, 'dd.MM.yyyy') : ''}</Text>
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.message}>{message.message}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 20
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
})

export default MessageListItem
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList, View } from 'react-native'
import MessageListItem from './MessageListItem'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const MessageList = ({ messages, deleteMessage }) => {
    const user = useSelector(state => state.user)
    const userId = user?.user.id

    if(!messages) {
        return null
    }

    const renderItem = ({ item, index }) => (
        <MessageListItem
            message={item}
            deleteMessage={deleteMessage}
            userId={userId}
        />
    )

    return (
        <FlatList
            data={messages}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={{ paddingVertical: 15 }}
        />
    )
}

export default MessageList

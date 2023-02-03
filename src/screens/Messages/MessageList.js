import React from 'react'
import { FlatList, View } from 'react-native'
import MessageListItem from './MessageListItem'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const MessageList = ({ messages }) => {
    if(!messages) {
        return null
    }

    const renderItem = ({ item, index }) => (
        <MessageListItem message={item} />
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

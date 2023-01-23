import React from 'react'
import { FlatList, View } from 'react-native'
import GroupListItem from './GroupListItem'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const GroupList = ({ groups, groupClicked }) => {
    if(!groups) {
        return null
    }

    const renderItem = ({ item, index }) => (
        <GroupListItem group={item} clicked={groupClicked} />
    )

    return (
        <FlatList
            data={groups}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={{ paddingVertical: 15 }}
        />
    )
}

export default GroupList

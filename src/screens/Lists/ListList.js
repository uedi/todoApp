import React from 'react'
import { FlatList, View } from 'react-native'
import ListListItem from './ListListItem'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const ListList = ({ lists, listClicked }) => {
    if(!lists) {
        return null
    }

    const renderItem = ({ item, index }) => (
        <ListListItem list={item} clicked={listClicked} />
    )

    return (
        <FlatList
            data={lists}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
            listKey={(item, index) => item.id}
            contentContainerStyle={{ paddingVertical: 15 }}
        />
    )
}

export default ListList

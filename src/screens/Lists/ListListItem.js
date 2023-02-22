import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import TodoStatus from '../../components/TodoStatus'
import ItemContainer from '../../components/ItemContainer'

const ListListItem = ({ list, clicked }) => {

    const todosCount = list.todos ? list.todos.length : 0
    const doneCount = list.todos ? list.todos.reduce((sum, cur) => sum + (cur.done ? 1 : 0), 0) : 0

    return (
        <ItemContainer
            color={list.color}
            onPress={() => clicked(list)}
        >
            <View style={styles.innerContainer}>
                    <Text style={styles.listName}>{list.name}</Text>
                    <TodoStatus doneCount={doneCount} totalCount={todosCount} />
            </View>
        </ItemContainer>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        padding: 20
    },
    listName: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 5
    }
})

export default ListListItem
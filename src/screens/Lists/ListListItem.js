import React from 'react'
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'
import TodoStatus from '../../components/TodoStatus'

const ListListItem = ({ list, clicked }) => {

    const todosCount = list.todos ? list.todos.length : 0
    const doneCount = list.todos ? list.todos.reduce((sum, cur) => sum + (cur.done ? 1 : 0), 0) : 0

    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={() => clicked(list)}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.listName}>{list.name}</Text>
                    <TodoStatus doneCount={doneCount} totalCount={todosCount} />
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 20,
        overflow: 'hidden'
    },
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
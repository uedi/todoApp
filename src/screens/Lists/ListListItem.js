import React from 'react'
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'

const ListListItem = ({ list, clicked }) => {

    const todosCount = list.todos ? list.todos.length : 0
    const doneCount = list.todos ? list.todos.reduce((sum, cur) => sum + (cur.done ? 1 : 0), 0) : 0
    const progress = todosCount > 0 ? doneCount / todosCount * 100 : 0

    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={() => clicked(list)}
            >
                <View style={styles.innerContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.listName}>{list.name}</Text>
                        <Text>Total todos: {todosCount}</Text>
                        <Text>Ready todos: {doneCount}</Text>
                    </View>
                    <View style={styles.progressContainer}>
                        <Text style={styles.progress}>{Math.round(progress)} %</Text>
                    </View>
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
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoContainer: {
    },
    progressContainer: {
        justifyContent: 'center'
    },
    listName: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700'
    },
    progress : {
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default ListListItem
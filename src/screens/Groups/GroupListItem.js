import { View, StyleSheet, Text } from 'react-native'
import TodoStatus from '../../components/TodoStatus'
import { Ionicons } from '@expo/vector-icons'
import ItemContainer from '../../components/ItemContainer'

const GroupListItem = ({ group, clicked }) => {

    const todosCount = group.todos ? group.todos.length : 0
    const doneCount = group.todos ? group.todos.reduce((sum, cur) => sum + (cur.done ? 1 : 0), 0) : 0

    return (
        <ItemContainer
            color={group.color}
            onPress={() => clicked(group)}
        >
            <View style={styles.innerContainer}>
                <View style={styles.row}>
                    <Text style={styles.groupName}>{group.name}</Text>
                    <View style={styles.groupMembersContainer}>
                        <Ionicons name='people' size={21} color='black' />
                        <Text style={styles.counter}>{group.users ? group.users.length : 0}</Text>
                    </View>
                </View>
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
    groupName: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    groupMembersContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    counter: {
        marginLeft: 2,
        fontSize: 17
    }
})

export default GroupListItem
import { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableNativeFeedback } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import GroupInfo from './GroupInfo'
import TodoList from '../../components/TodoList'
import AddButton from '../../components/AddButton'
import { updateGroupTodo, deleteGroupTodo, updateGroup } from '../../reducers/groupsReducer'
import todosService from '../../services/todos'
import { MaterialIcons } from '@expo/vector-icons'
import messagesService from '../../services/messages'
import groupsService from '../../services/groups'
import { setGroupMessages } from '../../reducers/messagesReducer'
import UpdateGroup from './UpdateGroup'

const Group = ({ route, navigation }) => {
    const [group, setGroup] = useState()
    const [showDelete, setShowDelete] = useState(false)
    const [updateOpen, setUpdateOpen] = useState(false)
    const groups = useSelector(state => state.groups)
    const messages = useSelector(state => state.messages)
    const id = route.params?.id
    const dispatch = useDispatch()
    const messageCount = group && messages[group.id] ? messages[group.id].length : null

    useEffect(() => {
        if(groups) {
            setGroup(groups.find(g => g.id.toString() === id))
        } else {
            setGroup(null)
        }
    }, [groups])

    useEffect(() => {
        if(group && !messages[group.id]) {
            messagesService.getGroupMessages(group.id)
            .then(response => {
                dispatch(setGroupMessages(group.id, response))
            })
            .catch(error => {
                console.log('error in get group messages', error)
            })
        }
    }, [group, dispatch])

    const handlePeopleIconPress = () => {
        navigation.navigate('GroupMembers', { name: group?.name, id: group?.id })
    }

    const handleChatIconPress = () => {
        navigation.navigate('Messages', { groupName: group?.name, groupId: group?.id })
    }

    const handleAddButton = () => {
        navigation.navigate('CreateTodo', { groupId: group?.id })
    }

    const handleUpdateTodo = (data) => {
        const dataToSend = { ...data, groupId: group?.id }
        todosService.updateTodo(dataToSend)
        .then(response => {
            dispatch(updateGroupTodo(group?.id, response))
        })
        .catch(error => {
            console.log('error in update todo', error)
        })
    }

    const handleDeleteTodo = (id) => {
        todosService.deleteTodo(id)
        .then(() => {})
        .catch(error => {
            console.log('error in delete todo', error)
        })
        .finally(() => {
            dispatch(deleteGroupTodo(group.id, id))
        })
    }

    const handleTodoClicked = (todo) => {
        navigation.navigate('Todo', {
            id: todo.id,
            name: todo.name,
            done: todo.done,
            start: todo.start,
            end: todo.end,
            originName: group.name
        })
    }

    const handleUpdateGroup = (data) => {
        setUpdateOpen(false)
        groupsService.update(group.id, data)
        .then(response => {
            dispatch(updateGroup(response))
            navigation.setOptions({ title: response.name })
        })
        .catch(error => {
            console.log('error in update group', error)
        })
    }

    if(!group) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.toolRow}>
                <TouchableNativeFeedback
                    onPress={() => setUpdateOpen(!updateOpen)}
                >
                    <View style={styles.button}>
                        <MaterialIcons name='edit' size={24} color='black' />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <GroupInfo
                group={group}
                handlePeopleIconPress={handlePeopleIconPress}
                handleChatIconPress={handleChatIconPress}
                messageCount={messageCount}
            />
            <View style={styles.topicRow}>
                <Text style={styles.topic}>Todos</Text>
                <TouchableNativeFeedback
                    onPress={() => setShowDelete(!showDelete)}
                >
                    <View style={styles.deleteButton}>
                        <MaterialIcons name='delete' size={22} color='gray' />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <TodoList
                todos={group.todos}
                updateTodo={handleUpdateTodo}
                todoClicked={handleTodoClicked}
                deleteTodo={handleDeleteTodo}
                showDelete={showDelete}
            />
            <UpdateGroup
                group={group}
                isOpen={updateOpen}
                close={() => setUpdateOpen(false)}
                update={handleUpdateGroup}
            />
            <AddButton onPress={handleAddButton} style={styles.addButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toolRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    topicRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    topic: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    addButton: {
        position: 'absolute',
        left: Dimensions.get('window').width / 2 - 30,
        bottom: 15
    },
    deleteButton: {
        padding: 1,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd'
    },
    button: {
        padding: 1,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd'
    }
})

export default Group
import { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import GroupInfo from './GroupInfo'
import TodoList from '../../components/TodoList'
import AddButton from '../../components/AddButton'
import { updateGroupTodo } from '../../reducers/groupsReducer'
import todosService from '../../services/todos'

const Group = ({ route, navigation }) => {
    const [group, setGroup] = useState()
    const groups = useSelector(state => state.groups)
    const id = route.params?.id
    const dispatch = useDispatch()

    useEffect(() => {
        if(groups) {
            setGroup(groups.find(g => g.id.toString() === id))
        } else {
            setGroup(null)
        }
    }, [groups])

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

    if(!group) {
        return null
    }

    return (
        <View style={styles.container}>
            <GroupInfo
                group={group}
                handlePeopleIconPress={handlePeopleIconPress}
                handleChatIconPress={handleChatIconPress}
            />
            <Text style={styles.topic}>Todos</Text>
            <TodoList todos={group.todos} updateTodo={handleUpdateTodo}/>
            <AddButton onPress={handleAddButton} style={styles.addButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },    
    topic: {
        marginTop: 10,
        marginLeft: 30,
        fontSize: 17,
        fontWeight: 'bold'
    },
    addButton: {
        position: 'absolute',
        left: Dimensions.get('window').width / 2 - 30,
        bottom: 15
    }
})

export default Group
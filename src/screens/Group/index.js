import { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import GroupInfo from './GroupInfo'
import TodoList from '../../components/TodoList'
import AddButton from '../../components/AddButton'

const Group = ({ route, navigation }) => {
    const [group, setGroup] = useState()
    const groups = useSelector(state => state.groups)
    const id = route.params?.id

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
        console.log('add')
    }

    const handleUpdateTodo = (data) => {
        console.log('update', data)
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
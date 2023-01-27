import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import TodoList from '../../components/TodoList'
import AddButton from '../../components/AddButton'

const List = ({ route }) => {
    const lists = useSelector(state => state.lists)
    const id = route.params?.id
    const list = lists && lists.find(l => l.id.toString() === id)
    const todos = list?.todos

    const handleAddButton = () => {
        console.log('create todo')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.topic}>Todos</Text>
            <TodoList todos={todos} />
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
        width: 60,
        height: 60,
        borderRadius: 30,
        bottom: 15
    }
})

export default List
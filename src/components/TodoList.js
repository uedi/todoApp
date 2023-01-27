import { View, FlatList } from 'react-native' 
import TodoListItem from './TodoListItem'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const TodoList = ({ todos }) => {
    if(!todos) {
        return null
    }

    const renderItem = ({ item, index }) => (
        <TodoListItem todo={item} />
    )

    return (
        <FlatList
            data={todos}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={{ paddingVertical: 15 }}
        />
    )
}



export default TodoList
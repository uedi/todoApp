import { View, FlatList } from 'react-native' 
import TodoListItem from './TodoListItem'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const TodoList = ({ todos, updateTodo, deleteTodo, showDelete, todoClicked, color }) => {
    if(!todos) {
        return null
    }

    const handleUpdate = (data) => {
        updateTodo(data)
    }

    const renderItem = ({ item, index }) => (
        <TodoListItem
            todo={item}
            updateTodo={handleUpdate}
            deleteTodo={deleteTodo}
            showDelete={showDelete}
            todoClicked={todoClicked}
            color={color}
        />
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
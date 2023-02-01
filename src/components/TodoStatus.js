import { View, Text, StyleSheet} from 'react-native'

const TodoStatus = ({ doneCount, totalCount }) => {
    const doneToShow = doneCount || 0
    const totalToShow = totalCount || 0
    const progress = totalToShow > 0 ? doneToShow / totalToShow * 100 : 0

    return (
        <View style={styles.container}>
            <Text style={styles.count}>Done todos: {doneToShow}/{totalToShow}</Text>
            <Text style={styles.progress}>{Math.round(progress)} %</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    count: {
        fontSize: 15
    },
    progress: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default TodoStatus
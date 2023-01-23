import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import ListList from '../Lists/ListList'
import { useSelector } from 'react-redux'

const Lists = () => {

    const lists = useSelector(state => state.lists)

    const listClicked = list => {
        console.log('clicked', list.name)
    }

    return (
        <View style={styles.container}>
            <Header text='Groups' />
            <ListList lists={lists} listClicked={listClicked} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Lists
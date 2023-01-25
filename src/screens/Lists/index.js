import { View, StyleSheet, Dimensions } from 'react-native'
import Header from '../../components/Header'
import ListList from '../Lists/ListList'
import { useSelector } from 'react-redux'
import AddButton from '../../components/AddButton'

const Lists = ({ navigation }) => {

    const lists = useSelector(state => state.lists)

    const listClicked = list => {
        navigation.navigate('List', { name: list?.name })
    }

    const handleAddButton = () => {
        navigation.navigate('CreateList')
    }

    return (
        <View style={styles.container}>
            <Header text='Lists' />
            <ListList lists={lists} listClicked={listClicked} />
            <AddButton onPress={handleAddButton} style={styles.addButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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

export default Lists
import { View, StyleSheet, Dimensions } from 'react-native'
import Header from '../../components/Header'
import GroupList from './GroupList'
import { useSelector } from 'react-redux'
import AddButton from '../../components/AddButton'

const Groups = ({ navigation }) => {

    const groups = useSelector(state => state.groups)

    const groupClicked = group => {
        navigation.navigate('Group', { name: group?.name })
    }

    const handleAddButton = () => {
        navigation.navigate('CreateGroup')
    }

    return (
        <View style={styles.container}>
            <Header text='Groups' />
            <GroupList groups={groups} groupClicked={groupClicked} />
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

export default Groups
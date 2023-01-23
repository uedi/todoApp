import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import GroupList from './GroupList'
import { useSelector } from 'react-redux'

const Groups = () => {

    const groups = useSelector(state => state.groups)

    const groupClicked = group => {
        console.log('clicked', group.name)
    }

    return (
        <View style={styles.container}>
            <Header text='Groups' />
            <GroupList groups={groups} groupClicked={groupClicked} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Groups
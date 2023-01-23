import { View, StyleSheet } from 'react-native'
import GroupList from './GroupList'

const Groups = () => {

    const groups = [{ id: 1, name: 'Group 1'}, { id: 2, name: 'Group 2'}, { id: 3, name: 'Group 3'}]

    const groupClicked = group => {
        console.log('clicked', group.name)
    }

    return (
        <View style={styles.container}>
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
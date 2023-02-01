import { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import MemberList from './MemberList'
import { useSelector } from 'react-redux'
import AddMember from './AddMember'
import AddButton from '../../components/AddButton'

const GroupMembers = ({ route }) => {
    const [members, setMembers] = useState()
    const [addVisible, setAddVisible] = useState(false)
    const groups = useSelector(state => state.groups)
    const contacts = useSelector(state => state.contacts)
    const id = route.params?.id

    useEffect(() => {
        if(members) {
            const g = groups.find(g => g.id.toString() === id)
            setMembers(g?.users ? g.users : [])
        } else {
            setMembers(null)
        }
    }, [members])

    const memberClicked = member => {
        console.log('clicked', member.name)
    }

    return (
        <View style={styles.container}>
            <AddMember visible={addVisible} contacts={contacts} close={() => setAddVisible(false)} />
            <MemberList members={members} memberClicked={memberClicked} />
            <AddButton onPress={() => setAddVisible(true)} style={styles.addButton} />
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
        bottom: 15
    }
})

export default GroupMembers
import { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import MemberList from './MemberList'
import { useSelector, useDispatch } from 'react-redux'
import AddMember from './AddMember'
import AddButton from '../../components/AddButton'
import groupsService from '../../services/groups'
import { setMembers } from '../../reducers/groupsReducer'

const GroupMembers = ({ route }) => {
    const [group, setGroup] = useState()
    const [addVisible, setAddVisible] = useState(false)
    const groups = useSelector(state => state.groups)
    const contacts = useSelector(state => state.contacts)
    const id = route.params?.id
    const dispatch = useDispatch()
    const memberIds = group?.users ? group.users.map(u => u.id) : []

    useEffect(() => {
        if(groups) {
            const g = groups.find(g => g.id.toString() === id)
            setGroup(g)
        } else {
            setGroup(null)
        }
    }, [groups])

    const memberClicked = member => {
        console.log('clicked', member.name)
    }

    const handleAddClicked = contact => {
        setAddVisible(false)
        groupsService.addMember(group.id, { contactId: contact.contactId })
        .then(response => {
            dispatch(setMembers(group.id, response))
        })
        .catch(error => {
            console.log('error in add group member', error)
        })
    }

    return (
        <View style={styles.container}>
            <AddMember visible={addVisible}
                contacts={contacts}
                close={() => setAddVisible(false)}
                addClicked={handleAddClicked}
                memberIds={memberIds}
            />
            <MemberList members={group?.users} memberClicked={memberClicked} />
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
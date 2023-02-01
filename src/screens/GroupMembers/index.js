import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MemberList from './MemberList'
import { useSelector } from 'react-redux'

const GroupMembers = ({ route }) => {
    const [members, setMembers] = useState()
    const groups = useSelector(state => state.groups)
    const id = route.params?.id

    useEffect(() => {
        if(members) {
            const g = groups.find(g => g.id.toString() === id)
            setMembers(g?.users ? g.users : [])
        }
    })

    const memberClicked = member => {
        console.log('clicked', member.name)
    }

    return (
        <View style={styles.container}>
            <MemberList members={members} memberClicked={memberClicked} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default GroupMembers
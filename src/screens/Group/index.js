import { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

const Group = ({ route, navigation }) => {
    const [group, setGroup] = useState()
    const groups = useSelector(state => state.groups)
    const id = route.params?.id

    useEffect(() => {
        if(groups) {
            setGroup(groups.find(g => g.id.toString() === id))
        } else {
            setGroup(null)
        }
    }, [groups])

    const handlePeopleIconPress = () => {
        navigation.navigate('GroupMembers', { name: group?.name, id: group?.id })
    }

    const handleChatIconPress = () => {
        navigation.navigate('Messages', { groupName: group?.name, groupId: group?.id })
    }

    if(!group) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableNativeFeedback
                    onPress={handleChatIconPress}
                >
                    <View style={styles.contactsButton}>
                        <Ionicons name='chatbox-ellipses' size={23} color='black' />
                        <Text style={styles.counter}>{group.messages ? group.messages.length : 0}</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={handlePeopleIconPress}
                >
                    <View style={styles.contactsButton}>
                        <Ionicons name='people' size={24} color='black' />
                        <Text style={styles.counter}>{group.users ? group.users.length : 0}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    contactsButton: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
    },
    counter: {
        marginLeft: 3,
        fontSize: 15
    }
})

export default Group
import { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import RequestsIndicator from './RequestsIndicator'
import { listWithUrgentTodos, groupWithUrgentTodos } from '../../utils/todos'
import GroupList from '../Groups/GroupList'
import ListList from '../Lists/ListList'
import { ScrollView } from 'react-native-virtualized-view'

const Home = ({ navigation }) => {
    const requests = useSelector(state => state.requests)
    const lists = useSelector(state => state.lists)
    const groups = useSelector(state => state.groups)
    const [urgentLists, setUrgentLists] = useState([])
    const [urgentGroups, setUrgentGroups] = useState([])
    const membershipRequests = requests?.memberships?.length || 0

    useEffect(() => {
        if(lists) {
            const urgents = []
            for (let list of lists) {
                if(listWithUrgentTodos(list)) {
                    urgents.push(list)
                }
            }
            setUrgentLists(urgents)
        }
    }, [lists])

    useEffect(() => {
        if(groups) {
            const urgents = []
            for (let group of groups) {
                if(groupWithUrgentTodos(group)) {
                    urgents.push(group)
                }
            }
            setUrgentGroups(urgents)
        }
    }, [groups])

    const listClicked = list => {
        navigation.navigate('List', { name: list?.name, id: list?.id })
    }

    const groupClicked = group => {
        navigation.navigate('Group', { name: group?.name, id: group?.id })
    }

    return (
        <View style={styles.container}>
            <Header text='Home' />
            <ScrollView style={styles.innerContainer}>
                { membershipRequests > 0 &&
                <>
                    <Text style={styles.label}>Requests</Text>
                    <RequestsIndicator
                        count={membershipRequests}
                        onPress={() => navigation.navigate('Requests')}
                    />
                </>
                }
                <Text style={styles.label}>
                    { urgentLists.length === 0 ?
                        'No lists with deadlines soon'
                        : 'Following lists have deadlines soon'
                    }
                </Text>
                { urgentLists.length > 0 &&
                <ListList lists={urgentLists} listClicked={listClicked} />
                }
                <Text style={styles.label}>
                    { urgentGroups.length === 0 ?
                        'No groups with deadlines soon'
                        : 'Following groups have deadlines soon'
                    }
                </Text>
                { urgentGroups.length > 0 &&
                <GroupList groups={urgentGroups} groupClicked={groupClicked} />
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {

    },
    requestContainer: {
        alignItems: 'flex-start',
        padding: 15
    },
    label: {
        fontWeight: '500',
        fontSize: 17,
        margin: 15
    }
})

export default Home
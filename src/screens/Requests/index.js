import { View, StyleSheet, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import RequestList from './RequestList'
import requestsService from '../../services/requests'
import { setMembershipRequests } from '../../reducers/requestsReducer'
import { addGroup } from '../../reducers/groupsReducer'
import { showSuccess } from '../../reducers/notificationReducer'

const Requests = () => {
    const requests = useSelector(state => state.requests)
    const membershipRequests = requests?.memberships?.length || 0
    const requestsCount = membershipRequests
    const dispatch = useDispatch()

    if(!requests) {
        return null
    }

    const handleMembershipRequest = (data) => {
        requestsService.replyMembership(data)
        .then(response => {
            dispatch(setMembershipRequests(response.memberships))
            if(response.group) {
                dispatch(addGroup(response.group))
                dispatch(showSuccess('Joined group'))
            }
        })
    }

    if(requestsCount === 0) {
        return (
            <View style={styles.container}>
                <Text>No requests</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <RequestList
                requests={requests}
                handleMembershipRequest={handleMembershipRequest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    }
})

export default Requests
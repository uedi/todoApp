import { View, Text } from 'react-native'
import MembershipRequestList from './MembershipRequestList'

const RequestList = ({ requests, handleMembershipRequest }) => {
    const membershipRequests = requests?.memberships || []

    const handleMembership = (groupId, reject) => {
        const response = {
            groupId: groupId,
            reject: reject
        }
        handleMembershipRequest(response)
    }

    return (
        <View>
            <Text>Membership requests</Text>
            <MembershipRequestList
                requests={membershipRequests}
                handleMembership={handleMembership}
            />
        </View>
    )
}


export default RequestList
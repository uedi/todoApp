import { View, StyleSheet, Text, Pressable } from 'react-native'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'

const ShowMemberShipRequests = ({ count, onPress }) => (
    <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            styles.button,
            {
                backgroundColor: pressed ? '#eee' : '#fff'
            }
        ]}
    >
        <Text>New membership requests ({ count })</Text>
    </Pressable>
)

const Home = ({ navigation }) => {
    const requests = useSelector(state => state.requests)
    const membershipRequests = requests?.memberships?.length || 0

    return (
        <View style={styles.container}>
            <Header text='Home' />
            { membershipRequests > 0 &&
            <View style={styles.requestContainer}>
                <Text>Requests</Text>
                <ShowMemberShipRequests
                    count={membershipRequests}
                    onPress={() => navigation.navigate('Requests')}
                />
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    requestContainer: {
        alignItems: 'flex-start'
    },
    button: {
        marginTop: 10,
        elevation: 1,
        padding: 10,
        borderRadius: 5
    }
})

export default Home
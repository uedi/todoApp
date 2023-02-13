import { View, Text, FlatList, StyleSheet, Button } from 'react-native'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const MembershipRequestList = ({ requests, handleMembership}) => {

    const renderItem = ({ item, index }) => (
        <View style={styles.container}>
            <Text style={styles.name}>{item.group?.name}</Text>
            <View style={styles.buttons}>
                <Button
                    title='Reject'
                    color={'red'}
                    onPress={() => handleMembership(item.groupId, true)}
                />
                <View style={{ width: 30 }} />
                <Button
                    title='Accept'
                    onPress={() => handleMembership(item.groupId, false)}
                />
            </View>
        </View>
    )

    return (
        <FlatList
            data={requests}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.groupId}
            contentContainerStyle={{ paddingVertical: 15 }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    buttons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    name: {
        fontWeight: '500',
        fontSize: 17
    }
})

export default MembershipRequestList
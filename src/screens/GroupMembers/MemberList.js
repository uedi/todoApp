import { View, Text, StyleSheet, FlatList, TouchableNativeFeedback } from 'react-native'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const MemberListItem = ({ member, clicked, myId }) => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={() => clicked(member)}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.name}>
                        {member.name}{myId === member.id ? ' (me)' : ''}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const MemberList = ({ members, memberClicked, myId }) => {
    if(!members) {
        return null
    }

    const renderItem = ({ item, index }) => (
        <MemberListItem member={item} clicked={memberClicked} myId={myId} />
    )

    return (
        <FlatList
            data={members}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={{ paddingVertical: 15 }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 20,
        overflow: 'hidden'
    },
    innerContainer: {
        flex: 1,
        padding: 20
    },
    name: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700'
    }
})

export default MemberList
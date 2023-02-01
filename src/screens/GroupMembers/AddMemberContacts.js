import { FlatList, View, StyleSheet,
    TouchableNativeFeedback, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const ListItem = ({ contact, addClicked }) => {
    const handleAddClick = () => {
        addClicked(contact)
    }

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{contact.name}</Text>
            <TouchableNativeFeedback
                onPress={handleAddClick}
            >
                <View style={styles.addButton}>
                    <MaterialIcons name='add' size={24} color='black' />
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const AddMemberContacts = ({ contacts, addClicked }) => {
    if(!contacts) {
        return null
    }

    const renderItem = ({ item, index }) => (
        <ListItem contact={item} addClicked={addClicked} />
    )

    return (
        <FlatList
            data={contacts}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.contactId}
            contentContainerStyle={{ paddingVertical: 15 }}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 1,
        overflow: 'hidden'
    },
    name: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700'
    },
    addButton: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
    }
})

export default AddMemberContacts

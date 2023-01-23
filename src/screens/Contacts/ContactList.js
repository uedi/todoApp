import { FlatList, View } from 'react-native'
import ContactListItem from './ContactListItem'

const ItemSeparator = () => (
    <View style={{ height: 20 }} />
)

const ContactList = ({ contacts, contactClicked }) => {
    if(!contacts) {
        return null
    }

    const renderItem = ({ item, index }) => (
        <ContactListItem contact={item} clicked={contactClicked} />
    )

    return (
        <FlatList
            data={contacts}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={{ paddingVertical: 15 }}
        />
    )
}

export default ContactList

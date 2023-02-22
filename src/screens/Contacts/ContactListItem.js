import { View, StyleSheet, Text } from 'react-native'
import ItemContainer from '../../components/ItemContainer'

const ContactListItem = ({ contact, clicked }) => {

    return (
        <ItemContainer
            color={contact.color}
            onPress={() => clicked(contact)}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.name}>{contact.name}</Text>
            </View>
        </ItemContainer>
    )
}

const styles = StyleSheet.create({
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

export default ContactListItem
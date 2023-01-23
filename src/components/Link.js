import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Link = ({ text, onPress }) => {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {text}
                </Text>
                <MaterialIcons name='navigate-next' size={32} color={'black'} />
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginVertical: 10
    },
    text: {
        fontWeight: '500',
        fontSize: 18
    }
})

export default Link
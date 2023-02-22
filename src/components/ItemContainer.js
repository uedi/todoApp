import { View, TouchableNativeFeedback, StyleSheet } from 'react-native'

const ItemContainer = ({ children, color, onPress }) => {
    const backgroundColor = color ? { backgroundColor: color } : {} 

    return (
        <View style={[styles.container, backgroundColor]}>
            <TouchableNativeFeedback
                onPress={onPress}
            >
                { children }
            </TouchableNativeFeedback>
        </View>
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
})

export default ItemContainer
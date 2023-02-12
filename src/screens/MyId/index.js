import { View, StyleSheet, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import QRCode from 'react-native-qrcode-svg'

const MyId = () => {
    const user = useSelector(state => state.user)
    const id = user?.user.id
    const size = Dimensions.get('window').width / 2.5

    return (
        <View style={styles.container}>
            { id &&
                <QRCode
                    value={id}
                    size={size}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MyId
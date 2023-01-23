import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View, StyleSheet } from 'react-native'

const TabsNav = createBottomTabNavigator()

const tempContent = msg => (
    <View style={styles.container}>
        <Text style={styles.tempText}>{msg}</Text>
    </View>
)

const Home = () => {
    return tempContent('Home')
}

const Groups = () => {
    return tempContent('Groups')
}

const Lists = () => {
    return tempContent('Lists')
}

const Utils = () => {
    return tempContent('Utils')
}

const More = () => {
    return tempContent('More')
}

const tabsScreenOptions = () => ({
    headerShown: false
})

const Tabs = () => {
    return (
        <TabsNav.Navigator
            screenOptions={tabsScreenOptions}
        >
            <TabsNav.Screen name='Home' component={Home} />
            <TabsNav.Screen name='Groups' component={Groups} />
            <TabsNav.Screen name='Lists' component={Lists} />
            <TabsNav.Screen name='Utils' component={Utils} />
            <TabsNav.Screen name='More' component={More} />
        </TabsNav.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tempText: {
        color: '#000',
        fontSize: 32,
        fontWeight: '700'
    }
})

export default Tabs
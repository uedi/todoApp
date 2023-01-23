import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Groups from '../screens/Groups'
import Lists from '../screens/Lists'
import Utils from '../screens/Utils'
import More from '../screens/More'

const TabsNav = createBottomTabNavigator()

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

export default Tabs
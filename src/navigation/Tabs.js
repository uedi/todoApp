import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Groups from '../screens/Groups'
import Lists from '../screens/Lists'
import Contacts from '../screens/Contacts'
import More from '../screens/More'
import { MaterialIcons } from '@expo/vector-icons'

const TabsNav = createBottomTabNavigator()

const tabsScreenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, size, color }) => {    
        if(route.name === 'Home') {
            return <MaterialIcons name='home' size={size} color={color} />
        } else if(route.name === 'Groups') {
            return <MaterialIcons name='groups' size={size} color={color} />
        } else if(route.name === 'Lists') {
            return <MaterialIcons name='list' size={size} color={color} />
        } else if(route.name === 'Contacts') {
            return <MaterialIcons name='contacts' size={size} color={color} />
        } else if(route.name === 'More') {
            return <MaterialIcons name='more-horiz' size={size} color={color} />
        }
    },
})

const Tabs = () => {
    return (
        <TabsNav.Navigator
            screenOptions={tabsScreenOptions}
        >
            <TabsNav.Screen name='Home' component={Home} />
            <TabsNav.Screen name='Groups' component={Groups} />
            <TabsNav.Screen name='Lists' component={Lists} />
            <TabsNav.Screen name='Contacts' component={Contacts} />
            <TabsNav.Screen name='More' component={More} />
        </TabsNav.Navigator>
    )
}

export default Tabs
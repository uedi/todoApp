import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'
import CreateGroup from '../screens/CreateGroup'
import CreateList from '../screens/CreateList'
import Contacts from '../screens/Contacts'
import About from '../screens/About'
import Settings from '../screens/Settings'

const StackNav = createStackNavigator()

const Stack = () => {
    return (
        <StackNav.Navigator
            initialRouteName='Tabs'
        >
            <StackNav.Screen name='Tabs' component={Tabs}
                options={{ headerShown: false }}
            />
            <StackNav.Screen name='CreateGroup' component={CreateGroup}
                options={{ title: 'Create new group' }}
            />
            <StackNav.Screen name='CreateList' component={CreateList}
                options={{ title: 'Create new list' }}
            />
            <StackNav.Screen name='Contacts' component={Contacts} />
            <StackNav.Screen name='About' component={About} />
            <StackNav.Screen name='Settings' component={Settings} />
        </StackNav.Navigator>
    )
}

export default Stack
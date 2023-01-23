import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'
import CreateGroup from '../screens/CreateGroup'
import CreateList from '../screens/CreateList'

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
            <StackNav.Screen name='CreateList' component={CreateGroup}
                options={{ title: 'Create new list' }}
            />
        </StackNav.Navigator>
    )
}

export default Stack
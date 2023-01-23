import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'
import CreateGroup from '../screens/CreateGroup'

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
        </StackNav.Navigator>
    )
}

export default Stack
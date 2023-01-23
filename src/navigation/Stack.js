import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'

const StackNav = createStackNavigator()

const Stack = () => {
    return (
        <StackNav.Navigator
            initialRouteName='Tabs'
        >
            <StackNav.Screen name='Tabs' component={Tabs}
                options={{ headerShown: false }}
            />
        </StackNav.Navigator>
    )
}

export default Stack
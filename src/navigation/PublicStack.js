import { createStackNavigator } from '@react-navigation/stack'
import GetStarted from '../screens/public/GetStarted'
import SignUp from '../screens/public/SignUp'
import Login from '../screens/public/Login'
import CreatingAccount from '../screens/public/CreatingAccount'

const StackNav = createStackNavigator()

const PublicStack = () => {
    return (
        <StackNav.Navigator
            initialRouteName='GetStarted'
        >
            <StackNav.Screen name='GetStarted' component={GetStarted}
                options={{ headerShown: false }}
            />
            <StackNav.Screen name='SignUp' component={SignUp} />
            <StackNav.Screen name='Login' component={Login} />
            <StackNav.Screen name='CreatingAccount' component={CreatingAccount}
                options={{ headerShown: false }}
            />
        </StackNav.Navigator>
    )
}

export default PublicStack
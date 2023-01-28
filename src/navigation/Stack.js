import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'
import CreateGroup from '../screens/CreateGroup'
import CreateList from '../screens/CreateList'
import Contacts from '../screens/Contacts'
import About from '../screens/About'
import Settings from '../screens/Settings'
import Account from '../screens/Account'
import Group from '../screens/Group'
import List from '../screens/List'
import CreateTodo from '../screens/CreateTodo'
import Contact from '../screens/Contact'

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
            <StackNav.Screen name='Account' component={Account} />
            <StackNav.Screen name='Group' component={Group}
                options={({ route }) => ({ title: route.params?.name })}
            />
            <StackNav.Screen name='List' component={List}
                options={({ route }) => ({ title: route.params?.name })}
            />
            <StackNav.Screen name='CreateTodo' component={CreateTodo}
                options={{ title: 'Create new Todo' }}
            />
            <StackNav.Screen name='Contact' component={Contact}
                options={({ route }) => ({ title: route.params?.name })}
            />
        </StackNav.Navigator>
    )
}

export default Stack
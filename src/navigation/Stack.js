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
import AddContact from '../screens/AddContact'
import AddContactManual from '../screens/AddContactManual'
import AddContactScan from '../screens/AddContactScan'
import GroupMembers from '../screens/GroupMembers'
import Messages from '../screens/Messages'

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
            <StackNav.Screen name='AddContact' component={AddContact}
                options={{ title: 'Add contact' }}
            />
            <StackNav.Screen name='AddContactManual' component={AddContactManual}
                options={{ title: 'Enter username' }}
            />
            <StackNav.Screen name='AddContactScan' component={AddContactScan}
                options={{ title: 'Scan qr code' }}
            />
            <StackNav.Screen name='GroupMembers' component={GroupMembers}
                options={{ title: 'Group members' }}
            />
            <StackNav.Screen name='Messages' component={Messages}
                options={({ route }) => ({ title: `Messages (${route.params?.groupName})`})}
            />
        </StackNav.Navigator>
    )
}

export default Stack
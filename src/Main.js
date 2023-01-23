import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import Stack from './navigation/Stack'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import groupService from './services/groups'
import listService from './services/lists'
import { setGroups } from './reducers/groupsReducer'
import { setLists } from './reducers/listsReducer'

const Main = () => {
    const groups = useSelector(state => state.groups)
    const lists = useSelector(state => state.lists)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!groups) {
            groupService.getAll()
            .then(response => {
                dispatch(setGroups(response))
            })
            .catch(error => {
                console.log('error in get groups')
            })
        }
    }, [groups, dispatch])

    useEffect(() => {
        if(!lists) {
            listService.getAll()
            .then(response => {
                dispatch(setLists(response))
            })
            .catch(error => {
                console.log('error in get lists')
            })
        }
    }, [lists, dispatch])

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Stack />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    container: {
        flex: 1
    }
})

export default Main
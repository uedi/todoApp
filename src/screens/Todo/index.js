import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView, Button,
    Keyboard, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { MaterialIcons } from '@expo/vector-icons'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import todosService from '../../services/todos'
import { updateGroupTodo } from '../../reducers/groupsReducer'
import { updateTodo } from '../../reducers/listsReducer'

const Todo = ({ route, navigation }) => {
    const id = route.params.id
    const name = route.params.name
    const done = route.params.done
    const start = route.params.start ? new Date(route.params.start) : null
    const end = route.params.end ? new Date(route.params.end) : null
    const [newName, setNewName] = useState(name)
    const [newStart, setNewStart] = useState(start)
    const [newEnd, setNewEnd] = useState(end)
    const dispatch = useDispatch()
    const nowDate = new Date()
    const nameChanged = name !== newName
    const startChanged = start !== newStart
    const endChanged = end !== newEnd
    const changed = nameChanged || startChanged || endChanged

    const handleSetStartDate = (event, selectedDate) => {
        if(event.type === 'set') {
            setNewStart(selectedDate)
        }
    }

    const handleSetEndDate = (event, selectedDate) => {
        if(event.type === 'set') {
            setNewEnd(selectedDate)
        }
    }

    const startDatePicker = () => {
        DateTimePickerAndroid.open({
            value: newStart || nowDate,
            onChange: handleSetStartDate,
            mode: 'date',
            is24Hour: true
        })
    }

    const endDatePicker = () => {
        DateTimePickerAndroid.open({
            value: newEnd || nowDate,
            onChange: handleSetEndDate,
            mode: 'date',
            is24Hour: true,
        })
    }

    const handleUpdate = () => {
        todosService.updateTodo({
            id: id,
            done: done,
            name: newName,
            start: newStart,
            end: newEnd
        })
        .then(response => {
            if(response.groupId) {
                dispatch(updateGroupTodo(response.groupId, response))
                navigation.navigate('Group', { name: route.params.originName, id: response.groupId })
            } else if(response.listId) {
                dispatch(updateTodo(response.listId, response))
                navigation.navigate('List', { name: route.params.originName, id: response.listId })
            } else {
                console.log('todo has no group or list')
            }
        })
        .catch(error => {
            console.log('error in update todo', error)
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.innerContainer}>
                    <Text>Name</Text>
                    <TextInput
                        style={styles.textInput}
                        multiline={false}
                        value={newName}
                        onChangeText={setNewName}
                    />
                    <View style={styles.inputRow}>
                        <Text>Start (optional)</Text>
                        <Text>{ newStart ? format(newStart, 'dd.MM.yyyy') : ''} </Text>
                        <TouchableNativeFeedback onPress={startDatePicker}>
                            <View style={styles.dateButton}>
                                <MaterialIcons name='date-range' size={24} color='black' />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Due (optional))</Text>
                        <Text>{newEnd ? format(newEnd, 'dd.MM.yyyy') : ''}</Text>
                        <TouchableNativeFeedback onPress={endDatePicker}>
                            <View style={styles.dateButton}>
                                <MaterialIcons name='date-range' size={24} color='black' />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.button}>
                    <Button
                        title='Save changes'
                        disabled={!changed}
                        onPress={handleUpdate}
                    />
            </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 15
    },
    label: {
        marginTop: 10
    },
    textInput: {
        alignSelf: 'stretch',
        marginVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        elevation: 0
    },
    inputRow: {
        marginVertical: 15,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dateButton: {
        backgroundColor: '#fff',
        elevation: 8,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden'
    },
    button: {
        alignSelf: 'center',
        width: 200,
        marginVertical: 15,
        marginBottom: 50
    }
})

export default Todo
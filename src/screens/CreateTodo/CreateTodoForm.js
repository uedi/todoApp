import { useState } from "react"
import { View, StyleSheet, TextInput, Button, Text, TouchableNativeFeedback } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'

const CreateTodoFrom = ({ create }) => {
    const [name, setName] = useState('')
    const [start, setStart] = useState()
    const [end, setEnd] = useState()

    const valid = name !== ''
    const nowDate = new Date()

    const handleCreate = () => {
        if(valid) {
            create({
                name: name,
                start: start,
                end: end
            })
        }
    }

    const handleSetStartDate = (event, selectedDate) => {
        if(event.type === 'set') {
            setStart(selectedDate)
        }
    }

    const handleSetEndDate = (event, selectedDate) => {
        if(event.type === 'set') {
            setEnd(selectedDate)
        }
    }

    const startDatePicker = () => {
        DateTimePickerAndroid.open({
            value: start || nowDate,
            onChange: handleSetStartDate,
            mode: 'date',
            is24Hour: true
        })
    }

    const endDatePicker = () => {
        DateTimePickerAndroid.open({
            value: end || nowDate,
            onChange: handleSetEndDate,
            mode: 'date',
            is24Hour: true,
        })
    }

    return (
        <>
            <Text style={styles.text}>Name</Text>
            <TextInput
                multiline={false}
                style={styles.textInput}
                textAlign='center'
                value={name}
                onChangeText={setName}
            />
            <View style={styles.inputRow}>
                <Text>Start (optional)</Text>
                { start && <Text>{start.toLocaleString()}</Text> }
                <TouchableNativeFeedback onPress={startDatePicker}>
                    <View style={styles.dateButton}>
                        <MaterialIcons name='date-range' size={24} color='black' />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.inputRow}>
                <Text>Due (optional))</Text>
                { end && <Text>{end.toLocaleString()}</Text> }
                <TouchableNativeFeedback onPress={endDatePicker}>
                    <View style={styles.dateButton}>
                        <MaterialIcons name='date-range' size={24} color='black' />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.button}>
                <Button
                    title='Create'
                    disabled={!valid}
                    onPress={handleCreate}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 15,
        marginHorizontal: 15
    },
    textInput: {
        alignSelf: 'stretch',
        marginHorizontal: 15,
        marginVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        elevation: 0
    },
    button: {
        alignSelf: 'center',
        width: 200,
        marginVertical: 15,
        marginBottom: 50
    },
    inputRow: {
        marginHorizontal: 15,
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
    }
})

export default CreateTodoFrom
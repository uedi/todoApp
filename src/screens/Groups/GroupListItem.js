import React from 'react'
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'

const GroupListItem = ({ group, clicked }) => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={() => clicked(group)}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.groupName}>{group.name}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 20,
        overflow: 'hidden'
    },
    innerContainer: {
        flex: 1,
        padding: 20
    },
    groupName: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700'
    }
})

export default GroupListItem
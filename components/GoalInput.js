import React from 'react'
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

const GoalInput = ({placeholder, goalInputHandler}) => {
  return (
    <TextInput
        style={styles.textInputStyle}
        placeholder={placeholder}
        onChangeText={goalInputHandler}
    />
  )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        padding: 10,
        color: '#120438',
    },
})
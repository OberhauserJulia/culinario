import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface InputFieldProps {
  placeholder: string;
  inputValue?: string;
  onChangeText?: (text: string) => void;
}

export default function InputField({ placeholder, inputValue, onChangeText }: InputFieldProps) {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF80"
        value={inputValue}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },

  input: {
    height: 49,
    width: '100%',
    borderColor: '#66A182',
    backgroundColor: '#222222',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});
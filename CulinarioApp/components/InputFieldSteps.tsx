import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface InputFieldProps {
  numberOfSteps?: number;
  placeholder: string;
  inputValue?: string;
  onChangeText?: (text: string) => void;
}

export default function InputFieldSteps({ numberOfSteps, placeholder, inputValue, onChangeText }: InputFieldProps) {

  return (
    <View className="flex-1 flex-row gap-6">
      <View className="bg-primary w-[40px] h-[40px] p-[6px] text-center font-robotoMedium items-center justify-center rounded-[5px]">
        <Text className="text-[16px] font-robotoMedium leading-[25px] text-white text-center">1</Text>
      </View>

      <TextInput
        className="h-[49px] w-full bg-lightbackground border-[1px] rounded-[15px] px-[10px]"
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF80"
        value={inputValue}
        onChangeText={onChangeText}
      />
    </View>
  );
}
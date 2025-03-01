import React, { useState } from 'react';
import RNPickerSelect from "react-native-picker-select";
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface InputFieldProps {
    numberOfSteps?: number;
    placeholder?: string;
    inputValue?: string;
    onChangeText?: (text: string) => void;
}

export default function IngredientSelect({ numberOfSteps, placeholder, inputValue, onChangeText }: InputFieldProps) {

    return (
        <View style={styles.container}>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: "JavaScript", value: "JavaScript" },
                    { label: "TypeScript", value: "TypeScript" },
                    { label: "Python", value: "Python" },
                    { label: "Java", value: "Java" },
                    { label: "C++", value: "C++" },
                    { label: "C", value: "C" },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 24,
    },

    stepNumber: {
        backgroundColor: '#66A182',
        padding: 6,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'flex-start',
    },

    input: {
        height: 49,
        width: '100%',
        borderColor: '#66A182',
        backgroundColor: '#222222',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
    },

    textH1: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontSize: 24,
        fontWeight: 'bold',
    },

    textBody: {
        color: '#FFFFFF',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 'medium',
        lineHeight: 25,
    },
});
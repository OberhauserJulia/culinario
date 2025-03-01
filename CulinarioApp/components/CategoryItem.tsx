import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CategoryItem() {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/categorycons/vorspeise.png')} />
            <Text style={styles.text}>Vorspeise</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 6,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#66A182',
        gap: 12,
        alignSelf: 'flex-start',
    },

    text: {
        color: '#FFFFFF',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 'medium',
    },
});
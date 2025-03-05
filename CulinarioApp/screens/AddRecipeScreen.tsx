import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

// Imports Compponents
import SmallButton from '../components/SmallButton';
import BigButton from '../components/BigButton';
import InputFieldSteps from '../components/InputFieldSteps';
import IngredientSelect from '../components/IngredientSelect';

export default function CookingModeScreen() {
    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <StatusBar style="light" />

                <Text style={styles.textH1}> Rezept hinzufügen </Text>


                <View style={styles.inputContainer}>
                    <Text style={styles.textH2}> Rezeptname </Text>
                    <TextInput
                    placeholder='Rezeptname eingeben'
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    textColor="#FFFFFF"
                    style={{backgroundColor: '#222222', color: '#FFFFFF', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}
                    />

                    {/* Zutaten */}
                    <View style={styles.topBarInput}>
                        <Text style={styles.textH2}> Zutaten </Text>
                        <SmallButton plus={true} />
                    </View>

                    <IngredientSelect />

                    {/* Zubereitungsschritte */}
                    {/* <View style={styles.topBarInput}>
                      <Text style={styles.textH2}> Zubereitungsschritte </Text>
                      <SmallButton plus={true} />
                    </View>

                    <InputFieldSteps placeholder="Zubereitungsschritt beschreiben" /> */}
                </View>

            </ScrollView>



            {/* Fixed Big Button */}
            <View style={styles.fixedButtonContainer}>
                <BigButton forward={true} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },

    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: 24,
        backgroundColor: '#161616',
        padding: 24,
        paddingTop: 68,
    },

    topBar: {
        flexDirection: 'row',
        gap: 24,
        alignItems: 'center',
    },

    topBarInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    inputContainer: {
        flexDirection: 'column',
        gap: 24,
    },

    fixedButtonContainer: {
        position: 'absolute',
        bottom: 24,
        left: 0,
        right: 0,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 24,
        width: '100%',
    },

    textH1: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontSize: 24,
        fontWeight: 'bold',
    },

    textH2: {
        color: '#66A182',
        fontFamily: 'Montserrat',
        fontSize: 18,
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


import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Button, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ImagePlus } from 'lucide-react-native';
import { ingredients } from '../data/ingredients';

// Imports Compponents
import SmallButton from '../components/SmallButton';
import BigButton from '../components/BigButton';
import InputFieldSteps from '../components/InputFieldSteps';
import IngredientSelect from '../components/IngredientSelect';

export default function CookingModeScreen() {
    const [text, setText] = React.useState("");

    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            aspect: [16, 9],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const formattedIngredients = ingredients.map((i) => ({
        value: i.name,
        label: (
            <View className="flex-row gap-3 items-center h-full p-0">
                <View className="w-[33.5px] h-[33.5px] bg-darkbackground rounded-[5px] flex items-center justify-center">
                    <Image source={typeof i.image === 'string' ? { uri: i.image } : i.image} className="w-[27.5] h-[27.5]" />
                </View>
                <Text className="text-white font-robotoMedium leading-[25px]">{i.name}</Text>
            </View>
        ),
    }));

    return (

        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <StatusBar style="light" />

                <Text style={styles.textH1}> Rezept hinzufügen </Text>


                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        onPress={pickImage}
                        className="flex flex-col gap-3 h-[149px] w-full bg-lightbackground border border-primary border-dashed rounded-[15px] items-center justify-center">
                        {image ? (
                            <Image source={{ uri: image }} style={{ resizeMode: 'contain' }} className="w-full h-full" />
                        ) : (<>
                            <ImagePlus size={50} color="#66A182" />
                            <Text className="text-primary font-robotoMedium">Foto hinzufügen</Text>
                        </>)}
                    </TouchableOpacity>

                    <Text style={styles.textH2}> Rezeptname </Text>
                    <TextInput
                        placeholder='Rezeptname eingeben'
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        textColor="#FFFFFF"
                        style={{ backgroundColor: '#222222', color: '#FFFFFF', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}
                    />

                    {/* Zutaten */}
                    <View style={styles.topBarInput}>
                        <Text style={styles.textH2}> Zutaten </Text>
                        <SmallButton plus={true} />
                    </View>

                    <View className="flex flex-row items-center w-full">
                        <TextInput
                            placeholder='Menge'
                            underlineColor="transparent"
                            activeUnderlineColor="transparent"
                            textColor="#FFFFFF"
                            style={{ backgroundColor: '#222222', color: '#FFFFFF', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}/>
                        <View className ="bg-primary w-[1px] h-[28px]"/>
                        <IngredientSelect
                            data={formattedIngredients}
                            onChange={console.log}
                            placeholder="Select ingredient" />
                    </View>


                    {/* Zubereitungsschritte */}
                    <View style={styles.topBarInput}>
                      <Text style={styles.textH2}> Zubereitungsschritte </Text>
                      <SmallButton plus={true} />
                    </View>

                    <InputFieldSteps placeholder="Zubereitungsschritt beschreiben" />
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


import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native'

interface ConteudoStep2 {
    data: String
    onStepDataChange: () => void

}

export default function ConteudoStep2({data, onStepDataChange}: ConteudoStep2) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.textoPrincipal}> Fale mais sobre você </Text>
                <Text style={styles.textoSecundario}> Adicione de forma resumida uma
                    decrição sobre você. </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onStepDataChange(text)}
                    multiline={true}
                    value={data}
                    placeholder="Digite seu texto aqui"
                />
            </View>
            </TouchableWithoutFeedback>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 60,
    },
    input: {
        width: 350,
        height: 100,
        borderColor: 'gray',
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 50,
        paddingTop: 0,
    },
    textoPrincipal: {
        color: '#202124',
        fontSize: 30,
        fontFamily: 'SignikaNegative_700Bold',
        textAlign: 'center',
    },
    textoSecundario: {
        color: '#525252',
        fontSize: 22,
        marginTop: 20,
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
    },
});

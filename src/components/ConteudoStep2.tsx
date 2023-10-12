import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

export default function ConteudoStep1() {
    const [texto, setTexto] = useState('Sou uma viajante apaixonada por explorar o mundo e descobrir novas culturas. Busco companhia que queiram novas experiências e memórias inesquecíveis.')
    return (
        <View style={styles.container}>
            <Text style={styles.textoPrincipal}> Fale mais sobre você </Text>
            <Text style={styles.textoSecundario}> Adicione de forma resumida uma
                decrição sobre você. </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setTexto(text)}
                multiline={true}
                value={texto}
                placeholder="Digite seu texto aqui"
            />
        </View>
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

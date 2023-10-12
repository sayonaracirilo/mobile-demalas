import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import retrato from '../../assets/retrato.png'

export default function ConteudoStep1() {
    return (
        <View style={styles.container}>
            <Image source={retrato} />
            <Text style={styles.textoEmail}> paulagomes@gmail.com </Text>
            <Text style={styles.textoPrincipal}> Seja Bem-vindo(a) ao DeMalas
                Paula Gomes! </Text>
            <Text style={styles.textoSecundario}> Suas respostas a seguir irão nos
                ajudar a conhecer mais sobre você e
                direcionar os melhores conteúdos para você. </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 60,
    },
    textoPrincipal: {
        color: '#202124',
        fontSize: 30,
        fontFamily: 'SignikaNegative_700Bold',
        textAlign: 'center',
        marginTop: 20,
    },
    textoSecundario: {
        color: '#525252',
        fontSize: 22,
        marginTop: 20,
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
    },
    textoEmail: {
        color: '#525252',
        fontSize: 18,
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        marginTop: 10,
    },
});

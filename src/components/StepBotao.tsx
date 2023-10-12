import React from 'react'
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'

interface StepBotao {
    onNext: () => void
    label: String
}


export default function StepBotao({ onNext, label }) {
    return (
        <View style={styles.botao}>
            <TouchableOpacity onPress={onNext}>
                <Text style={styles.textoBotao}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#F05D43',
        padding: 10,
        borderRadius: 10,
        height: 60,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginTop:80,
    },
    textoBotao: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Roboto_500Medium',
    },
});

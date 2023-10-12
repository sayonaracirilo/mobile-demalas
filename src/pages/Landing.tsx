import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import travel from '../../assets/travel.png'


export default function UserPage() {

    const navigation = useNavigation<NavigationProp<any>>()


    return (

        <View style={styles.container}>
            <Text style={styles.textoPrincipal}> Compartilhe, conecte-se e inspire-se com outros entusiastas de viagem. </Text>
            <Text style={styles.textoSecundario}> E aí? Bora conectar? </Text>
            <Image source={travel} style={styles.image} />
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}> Conectar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    botao: {
        backgroundColor: '#F05D43',
        padding: 10,
        borderRadius: 10,
        height: 60,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    textoPrincipal: {
        color: '#202124',
        fontSize: 30,
        fontFamily: 'SignikaNegative_700Bold',
        textAlign: 'center',
    },
    textoSecundario: {
        color: '#525252',
        fontSize: 28,
        marginTop: 10,
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
    },
    textoBotao: {
        color: 'white',
        fontSize: 30,
        textAlign:'center',
        fontFamily:'Roboto_700Bold',
    },
    image: {
        marginBottom: 40,
        marginTop: 40,
    },
    header: {
        marginBottom: 40,
        padding: 10,
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
})
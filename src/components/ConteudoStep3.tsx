import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { TextInputMask } from 'react-native-masked-text'

export default function ConteudoStep3() {
    const [selectedState, setSelectedState] = useState('')
    const [date, setDate] = useState('')


    const stateList = [
        { label: 'Acre (AC)', value: 'AC' },
        { label: 'Alagoas (AL)', value: 'AL' },
        { label: 'Amapá (AP)', value: 'AP' },
        { label: 'Amazonas (AM)', value: 'AM' },
        { label: 'Bahia (BA)', value: 'BA' },
        { label: 'Ceará (CE)', value: 'CE' },
        { label: 'Distrito Federal (DF)', value: 'DF' },
        { label: 'Espírito Santo (ES)', value: 'ES' },
        { label: 'Goiás (GO)', value: 'GO' },
        { label: 'Maranhão (MA)', value: 'MA' },
        { label: 'Mato Grosso (MT)', value: 'MT' },
        { label: 'Mato Grosso do Sul (MS)', value: 'MS' },
        { label: 'Minas Gerais (MG)', value: 'MG' },
        { label: 'Pará (PA)', value: 'PA' },
        { label: 'Paraíba (PB)', value: 'PB' },
        { label: 'Paraná (PR)', value: 'PR' },
        { label: 'Pernambuco (PE)', value: 'PE' },
        { label: 'Piauí (PI)', value: 'PI' },
        { label: 'Rio de Janeiro (RJ)', value: 'RJ' },
        { label: 'Rio Grande do Norte (RN)', value: 'RN' },
        { label: 'Rio Grande do Sul (RS)', value: 'RS' },
        { label: 'Rondônia (RO)', value: 'RO' },
        { label: 'Roraima (RR)', value: 'RR' },
        { label: 'Santa Catarina (SC)', value: 'SC' },
        { label: 'São Paulo (SP)', value: 'SP' },
        { label: 'Sergipe (SE)', value: 'SE' },
        { label: 'Tocantins (TO)', value: 'TO' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.textoPrincipal}> Adicione mais dados sobre você </Text>
            <View>
                <Text style={styles.label}>Estado</Text>
                <View>
                    <Picker
                        selectedValue={selectedState}
                        onValueChange={(itemValue) => setSelectedState(itemValue)}
                        style={styles.input}
                    >
                        {stateList.map((state) => (
                            <Picker.Item key={state.value} label={state.label} value={state.value} />
                        ))}

                    </Picker>

                    <Text style={styles.label}>Date de Nascimento</Text>
                    <TextInputMask
                        style={styles.inputDate}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY', // Aqui você define o formato da máscara desejada
                        }}
                        placeholder="DD/MM/AAAA"
                        value={date}
                        onChangeText={(itemValue) => setDate(itemValue)}
                    />


                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        alignItems: 'center',
    },
    label: {
        color: '#202124',
        fontSize: 18,
        marginTop: 20,
        fontFamily: 'Roboto_700Bold',
        marginBottom: 10,
        textAlign: 'left'
    },
    input: {
        width: 320,
        height: 50,
        borderColor: 'gray',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderWidth: 0,
    },
    inputDate: {
        width: 320,
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderWidth: 0,
        
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
});

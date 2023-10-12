import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import StepBotao from '../components/StepBotao'
import ConteudoStep1 from '../components/ConteudoStep1'
import ConteudoStep2 from '../components/ConteudoStep2'
import ConteudoStep3 from '../components/ConteudoStep3'
import ConteudoStep4 from '../components/ConteudoStep4'

export default function Onboarding() {
    const [step, setStep] = useState(1)

    const navigation = useNavigation<NavigationProp<any>>()

    function redirecionaLanding() {
        navigation.navigate('LandingPage')
    }

    const proximoStep = () => {
        if (step < 4) {
            setStep(step + 1)
        }
    };

    const stepAnterior = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    };

    const renderStep = (index) => {
        const isActive = index === step
        const isCompleted = index < step
        const icon = isCompleted ? 'check' : 'done'
        const stepColor = isActive ? '#BD4935' : isCompleted ? '#BD4935' : '#CECECE'
        const stepTextColor = isActive ? 'white' : isCompleted ? 'white' : '#A0A0A0'

        return (
            <View style={[styles.step, { backgroundColor: stepColor }]}>
                {isCompleted ? (
                    <MaterialIcons name={icon} size={24} color={stepTextColor} />
                ) : (
                    <Text style={{ ...styles.stepText, color: stepTextColor }}>{index}</Text>
                )}
            </View>
        );
    };

    const renderConteudoStep = () => {
        switch (step) {
            case 1:
                return (<ConteudoStep1 />)
            case 2:
                return (<ConteudoStep2 />)
            case 3:
                return (<ConteudoStep3 />)
            case 4:
                return (<ConteudoStep4 />)
            default:
                return null
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.stepsRow}>
                <TouchableOpacity onPress={() => (step > 1 ? stepAnterior() : redirecionaLanding())}>
                    <MaterialIcons name={"keyboard-arrow-left"} size={24} color={"000000"} style={{ marginRight: 15 }} />
                </TouchableOpacity>
                {renderStep(1)}
                <View style={styles.separator} />
                {renderStep(2)}
                <View style={styles.separator} />
                {renderStep(3)}
                <View style={styles.separator} />
                {renderStep(4)}
            </View>
            {renderConteudoStep()}
            <View>
                {step === 4 ? (
                    <StepBotao onNext={proximoStep} label="Finalizar" />
                ) : (
                    <StepBotao onNext={proximoStep} label="Avançar" />
                )}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 60,
    },
    stepsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        width: 30,
        height: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'gray',
    },
    botao: {
        backgroundColor: '#F05D43',
        padding: 10,
        borderRadius: 10,
        height: 60,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    step: {
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepText: {
        fontSize: 18,
    },
});

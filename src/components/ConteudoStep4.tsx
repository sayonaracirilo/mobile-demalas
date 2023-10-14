import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface ConteudoStep4 {
    onPress: () => void
    label: String
    selected: Boolean
}

export default function ConteudoStep4() {
    const [tags, setTags] = useState([
        { label: 'Praias', selected: false },
        { label: 'Montanhas', selected: false },
        { label: 'Cidades', selected: false },
        { label: 'Aventura', selected: false },
        { label: 'Gastronomia', selected: false },
        { label: 'Cruzeiros', selected: false },
        { label: 'Cultura', selected: false },
        { label: 'Esportes', selected: false },
        { label: 'Vida noturna', selected: false },
        { label: 'Ecoturismo', selected: false },
        { label: 'Romance', selected: false },
        { label: 'Férias', selected: false },
        { label: 'Exploração', selected: false },
        { label: 'Relaxamento', selected: false },
        { label: 'Fotografia', selected: false },
        { label: 'Arte', selected: false },
        { label: 'Luxo', selected: false },
        { label: 'História', selected: false },
    ]);

    function Tag({ label, selected, onPress }: ConteudoStep4) {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.tag,
                    { backgroundColor: selected ? '#BD4935' : '#CECECE' },
                ]}
            >
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        );
    }

    function toggleTag(index) {
        const newTags = [...tags];
        newTags[index].selected = !newTags[index].selected;
        setTags(newTags);
    }

    const rows = [];
    for (let i = 0; i < 6; i++) {
        const row = (
            <View style={styles.row} key={i}>
                {tags.slice(i * 3, i * 3 + 3).map((tag, index) => (
                    <Tag
                        key={index}
                        label={tag.label}
                        selected={tag.selected}
                        onPress={() => toggleTag(i * 3 + index)}
                    />
                ))}
            </View>
        );
        rows.push(row);
    }

    return (
        <View >
            <Text style={styles.textoPrincipal}> Selecione os intereresses{'\n'}que mais combinam {'\n'} com você </Text>
            <View style={{ flexDirection: 'column' }}>{rows}</View>
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
        marginTop: 60,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    tag: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 5,
        width: 110,
        marginTop: 10,
        height: 30,
        alignItems: 'center',
    },
    label: {
        color: 'white',
    },
});
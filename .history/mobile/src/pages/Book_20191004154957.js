import React,  { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Platform, Text, TextInput } from 'react-native';

export default function Book({ navigation }) {
    const [date, setDate] = useState('');
    const id = navigation.getParam('id');

    function handleSubmit() {}

    return (
        <SafeAreaView style={styles.AndroidArea}>
            <Text style={styles.label}> DATA DE INTERESSE * </Text>
            <TextInput
                style={styles.input}
                placeholder="Qual data quer reservar?"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.buttom}>
                <Text style={styles.buttomText}> Solicitar reserva </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={[styles.buttom, cancelButtom]}>
                <Text style={styles.buttomText}> Cancelar reserva </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AndroidArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#444",
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    buttom: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    cancelButtom: {
        backgroundColor: '#ccc',
    },
    buttomText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 19
    },
});
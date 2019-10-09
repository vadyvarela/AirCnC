import React,  { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, AsyncStorage, TouchableOpacity, Platform, Text, TextInput } from 'react-native';

import api from '../services/api';

export default function Book({ navigation }) {
    const [date, setDate] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: {user_id}
        });

        Alert.alert('Solicitação de reserva enviado');
        navigation.navigate('List');
    }

    async function handleCancel() {
        navigation.navigate('List');
    }

    return (
        <SafeAreaView style={[styles.container, styles.AndroidArea]}>
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
            <TouchableOpacity onPress={handleCancel} style={[styles.buttom, styles.cancelButtom]}>
                <Text style={styles.buttomText}> Cancelar reserva </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    AndroidArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    label: {
        marginTop:30,
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
        marginTop: 10,
        backgroundColor: '#ccc',
    },
    buttomText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 19
    },
});
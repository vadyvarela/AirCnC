import react from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Login() {
    return (
    <View style={styles.container}> 
        <Image source={logo}/>

        <View style={styles.form}> 
            <Text style={styles.label}> SEU E-MAIL * </Text>
            <TextInput
            style={styles.input}
            placeholder="Seu Em-mail"
            placeholderTextColor="#999"
            />
        </View> 
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        alignSelf: 'center',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    }
});
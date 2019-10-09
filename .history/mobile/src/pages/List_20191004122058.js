import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native';

import logo from '../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        });
    }, []);

    return (
        <View style={StyleSheet.container}>
            <Image source={logo} />
        </View>
    )
}
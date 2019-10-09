import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { ScrollView, Alert, SafeAreaView, Image, StyleSheet, AsyncStorage } from 'react-native';

import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.56.1', {
                query: { user_id }
            });

            socket.on('booking_response', booking => {
                Alert.alert('')
            })
        })
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        });
    }, []);

    return (
        <SafeAreaView style={StyleSheet.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {techs.map(tech =>  <SpotList key={tech} tech="ReactJS" />)}
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height:32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom:15,
    }
});
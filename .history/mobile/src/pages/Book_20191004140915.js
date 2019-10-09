import React from 'react';
import { SafeAreaView, StyleSheet, Platform, Text } from 'react-native';

export default function Book({ navigation }) {
    const id = navigation.getParam('id');

    return (
        <SafeAreaView style={styles.AndroidArea}>
            <Text > {id} </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AndroidArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});
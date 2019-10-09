import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function Book({ navigation }) {
    const id = navigation.getParam('id');

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <Text > {id} </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: npLBlue,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});
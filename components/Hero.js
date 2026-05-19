import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export default function Hero() {
    return (
        <ImageBackground
            source={require('../assets/hero-senai.webp')}
            style={styles.background}
        >
            <View style={styles.overlay}>
                <Text style={styles.phrase}>Transforme seu futuro com os cursos SENAI!</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height * 0.4, // ocupa 40% da tela
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 8,
    },
    phrase: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
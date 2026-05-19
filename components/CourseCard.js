import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function CourseCard({ course }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: course.image }} style={styles.image} />
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.subtitle}>{course.subtitle}</Text>
            <Text style={styles.info}>Duração: {course.duration}</Text>
            <Text style={styles.info}>Professor: {course.teacher}</Text>
            <Button mode="contained" style={styles.button}>Matrícula</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 250,
        marginRight: 15,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
    },
    info: {
        fontSize: 12,
        marginTop: 4,
    },
    button: {
        marginTop: 8,
        borderRadius: 20,
    },
});
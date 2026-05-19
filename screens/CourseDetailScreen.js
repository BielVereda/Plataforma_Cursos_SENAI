import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CourseDetailScreen({ route }) {
    const { course } = route.params || {};

    return (
        <View style={styles.container}>
            {course ? (
                <>
                    <Text style={styles.title}>{course.titulo}</Text>
                    <Text>{course.subtitulo}</Text>
                    <Text>Nível: {course.nivel}</Text>
                    <Text>Duração: {course.duracao}</Text>
                    <Text>Área: {course.area}</Text>
                    <Text>Professor: {course.professor}</Text>
                    <Text>Classificação: {course.classificacao}</Text>
                </>
            ) : (
                <Text>Nenhum curso selecionado</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
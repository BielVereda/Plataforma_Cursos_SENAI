import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';

const courses = [
    {
        id: '1',
        title: 'Administração Empresarial',
        subtitle: 'Gestão de negócios e liderança',
        duration: '40h',
        teacher: 'Prof. João Silva',
        image: 'https://via.placeholder.com/300x200.png?text=Administração',
    },
    {
        id: '2',
        title: 'Informática Básica',
        subtitle: 'Fundamentos de TI',
        duration: '30h',
        teacher: 'Prof. Maria Souza',
        image: 'https://via.placeholder.com/300x200.png?text=Informática',
    },
    {
        id: '3',
        title: 'Mecânica Industrial',
        subtitle: 'Processos e manutenção',
        duration: '60h',
        teacher: 'Prof. Carlos Lima',
        image: 'https://via.placeholder.com/300x200.png?text=Mecânica',
    },
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <Searchbar
                placeholder="Pesquisar cursos..."
                style={styles.searchbar}
            />
            <Hero />
            <FlatList
                data={courses}
                renderItem={({ item }) => <CourseCard course={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.carousel}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    searchbar: {
        margin: 10,
        borderRadius: 20,
        elevation: 3,
    },
    carousel: {
        padding: 10,
    },
});

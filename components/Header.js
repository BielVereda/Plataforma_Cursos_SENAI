import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, IconButton, Searchbar } from 'react-native-paper';

export default function Header({ navigation }) {
    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Action
                icon="school"
                color="#fff"
                onPress={() => navigation.navigate('Home')}
            />

            <Searchbar
                placeholder="Pesquisar cursos..."
                style={styles.searchbar}
                inputStyle={{ fontSize: 14 }}
                iconColor="#004080"
            />

            <View style={styles.icons}>
                <IconButton
                    icon="theme-light-dark"
                    color="#fff"
                    size={22}
                    onPress={() => console.log('Trocar tema')}
                />
                <IconButton
                    icon="account"
                    color="#fff"
                    size={22}
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#004080',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchbar: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 20,
        elevation: 3,
        height: 40,
    },
    icons: {
        flexDirection: 'row',
    },
});
import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('senaiCursos.db');

export const initDB = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS cursos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        subtitulo TEXT,
        nivel TEXT,
        duracao TEXT,
        area TEXT,
        professor TEXT,
        classificacao REAL
    );`
        );
    });
};

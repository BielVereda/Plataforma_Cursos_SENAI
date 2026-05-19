import { db } from '../db/database';

export const insertCourse = (course) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO cursos (titulo, subtitulo, nivel, duracao, area, professor, classificacao) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [course.titulo, course.subtitulo, course.nivel, course.duracao, course.area, course.professor, course.classificacao]
        );
    });
};

export const getCourses = (callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM cursos',
            [],
            (_, { rows }) => {
                callback(rows._array);
            }
        );
    });
};
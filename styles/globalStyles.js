import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
    },
    text: {
        color: colors.text,
        fontSize: 16,
    },
});
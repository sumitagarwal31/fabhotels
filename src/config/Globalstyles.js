import { StyleSheet } from 'react-native';
import { COLORS } from './variable';

export const GlobalStyles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    container: {
        marginHorizontal: 15,
        marginTop: 20,
    },
    flexDirectionRow: {
        flexDirection: 'row'
    },
})

import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/variable';

export const styles = StyleSheet.create({
    headerStyle: {
        alignItems: 'center',
    },
    welcomeBackStyle: {
        fontWeight: '700',
        fontSize: 22,
        color: COLORS.primaryBlue
    },
    enterAccountStyle: {
        fontWeight: '400',
        fontSize: 14,
        color: COLORS.primaryBlue,
    },
    iconViewStyle: {
        paddingHorizontal: 10,
        fontSize: 20,
        position: 'absolute',
        right: 2,
        alignSelf: 'center'
    },
    iconStyle: {
        height: 20,
        width: 20
    },
    submitButton: {
        paddingVertical: 10,
        backgroundColor: COLORS.primaryGreen,
        borderRadius: 12,
        height: 50,
        marginVertical: 30,
        justifyContent: 'center',
    },
    buttonTextStyle: {
        color: COLORS.white,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 16,
    },
    errorTextStyle: {
        color: COLORS.red,
        fontSize: 14,
        fontWeight: '500'
    }
})
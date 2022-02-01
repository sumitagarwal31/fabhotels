
import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/variable';

export const styles = StyleSheet.create({
    dataViewStyle: {
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 10,
        elevation: 3,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        borderColor: COLORS.primaryGray,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowColor: COLORS.black,
    },
    title: {
        fontSize: 14,
        fontWeight: '600'
    },
    completedImageStyle: {
        height: 20,
        width: 20
    }

})
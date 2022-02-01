import { Dimensions, Platform } from 'react-native';

export const COLORS = {
    primaryGreen: '#2ECFA5',
    primaryBlue: '#2E3E5C',
    primaryGray: '#B8C5E6',
    placeholderTextColor: '#AAB2BE',
    white: '#ffffff',
    black: '#000000',
    red:'#FF0000'
};

export const Screen = {
    W: Math.round(Dimensions.get('window').width),
    H: Math.round(Dimensions.get('window').height),
};

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
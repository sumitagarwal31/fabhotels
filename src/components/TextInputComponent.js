
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { COLORS } from "../config/variable";

const TextInputComponent = (props) => {
    const { placeholder, secureTextEntry, error } = props
    return (
        <TextInput
            {...props}
            style={[styles.inputBoxStyle, { borderColor: !error ? COLORS.black : COLORS.red, paddingRight: 45 }]}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={COLORS.placeholderTextColor}
            underlineColorAndroid="transparent"
            autoCapitalize='none'
        />
    )
}

const styles = StyleSheet.create({
    inputBoxStyle: {
        flex: 1,
        height: 50,
        marginVertical: 12,
        color: COLORS.black,
        fontWeight: '400',
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10
    },
})

export default TextInputComponent;
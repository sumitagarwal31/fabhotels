import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, Keyboard } from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';
import { GlobalStyles } from '../../config/Globalstyles';
import { styles } from './LoginStyles';
import axios from 'axios';
import { COLORS } from '../../config/variable';


const EMAIL = 'test@test.com'
const PASSWORD = 'test1234'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [loginError, setLoginError] = useState('')
    const [loading, setLoading] = useState(false)
    const [isVisiblePassword, setIsVisiblePassword] = useState(true)

    // Password View handler 
    const viewPassword = () => {
        setIsVisiblePassword(!isVisiblePassword);
    }

    // Login button handler
    const handleSubmit = () => {
        Keyboard.dismiss();
        if (email == EMAIL && password == PASSWORD) {
            setLoginError("")
            setEmailError(false)
            setPasswordError(false)
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(
                    res => {
                        setLoading(false)
                        navigation.navigate('Dashboard', { data: res.data })
                    },
                    err => {
                        setLoading(false)
                        alert(err)
                    }
                )
        } else {
            if (email == '' && password == '') {
                setEmailError(true)
                setPasswordError(true)
                setLoginError("")
            } else if (email == '') {
                setEmailError(true)
                setPasswordError(false)
                setLoginError("")
            } else if (password == '') {
                setEmailError(false)
                setPasswordError(true)
                setLoginError("")
            } else {
                setEmailError(false)
                setPasswordError(false)
                setLoginError("*Please enter correct credentials!")
            }
        }
    }

    return (
        <SafeAreaView style={GlobalStyles.safeAreaViewStyle}>
            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                <View style={GlobalStyles.container}>
                    <View style={styles.headerStyle}>
                        <Image source={require('../../assets/images/AppLogo.png')} style={styles.appLogoStyle} />
                        <View>
                            <Text style={styles.welcomeBackStyle}>Welcome Back</Text>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={styles.enterAccountStyle}>Please Enter your account here </Text>
                        </View>
                    </View>
                    <View style={GlobalStyles.flexDirectionRow}>
                        <TextInputComponent
                            placeholder="Email Id"
                            value={email}
                            onChangeText={text => { setEmail(text) }}
                            error={emailError}
                        />
                        <View style={styles.iconViewStyle}>
                            <Image
                                source={require('../../assets/images/email.png')}
                                style={styles.iconStyle}
                            />
                        </View>
                    </View>
                    <View style={GlobalStyles.flexDirectionRow}>
                        <TextInputComponent
                            placeholder="Password"
                            value={password}
                            onChangeText={text => { setPassword(text) }}
                            secureTextEntry={isVisiblePassword}
                            error={passwordError}
                        />
                        <TouchableOpacity style={styles.iconViewStyle} onPress={viewPassword}>
                            <Image
                                source={!isVisiblePassword ? require('../../assets/images/hidden.png') : require('../../assets/images/visibility.png')}
                                style={styles.iconStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    {loginError ? (
                        <Text style={styles.errorTextStyle}>{loginError}</Text>
                    ) : null}
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        {!loading ? (
                            <Text style={styles.buttonTextStyle}>Log In</Text>
                        ) : (
                            <ActivityIndicator size="small" color={COLORS.white} />
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default Login
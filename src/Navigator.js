import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/LoginScreen/Login';
import Dashboard from './screens/DashboardScreen/Dashboard';

const MainStack = createNativeStackNavigator();
const Navigator = () => {
    useEffect(() => {
        // Splash Screen handle
        let timeOutHandle = setTimeout(() => {
            SplashScreen.hide();
        }, 2000)
        return () => {
            clearTimeout(timeOutHandle);
        };
    })
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={() => ({
                gestureEnabled: false
            })}>
                <MainStack.Screen name="Login" component={Login} />
                <MainStack.Screen name="Dashboard" component={Dashboard} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
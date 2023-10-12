import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/components/Header'
import Landing from './src/pages/Landing'
import React, { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import {
    SignikaNegative_300Light,
    SignikaNegative_400Regular,
    SignikaNegative_500Medium,
    SignikaNegative_600SemiBold,
    SignikaNegative_700Bold,
} from '@expo-google-fonts/signika-negative'

import {
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  } from '@expo-google-fonts/roboto'

const AppStack = createNativeStackNavigator()

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                await Font.loadAsync({
                    SignikaNegative_300Light,
                    SignikaNegative_400Regular,
                    SignikaNegative_500Medium,
                    SignikaNegative_600SemiBold,
                    SignikaNegative_700Bold,
                    Roboto_100Thin,
                    Roboto_100Thin_Italic,
                    Roboto_300Light,
                    Roboto_300Light_Italic,
                    Roboto_400Regular,
                    Roboto_400Regular_Italic,
                    Roboto_500Medium,
                    Roboto_500Medium_Italic,
                    Roboto_700Bold,
                    Roboto_700Bold_Italic,
                    Roboto_900Black,
                    Roboto_900Black_Italic,
                });
            }
            catch {
                // handle error
            }
            finally {
                setAppIsReady(true);
            }
        })();
    }, [])

    const onLayout = useCallback(() => {
        if (appIsReady) {
            SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View onLayout={onLayout} style={styles.container}>
            <NavigationContainer>
                <AppStack.Navigator >
                    <AppStack.Screen name="LandingPage"
                        component={Landing}
                        options={{
                            headerTitle: '',
                            headerLeft: () => (
                                <Header />
                            ),
                        }} />
                </AppStack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
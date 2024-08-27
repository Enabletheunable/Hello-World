import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {Stack} from 'expo-router'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'RobotoMono-Bold': require('../assets/fonts/RobotoMono-Bold.ttf'),
    'RobotoMono-Light': require('../assets/fonts/RobotoMono-Light.ttf'),
    'RobotoMono-Medium': require('../assets/fonts/RobotoMono-Medium.ttf')
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#18958D'
        }
      }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='onboarding' />
    </Stack>

  )
}
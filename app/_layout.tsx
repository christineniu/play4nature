import { useEffect } from 'react';
import { View, Text } from 'react-native';
import PhoneFrame from '../components/PhoneFrame';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import {
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'Montserrat-Regular':  Montserrat_400Regular,
    'Montserrat-SemiBold': Montserrat_600SemiBold,
    'Montserrat-Bold':     Montserrat_700Bold,
    'Inter-Regular':       Inter_400Regular,
    'Inter-Medium':        Inter_500Medium,
    'Inter-SemiBold':      Inter_600SemiBold,
    'Poppins-Medium':      Poppins_500Medium,
    'Poppins-Bold':        Poppins_700Bold,
    'SpaceGrotesk-Bold':   SpaceGrotesk_700Bold,
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) {
    return (
      <View style={{ flex: 1, backgroundColor: '#E8F5E9', justifyContent: 'center', alignItems: 'center' }}>
        {/* Polecat placeholder — swap with <Image source={require('../assets/polecat.png')} /> */}
        <View style={{ width: 100, height: 100, backgroundColor: '#C8DFC9', borderRadius: 50, marginBottom: 16 }} />
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#005F73' }}>Play4Nature</Text>
      </View>
    );
  }

  return (
    <PhoneFrame>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="shop" />
      </Stack>
    </PhoneFrame>
  );
}

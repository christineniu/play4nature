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
        {/* Polecat + leaf illustration placeholder */}
        <View style={{ width: 120, height: 120, justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
          {/* Leaf shape behind */}
          <View style={{
            position: 'absolute', right: 0, bottom: 8,
            width: 70, height: 90, borderRadius: 50,
            backgroundColor: '#5A8C6E', opacity: 0.7,
            transform: [{ rotate: '-30deg' }],
          }} />
          {/* Polecat body */}
          <View style={{
            width: 56, height: 72, borderRadius: 28,
            backgroundColor: '#C8A97A', zIndex: 1,
          }} />
          {/* Polecat head */}
          <View style={{
            position: 'absolute', top: 4, alignSelf: 'center',
            width: 44, height: 44, borderRadius: 22,
            backgroundColor: '#8B6440', zIndex: 2,
          }} />
        </View>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#005F73', fontFamily: 'System' }}>Play4Nature</Text>
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

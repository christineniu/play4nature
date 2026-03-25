import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.deepEvergreen,
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 88 : 72,
          paddingBottom: Platform.OS === 'ios' ? 24 : Platform.OS === 'web' ? 10 : 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.xpGold,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.7)',
        tabBarLabelStyle: {
          fontFamily: 'Inter-Regular',
          fontSize: 11,
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <Feather name="heart" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Feather name="compass" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

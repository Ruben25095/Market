import { Tabs, Stack } from 'expo-router';
import { Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import '../global.css';

export default function RootLayout() {
  return Platform.select({
    android: <AndroidTabLayout />,
    web: <WebTabLayout />,
  });
}

function WebTabLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="departamentos" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}

function AndroidTabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="departamentos"
        options={{
          headerShown: false,
          title: 'Departamentos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          headerShown: false,
          title: 'Login',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'people-circle' : 'people-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

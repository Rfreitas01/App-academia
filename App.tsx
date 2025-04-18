import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Importação das telas principais (serão criadas em seguida)
import HomeScreen from './src/screens/HomeScreen';
import TrailsScreen from './src/screens/TrailsScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6C63FF',
            },
            headerTintColor: '#fff',
            tabBarActiveTintColor: '#6C63FF',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'FitQuest',
            }}
          />
          <Tab.Screen 
            name="Trilhas" 
            component={TrailsScreen}
            options={{
              title: 'Trilhas',
            }}
          />
          <Tab.Screen 
            name="Comunidade" 
            component={CommunityScreen}
            options={{
              title: 'Comunidade',
            }}
          />
          <Tab.Screen 
            name="Perfil" 
            component={ProfileScreen}
            options={{
              title: 'Perfil',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
} 
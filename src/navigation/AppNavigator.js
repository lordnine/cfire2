import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/welcomeScreen';
import HomeScreen from '../screens/homeScreen';
import CardScreen from '../screens/cardScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" component={WelcomeScreen} 
      />
      <Stack.Screen
        name="Home" component={HomeScreen}
      />
      <Stack.Screen
        name="Card" component={CardScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
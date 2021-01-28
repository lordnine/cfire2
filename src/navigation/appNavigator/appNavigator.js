import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text} from 'react-native';

import WelcomeScreen from '../../screens/welcomeScreen';
import HomeScreen from '../../screens/homeScreen';
import CardScreen from '../../screens/cardScreen';
import { NativeAppEventEmitter } from 'react-native';
import logo from '../../assets/images/logo.png';
import searchlogo from '../../assets/images/searchlogo.png';

const Stack = createStackNavigator();

function HeaderLogo() {
  return (
    <Image style={{height: '75%', marginBottom: '4%', tintColor: '#3f1f69'}} resizeMode='contain' source={logo}/>
  );
}


const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" component={WelcomeScreen} options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home" component={HomeScreen} options={{headerTitle: ( () => <HeaderLogo /> ), headerTintColor: 'gray', headerRight: ( () => <Text style={{marginRight: 14, fontSize: 16, color: 'gray'}}>filter</Text>)  }}
      />
      <Stack.Screen
        name="Card" component={CardScreen} options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
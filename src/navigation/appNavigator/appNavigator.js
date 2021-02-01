import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, Button, TouchableOpacity} from 'react-native';

import WelcomeScreen from '../../screens/welcomeScreen';
import HomeScreen from '../../screens/homeScreen';
import CardScreen from '../../screens/cardScreen';
import { NativeAppEventEmitter } from 'react-native';
import logo from '../../assets/images/logo.png';
import DrawerNavigator from './drawerNavigator/drawerNavigator.js';
import { DrawerActions } from '@react-navigation/native';
import burgerlogo from '../../assets/images/burgerlogo.png';
import appNavigatorStyles from './appNavigatorStyles.js';



const Stack = createStackNavigator();

function HomeHeader() {
  return (
    <Image style={appNavigatorStyles.homeHeader} resizeMode='contain' source={logo}/>
  );
}

function HomeLeft() {
  return(
    <Text style={appNavigatorStyles.homeLeft}>drawer</Text>
  );
}

function HomeRight() {
  return(
    <Text style={appNavigatorStyles.homeRight}>search</Text>
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
        name="Home" component={HomeScreen} 
        options={{headerTitle: ( () => <HomeHeader /> ), 
          headerTintColor: 'gray', 
          headerLeft: null, 
          headerRight: ( () => <HomeRight />), 
          headerLeft: ( () => <HomeLeft />)  }}
      />
      <Stack.Screen
        name="Card" component={CardScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Drawer" component={DrawerNavigator} 
        options={({navigation}) => 
        ({headerTitle: ( () => <HomeHeader /> ), 
          headerLeft: null, 
          headerRight: ( () => 
          <TouchableOpacity style={appNavigatorStyles.burgerContainer} 
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Image source={burgerlogo} style={appNavigatorStyles.burgerStyles} />
          </TouchableOpacity> 
          )} 
        )}  
      />
    </Stack.Navigator>

  </NavigationContainer>
);

export default AppNavigator;
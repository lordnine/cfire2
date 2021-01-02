import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';
import { createAppContainer } from 'react-navigation';



const HomeDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
},
{
    initialRouteName: 'Home',
});


export default HomeDrawerNavigator;
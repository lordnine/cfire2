import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import CategoryScreen from '../../../screens/categoryScreen';
import HomeScreen from '../../../screens/homeScreen';

import houselogo from '../../../assets/images/houselogo.png';
import searchlogo from '../../../assets/images/searchlogo.png';

import tabNavigatorStyles from './tabNavigatorStyles';
import StoresListScreen from '../../../screens/storesListScreen';

const Tab = createBottomTabNavigator();



const TabNavigator = () => {
return(
    <Tab.Navigator initialRouteName="Home" drawerPosition='right' 
      tabBarOptions={tabNavigatorStyles.tintStyle} 
    >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return (
                  <Image source={houselogo} style={[tabNavigatorStyles.tabLogo, {tintColor: color }]} resizeMode='contain'/>
              ); 
            },
          })}
        />

    <Tab.Screen name="Stores" component={StoresListScreen}
      options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Image source={houselogo} style={[tabNavigatorStyles.tabLogo, { tintColor: color }]} resizeMode='contain' />
          );
        },
      })}
    />

        <Tab.Screen name="Search" component={CategoryScreen} 
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return (
                  <Image source={searchlogo} style={[tabNavigatorStyles.tabLogo, {tintColor: color }]} resizeMode='contain' />
              );
            },
          })}
        />
    </Tab.Navigator>
);

}

export default TabNavigator;
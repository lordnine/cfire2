import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import SearchScreen from '../../../screens/searchScreen';
import CategoryScreen from '../../../screens/categoryScreen';
import HomeScreen from '../../../screens/homeScreen';
import houselogo from '../../../assets/images/houselogo.png';
import searchlogo from '../../../assets/images/searchlogo.png';

const Tab = createBottomTabNavigator();



const TabNavigator = () => {
return(
    <Tab.Navigator initialRouteName="Home" drawerPosition='right' tabBarOptions={{activeTintColor: 'cornflowerblue'}}

    >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return (
            <Image source={houselogo} style={{height: 14, width: 14, marginTop: 8, tintColor: color }} />
             );
          },
        })}
        />
        <Tab.Screen name="Search" component={SearchScreen} 
                options={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    // You can return any component that you like here!
                    return (
                    <Image source={searchlogo} style={{height: 14, width: 14, marginTop: 8, tintColor: color }} />
                     );
                  },
                })}
        />
        <Tab.Screen name="categories" component={CategoryScreen} />
    </Tab.Navigator>
);

}

export default TabNavigator;
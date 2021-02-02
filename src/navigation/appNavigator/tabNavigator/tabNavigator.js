import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/homeScreen';
import SettingsScreen from '../../../screens/settingsScreen';
import SearchScreen from '../../../screens/searchScreen';
import DrawerNavigator from '../drawerNavigator/drawerNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
return(
    <Tab.Navigator initialRouteName="Home" drawerPosition='right'>
        <Tab.Screen name="Drawer" component={DrawerNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
);

}

export default TabNavigator;
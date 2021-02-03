import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../../../screens/settingsScreen';
import SearchScreen from '../../../screens/searchScreen';
import DrawerNavigator from '../drawerNavigator/drawerNavigator';
import CategoryScreen from '../../../screens/categoryScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
return(
    <Tab.Navigator initialRouteName="Home" drawerPosition='right'>
        <Tab.Screen name="Drawer" component={DrawerNavigator} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="categories" component={CategoryScreen} />
    </Tab.Navigator>
);

}

export default TabNavigator;
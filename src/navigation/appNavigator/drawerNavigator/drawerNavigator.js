import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../../screens/homeScreen';
import SettingsScreen from '../../../screens/settingsScreen';
import SearchScreen from '../../../screens/searchScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
return(
    <Drawer.Navigator initialRouteName="Home" drawerPosition='right'>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
    </Drawer.Navigator>
);

}

export default DrawerNavigator;
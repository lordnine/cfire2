import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../../../screens/settingsScreen';
import SearchScreen from '../../../screens/searchScreen';
import TabNavigator from '../tabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
return(
    <Drawer.Navigator initialRouteName="Tab" drawerPosition='right'>
        <Drawer.Screen name="Tab" component={TabNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
    </Drawer.Navigator>
);

}

export default DrawerNavigator;
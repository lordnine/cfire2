import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../../../screens/settingsScreen';
import TabNavigator from '../tabNavigator';
import houselogo from '../../../assets/images/houselogo.png';

const Drawer = createDrawerNavigator();

import { CAMPFIRE_RED } from '../../../styles/colors';


const DrawerNavigator = () => {
return(
    <Drawer.Navigator initialRouteName="Tab" drawerPosition='right'
    drawerContentOptions={{
        inactiveTintColor: 'darkgrey',
        activeBackgroundColor: '#a854Fd',
        activeTintColor: 'white'
      }} 
    >
        <Drawer.Screen name="Home" component={TabNavigator} 
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
);

}

export default DrawerNavigator;
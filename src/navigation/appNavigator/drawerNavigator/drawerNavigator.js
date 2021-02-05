import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../../../screens/settingsScreen';
import TabNavigator from '../tabNavigator';
import houselogo from '../../../assets/images/houselogo.png';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
return(
    <Drawer.Navigator initialRouteName="Tab" drawerPosition='right'
    drawerContentOptions={{
        inactiveTintColor: 'darkgrey',
      }} 
    >
        <Drawer.Screen name="Home" component={TabNavigator} 
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
);

}

export default DrawerNavigator;